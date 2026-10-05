---
title: Drawings API
sidebar_position: 3
---

# Drawings API

## Tải bản vẽ

`POST /api/projects/{projectId}/drawings`

Nhận bản vẽ đầu vào, kiểm tra loại tệp và tạo revision xử lý.

Request dùng `multipart/form-data`, trường `file` bắt buộc. MVP hỗ trợ PNG/JPEG một mặt bằng một tầng. Response `202` trả `drawingId` và `revisionId`.

## Kiểm tra bản vẽ

`GET /api/projects/{projectId}/drawings/{drawingId}/validation`

Trả về trạng thái tiếp nhận, lỗi định dạng và các điều kiện đầu vào chưa đạt.

## Lấy thông tin bản vẽ

`GET /api/projects/{projectId}/drawings/{drawingId}`

Trả metadata, kích thước ảnh và checksum.
