---
title: Tổng quan API
description: Tổng quan API của AI House Design Workspace, ánh xạ từ UC01.
sidebar_position: 1
---

# Tổng quan API

API phục vụ toàn bộ luồng UC01 — Tạo mô hình sơ bộ từ mặt bằng — và các use case UC02–UC13. Các API dùng chung `projectId` và `revisionId` để bảo đảm bản vẽ, dữ liệu kiến trúc, kiểm tra và mô hình thuộc cùng một revision.

## Nhóm endpoint

| Nhóm | Phạm vi | Trang |
| --- | --- | --- |
| Projects | Tạo, mở và lưu dự án | [Projects](./projects) |
| Drawings | Tải và kiểm tra bản vẽ | [Drawings](./drawings) |
| Revisions | Tỷ lệ, thông số và xác nhận dữ liệu | [Revisions](./revisions) |
| Recognition | Nhận diện và hiệu chỉnh đối tượng | [Recognition](./recognition) |
| Validation | Kiểm tra lỗi chặn và cảnh báo | [Validation](./validation) |
| Models | Dựng và lấy mô hình 3D | [Models](./models) |
| Schemas | Kiểu dữ liệu dùng chung | [Schemas](./schemas) |
| Errors | Mã lỗi và xử lý ngoại lệ | [Errors](./errors) |

## Luồng UC01 chuẩn

1. `POST /projects` — tạo dự án.
2. `POST /projects/{projectId}/drawings` — tải bản vẽ.
3. `POST /projects/{projectId}/revisions/{revisionId}/scale` — xác nhận tỷ lệ.
4. `POST /projects/{projectId}/revisions/{revisionId}/recognition` — nhận diện cấu trúc.
5. `PATCH .../elements/{elementId}` và `POST .../elements/confirm` — hiệu chỉnh, xác nhận.
6. `PATCH .../parameters` — bổ sung thông số.
7. `POST .../validation` — kiểm tra lỗi chặn.
8. `POST .../model` — dựng mô hình.
9. `POST .../save` — lưu revision.

## Quy ước chung

- Base path: `/api`
- JSON được dùng cho request và response, trừ nội dung bản vẽ tải lên.
- Lỗi xử lý phải giữ dữ liệu hiện có và trả về bước thất bại để thử lại.
- Không trả trạng thái hoàn tất khi còn lỗi chặn hoặc thiếu thông số bắt buộc.
- Mọi endpoint yêu cầu `Authorization: Bearer <token>` và quyền truy cập dự án.
- ID dùng UUID; thời gian dùng ISO 8601 UTC.
- Có thể gửi `Idempotency-Key` khi tạo, nhận diện, dựng hoặc lưu để retry an toàn.
- Response thành công có dạng `{ "data": ..., "meta": { "requestId": "..." } }`.
