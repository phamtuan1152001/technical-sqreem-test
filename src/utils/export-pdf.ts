import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const exportHealthReportPdf = async (
  element: HTMLElement | null,
  filename = 'health-report.pdf',
): Promise<void> => {
  if (!element) {
    throw new Error('No element found to export')
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  })
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF('p', 'mm', 'a4')
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
  pdf.save(filename)
}
