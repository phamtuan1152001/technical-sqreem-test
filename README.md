# Technical Sqreem Test

## English

### 1. Requirements

- Node.js `20+`
- npm `10+` (included in newer Node.js versions)

Quick check:

```bash
node -v
npm -v
```

### 2. Install dependencies

From the project root:

```bash
npm install
```

### 3. Environment variables (optional)

The project supports OpenAI API calls via:

- `VITE_OPENAI_API_KEY` (this secret key will be shared in email)
- `VITE_OPENAI_API_URL` (default: `https://api.openai.com/v1/responses`)

At the moment, `src/services/llm-service.ts` sets `apiKey` to an empty string, so the app uses fallback sample data.

To enable real API calls:

1. Update `.env` with a valid key.
2. In `src/services/llm-service.ts`, change:

```ts
const apiKey = ""
```

to:

```ts
const apiKey = import.meta.env.VITE_OPENAI_API_KEY
```

### 4. Run locally

```bash
npm run dev
```

Default local URL: `http://localhost:5173`

## Tiếng Việt

### 1. Yêu cầu môi trường

- Node.js `20+`
- npm `10+` (di kem Node.js moi)

Kiểm tra nhanh:

```bash
node -v
npm -v
```

### 2. Cài thư viện

Trong thư mục dự án:

```bash
npm install
```

### 3. Cấu hình biến môi trường (tuỳ chọn)

Dự án có hỗ trợ gọi OPENAI qua biến:

- `VITE_OPENAI_API_KEY` (khoá bảo mật này sẽ được đính kèm trong mail)
- `VITE_OPENAI_API_URL` (mặc định: `https://api.openai.com/v1/responses`)

Hiện tại trong code, file `src/services/llm-service.ts` đang để `apiKey` rỗng nên app sẽ dùng dữ liệu fallback mẫu.

Nếu muốn bật gọi API thật:

1. Cập nhật `.env` với khoá hợp lệ.
2. Trong `src/services/llm-service.ts`, đổi:

```ts
const apiKey = ""
```

thành:

```ts
const apiKey = import.meta.env.VITE_OPENAI_API_KEY
```

### 4. Chạy dự án ở local

```bash
npm run dev
```

Mặc định ứng dụng chạy tại: `http://localhost:5173`