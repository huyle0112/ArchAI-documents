---
title: Revisions API
sidebar_position: 4
---

# Revisions API

## Xác nhận tỷ lệ

`POST /api/projects/{projectId}/revisions/{revisionId}/scale`

Lưu tỷ lệ và đơn vị đo do người dùng xác nhận.

## Cập nhật thông số

`PATCH /api/projects/{projectId}/revisions/{revisionId}/parameters`

Lưu chiều cao và các thông số kiến trúc còn thiếu.

## Xác nhận đối tượng

`POST /api/projects/{projectId}/revisions/{revisionId}/elements/confirm`

Ghi nhận các đối tượng đã được người dùng đối chiếu.

## Lấy revision

`GET /api/projects/{projectId}/revisions/{revisionId}`

Trả trạng thái, bản vẽ, tỷ lệ, thông số, kết quả kiểm tra và mô hình hiện tại.

## Tạo revision mới

`POST /api/projects/{projectId}/revisions`

Tạo bản nháp mới từ revision hiện tại để chỉnh sửa.
