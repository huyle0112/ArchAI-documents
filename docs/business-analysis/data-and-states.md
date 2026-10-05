---
title: Dữ liệu và trạng thái
description: Dữ liệu cần quản lý và vòng đời trạng thái của dự án.
sidebar_position: 8
---

# Dữ liệu và trạng thái

## 8. Dữ liệu và trạng thái nghiệp vụ

### 8.1. Dữ liệu cần quản lý

| Dữ liệu | Nội dung nghiệp vụ |
| --- | --- |
| Dự án | Tên, bản vẽ nguồn, trạng thái, lần lưu gần nhất |
| Tham chiếu tỷ lệ | Hai điểm, chiều dài thực, đơn vị, trạng thái xác nhận |
| Đối tượng kiến trúc | Phòng, tường, sàn, cửa, cửa sổ và thông số |
| Quan hệ | Phòng–tường, cửa–tường, kết nối giữa các không gian |
| Nguồn thông số | Nguồn tạo, giá trị gốc nếu cần đối chiếu, trạng thái xác nhận |
| Vấn đề | Đối tượng liên quan, loại lỗi, mức độ và trạng thái xử lý |
| Trạng thái mô hình | Phiên bản dữ liệu đã dùng để dựng, kết quả và lỗi dựng hình |

House Graph là cách tổ chức dữ liệu dự kiến; tài liệu này chưa quy định database, API hay schema kỹ thuật cuối cùng.

### 8.2. Trạng thái dự án

| Trạng thái | Ý nghĩa | Bước tiếp theo |
| --- | --- | --- |
| Nháp | Đang chuẩn bị đầu vào | Kiểm tra bản vẽ, tỷ lệ |
| Đang xử lý | Tác vụ nhận diện đang chạy | Chờ kết quả hoặc xử lý lỗi |
| Cần xác nhận | Có dữ liệu nhưng còn thiếu thông số hoặc lỗi | Người dùng kiểm tra và sửa |
| Sẵn sàng dựng | Đủ dữ liệu bắt buộc và vượt qua kiểm tra | Dựng mô hình |
| Đã dựng | Có 3D tương ứng dữ liệu hiện tại | Xem, lưu hoặc chỉnh sửa |
| Cần cập nhật | Dữ liệu đã thay đổi sau lần dựng | Kiểm tra và dựng lại phần ảnh hưởng |

Thất bại là trạng thái của tác vụ xử lý; không được làm mất bản lưu gần nhất của dự án. Nếu tác vụ hoàn tất sau khi người dùng đã chỉnh sửa, kết quả không được tự thay thế trạng thái mới hơn.
