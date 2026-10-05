---
title: Validation API
sidebar_position: 6
---

# Validation API

## Kiểm tra revision

`POST /api/projects/{projectId}/revisions/{revisionId}/validation`

Kiểm tra điều kiện dựng mô hình và trả về lỗi chặn, cảnh báo cùng trạng thái hợp lệ.

Response gồm `valid`, `blockingIssues` và `warnings`. Ví dụ lỗi: `MISSING_WALL_HEIGHT`, `INVALID_SCALE`, `UNCONFIRMED_ELEMENT`.

## Lấy kết quả gần nhất

`GET /api/projects/{projectId}/revisions/{revisionId}/validation`
