---
title: API Schemas
sidebar_position: 8
---

# API Schemas

## Project

```json
{ "id": "uuid", "name": "string", "status": "active", "createdAt": "datetime", "updatedAt": "datetime" }
```

## Revision

```json
{ "id": "uuid", "projectId": "uuid", "status": "draft", "drawingId": "uuid", "version": 1, "dirty": true }
```

`status`: `draft`, `processing`, `valid`, `completed`, `failed`.

## Element

```json
{ "id": "uuid", "type": "wall", "geometry": { "x": 0, "y": 0, "width": 4000, "height": 200 }, "confidence": 0.98, "confirmed": false, "source": "recognition" }
```

`type`: `wall`, `floor`, `room`, `door`, `window`, `opening`.

## Pagination

Danh sách dùng `limit` (mặc định 20, tối đa 100), `cursor` và trả `meta.nextCursor`.
