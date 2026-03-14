import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const buildTimestampedFilename = (filename: string): string => {
	const now = new Date()
	const pad = (value: number) => String(value).padStart(2, '0')
	const timestamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`

	const isPdf = filename.toLowerCase().endsWith('.pdf')
	const baseName = isPdf ? filename.slice(0, -4) : filename
	return `${baseName}-${timestamp}.pdf`
}

export const exportHealthReportPdf = async (
	element: HTMLElement | null,
	filename = 'health-report.pdf',
): Promise<void> => {
	if (!element) {
		throw new Error('No element found to export')
	}

	element.classList.add('pdf-export-mode')

	try {
		// Wait for layout + chart resize observers to settle in export mode.
		await new Promise((resolve) => requestAnimationFrame(() => resolve(null)))
		await new Promise((resolve) => setTimeout(resolve, 220))

		const sections = Array.from(element.querySelectorAll<HTMLElement>('.pdf-section'))
		const targets = sections.length > 0 ? sections : [element]

		const pdf = new jsPDF('p', 'mm', 'a4')
		const pageWidth = pdf.internal.pageSize.getWidth()
		const pageHeight = pdf.internal.pageSize.getHeight()
		const margin = 8
		const sectionGap = 3
		const contentWidth = pageWidth - margin * 2
		let cursorY = margin

		const ignoreExportElements = (node: Element) => node.classList?.contains('no-export')

		for (let sectionIndex = 0; sectionIndex < targets.length; sectionIndex += 1) {
			const target = targets[sectionIndex]
			const canvas = await html2canvas(target, {
				scale: 2,
				useCORS: true,
				backgroundColor: '#ffffff',
				scrollX: 0,
				scrollY: -window.scrollY,
				windowWidth: target.scrollWidth,
				windowHeight: target.scrollHeight,
				ignoreElements: ignoreExportElements,
			})

			const drawWidth = contentWidth
			const fullSectionHeightMm = (canvas.height * drawWidth) / canvas.width

			// If a full section fits current page, place it directly.
			if (fullSectionHeightMm <= pageHeight - cursorY - margin) {
				const imageData = canvas.toDataURL('image/jpeg', 0.92)
				pdf.addImage(imageData, 'JPEG', margin, cursorY, drawWidth, fullSectionHeightMm)
				cursorY += fullSectionHeightMm + sectionGap
				continue
			}

			// Move to a new page before drawing the section, unless it's the first content on page.
			if (cursorY > margin) {
				pdf.addPage()
				cursorY = margin
			}

			// Section too tall for one page: split it by available page height.
			const pxPerMm = canvas.width / drawWidth
			let sourceY = 0
			while (sourceY < canvas.height) {
				const availableMm = pageHeight - margin - cursorY
				const availablePx = Math.max(1, Math.floor(availableMm * pxPerMm))
				const sliceHeightPx = Math.min(availablePx, canvas.height - sourceY)

				const pageCanvas = document.createElement('canvas')
				pageCanvas.width = canvas.width
				pageCanvas.height = sliceHeightPx
				const pageContext = pageCanvas.getContext('2d')
				if (!pageContext) {
					throw new Error('Cannot generate PDF slice canvas.')
				}

				pageContext.drawImage(
					canvas,
					0,
					sourceY,
					canvas.width,
					sliceHeightPx,
					0,
					0,
					canvas.width,
					sliceHeightPx,
				)

				const pageImage = pageCanvas.toDataURL('image/jpeg', 0.92)
				const sliceHeightMm = (sliceHeightPx * drawWidth) / canvas.width
				pdf.addImage(pageImage, 'JPEG', margin, cursorY, drawWidth, sliceHeightMm)

				sourceY += sliceHeightPx
				if (sourceY < canvas.height) {
					pdf.addPage()
					cursorY = margin
				} else {
					cursorY += sliceHeightMm + sectionGap
				}
			}
		}

		pdf.save(buildTimestampedFilename(filename))
	} finally {
		element.classList.remove('pdf-export-mode')
	}
}
