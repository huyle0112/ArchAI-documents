---
title: Models API
sidebar_position: 7
---

# Models API

## Dựng mô hình

`POST /api/projects/{projectId}/revisions/{revisionId}/model`

Tạo mô hình 3D khi revision không còn lỗi chặn.

Response `202` trả `jobId`. Nếu revision chưa hợp lệ, trả `409 REVISION_NOT_VALID`.

## Lấy mô hình

`GET /api/projects/{projectId}/revisions/{revisionId}/model`

Lấy mô hình 3D và dữ liệu kiến trúc tương ứng.

## Theo dõi tác vụ

`GET /api/jobs/{jobId}`

Trả `queued`, `processing`, `completed` hoặc `failed`, kèm kết quả khi hoàn tất.

## Hoàn tác chỉnh sửa

`POST /api/projects/{projectId}/revisions/{revisionId}/undo`

Khôi phục thao tác gần nhất khi revision chưa lưu (UC11).

## Xuất mô hình

`POST /api/projects/{projectId}/revisions/{revisionId}/exports`

Request gồm `format` (`glb`, `ifc`, `dxf` nếu được bật); trả job xuất và URL tải khi hoàn tất (UC13).
