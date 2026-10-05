---
title: Recognition API
sidebar_position: 5
---

# Recognition API

## Nhận diện cấu trúc

`POST /api/projects/{projectId}/revisions/{revisionId}/recognition`

Nhận diện tường, sàn, lỗ mở và trả về đối tượng cùng cảnh báo.

Response `202` trả `jobId`; dùng `GET /api/jobs/{jobId}` để theo dõi. Tham số tùy chọn: `mode` (`full`/`draft`) và `confidenceThreshold`.

## Hiệu chỉnh đối tượng

`PATCH /api/projects/{projectId}/revisions/{revisionId}/elements/{elementId}`

Cập nhật một đối tượng nhận diện trước khi xác nhận.

## Lấy danh sách đối tượng

`GET /api/projects/{projectId}/revisions/{revisionId}/elements?type=wall&confirmed=false`
