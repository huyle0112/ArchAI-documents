---
title: Projects API
sidebar_position: 2
---

# Projects API

## Tạo dự án

`POST /api/projects`

Tạo dự án mới và trả về `projectId` cùng revision hiện tại.

## Mở dự án

`GET /api/projects/{projectId}`

Lấy dự án, revision hiện tại, trạng thái lưu và các cảnh báo còn tồn tại.

## Lưu dự án

`POST /api/projects/{projectId}/revisions/{revisionId}/save`

Lưu bản nháp hoặc kết quả hoàn tất. Khi thất bại, giữ trạng thái chưa lưu để thử lại.

## Liệt kê dự án

`GET /api/projects?status=active&limit=20&cursor=...`

Trả danh sách phân trang.

## Cập nhật dự án

`PATCH /api/projects/{projectId}`

Cập nhật `name` hoặc `description`.
