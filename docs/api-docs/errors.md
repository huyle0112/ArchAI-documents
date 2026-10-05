---
title: API Errors
sidebar_position: 9
---

# API Errors

Response lỗi thống nhất:

```json
{ "error": { "code": "MISSING_PARAMETER", "message": "wallHeight is required", "field": "wallHeight", "step": "parameters" }, "meta": { "requestId": "uuid" } }
```

| HTTP | Code | Ý nghĩa |
| --- | --- | --- |
| 400 | `INVALID_REQUEST` | Request sai hoặc thiếu trường |
| 401 | `UNAUTHENTICATED` | Token thiếu hoặc hết hạn |
| 403 | `FORBIDDEN` | Không có quyền với project |
| 404 | `NOT_FOUND` | Không tìm thấy tài nguyên |
| 409 | `REVISION_CONFLICT` | Revision đã thay đổi |
| 409 | `REVISION_NOT_VALID` | Còn lỗi chặn |
| 413 | `FILE_TOO_LARGE` | Bản vẽ vượt giới hạn |
| 415 | `UNSUPPORTED_FILE_TYPE` | Định dạng không hỗ trợ |
| 422 | `VALIDATION_FAILED` | Dữ liệu không đạt quy tắc |
| 429 | `RATE_LIMITED` | Vượt giới hạn gọi API |
| 500 | `INTERNAL_ERROR` | Lỗi máy chủ |
| 503 | `PROCESSING_UNAVAILABLE` | Dịch vụ xử lý tạm thời không sẵn sàng |

Khi gặp `409`, client phải tải lại revision trước khi gửi thay đổi tiếp theo. Với `500` hoặc `503`, giữ dữ liệu hiện tại và retry bằng cùng `Idempotency-Key`.
