---
title: UC06 — Nhận diện cấu trúc
description: Nhận diện các đối tượng kiến trúc từ mặt bằng.
sidebar_position: 7
---

# UC06 — Nhận diện cấu trúc

## 9. UC06 — Nhận diện cấu trúc mặt bằng

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Nhận bộ đối tượng kiến trúc đề xuất để người dùng kiểm tra |
| Tác nhân | ACT01 |
| Kích hoạt | Chọn phân tích bản vẽ hoặc chạy lại nhận diện |
| Tiền điều kiện | Có ảnh làm việc; không có yêu cầu giống hệt đang chạy trên cùng revision |
| Hậu điều kiện thành công | Có bộ dự đoán gắn với ảnh và revision nguồn; trạng thái cần xác nhận |
| Bảo đảm tối thiểu | Kết quả thất bại, rỗng hoặc lỗi thời không thay dữ liệu đang được xác nhận |
| Quy tắc | BR02, BR03, BR09, BR11 |

### Luồng chính

1. Người dùng yêu cầu phân tích.
2. Ứng dụng ghi nhận ảnh và revision đầu vào, bắt đầu tác vụ và hiển thị trạng thái xử lý.
3. Ứng dụng nhận diện đối tượng và chuyển kết quả sang cấu trúc có thể hiển thị.
4. Ứng dụng kiểm tra đầu ra tối thiểu: dữ liệu đọc được, tọa độ hữu hạn, loại đối tượng được hỗ trợ.
5. Ứng dụng kiểm tra revision hiện tại còn phù hợp với kết quả.
6. Ứng dụng đưa kết quả vào bản nháp để đối chiếu bằng UC07; không tự xác nhận đúng.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 1, chưa có tỷ lệ:** Vẫn nhận diện theo tọa độ ảnh; ghi rõ chưa có kích thước thực được xác nhận.
- **A2 — Bước 1, chạy lại sau chỉnh sửa:** Tạo kết quả ứng viên riêng. Trước khi áp dụng phải thông báo phạm vi thay thế và cho giữ bản hiện tại. MVP không bắt buộc tự động hợp nhất hai kết quả.
- **E1 — Bước 2–4, hết thời gian chờ, dịch vụ lỗi hoặc đầu ra không hợp lệ:** Báo tác vụ thất bại, giữ dữ liệu cũ, cho thử lại; không tạo các đối tượng giả để lấp chỗ trống.
- **E2 — Bước 4, không tìm được đối tượng:** Hiển thị kết quả rỗng và đề nghị kiểm tra đầu vào; không ghi là nhận diện thành công đầy đủ.
- **E3 — Bước 5, dữ liệu đã thay đổi:** Đánh dấu kết quả không còn hiện hành; không tự áp dụng. Người dùng có thể yêu cầu chạy lại với dữ liệu mới.

### Nghiệm thu

- **AC-UC06-01:** Bấm yêu cầu lặp khi cùng tác vụ đang chạy không tạo nhiều bản cập nhật cạnh tranh.
- **AC-UC06-02:** Mọi đối tượng nhận diện mới mang nguồn dự đoán và trạng thái chưa xác nhận.
- **AC-UC06-03:** Kết quả đến muộn không ghi đè chỉnh sửa mới hơn.
