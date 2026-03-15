# Technical Sqreem Test

## English

### 1. Requirements

- Node.js `20+`
- npm `10+`

Quick check:

```bash
node -v
npm -v
```

### 2. Install

```bash
npm install
```

### 3. Environment variables

Create/update `.env`:

```bash
VITE_OPENAI_API_KEY=your_openai_api_key (This key will be attched on mail)
VITE_OPENAI_API_URL=https://api.openai.com/v1/responses
```

### 4. Current LLM flow in code

- Active thunk: `src/features/health-thunk.ts` -> `generateHealthReport(...)`
- Active service flow: `src/services/llm-service.ts` -> `generateHealthReport(...)`
- API format: OpenAI Responses API with `text.format.type = "json_schema"`
- JSON schema source: `healthReportJsonSchema` in `src/constants/index.ts`

Important:

- In current code, `apiKey` is intentionally empty:

```ts
const apiKey = /* import.meta.env.VITE_OPENAI_API_KEY */ ""
```

- Because of that, app returns `fallbackLLMResponseVer2` instead of calling OpenAI.

To enable real API calls, change it to:

```ts
const apiKey = import.meta.env.VITE_OPENAI_API_KEY
```

### 5. Run local

```bash
npm run dev      # start local dev server
```

Default dev URL: `http://localhost:5173`

---

## Tiếng Việt

### 1. Yêu cầu môi trường

- Node.js `20+`
- npm `10+`

Kiểm tra nhanh:

```bash
node -v
npm -v
```

### 2. Cài đặt

```bash
npm install
```

### 3. Biến môi trường

Cập nhật file `.env`:

```bash
VITE_OPENAI_API_KEY=your_openai_api_key (Khoá bảo mật này sẽ được đính kèm tại mail)
VITE_OPENAI_API_URL=https://api.openai.com/v1/responses
```

### 4. Luồng LLM hiện tại

- Thunk đang dùng: `src/features/health-thunk.ts` -> `generateHealthReport(...)`
- Service đang dùng: `src/services/llm-service.ts` -> `generateHealthReport(...)`
- Đang gọi OpenAI Responses API theo dạng `json_schema`
- Schema được định nghĩa trong `src/constants/index.ts` (`healthReportJsonSchema`)

Lưu ý:

- Hiện tại `apiKey` trong code đang để rỗng:

```ts
const apiKey = /* import.meta.env.VITE_OPENAI_API_KEY */ ""
```

- Vì vậy app se dùng `fallbackLLMResponseVer2`, không gọi API thật.

Nếu muốn bật gọi API thật, đổi thành:

```ts
const apiKey = import.meta.env.VITE_OPENAI_API_KEY
```

### 5. Câu lệnh

```bash
npm run dev      # chạy local
```

Mặc định chạy ở local URL: `http://localhost:5173`