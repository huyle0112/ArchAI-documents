---
title: UC09 — Kiểm tra tính hợp lệ
description: Kiểm tra lỗi chặn, cảnh báo và tính nhất quán.
sidebar_position: 10
---

# UC09 — Kiểm tra tính hợp lệ

## 12. UC09 — Kiểm tra tính hợp lệ

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Xác định dữ liệu có đủ điều kiện dựng và chỉ ra vấn đề cần xử lý |
| Tác nhân | ACT01 khi yêu cầu trực tiếp; có thể được gọi trong use case khác |
| Kích hoạt | Chọn kiểm tra, áp dụng thay đổi hoặc yêu cầu dựng hình |
| Tiền điều kiện | Có dữ liệu nháp để kiểm tra; kết quả phải gắn với revision cụ thể |
| Hậu điều kiện thành công | Có danh sách lỗi/cảnh báo và kết luận trên đúng phạm vi, revision đã kiểm tra |
| Bảo đảm tối thiểu | Kiểm tra lỗi hoặc bị gián đoạn không được trả kết luận “đạt” |
| Quy tắc | BR01–BR10, BR12 |

### Luồng chính

1. Ứng dụng ghi revision và phạm vi kiểm tra.
2. Kiểm tra dữ liệu bắt buộc, đơn vị, tỷ lệ và xác nhận cần thiết.
3. Kiểm tra kích thước, tham chiếu đối tượng, polygon và giao tường theo quy tắc hình học.
4. Kiểm tra quan hệ cửa–tường, tường chung và đường tiếp cận qua cửa/lối mở nếu đủ dữ liệu.
5. Phân loại vấn đề; hiển thị đối tượng liên quan, nguyên nhân và hướng xử lý.
6. Nếu không còn lỗi chặn trên toàn bộ mô hình hiện tại, cho phép chuyển sẵn sàng dựng.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 1, kiểm tra cục bộ sau chỉnh sửa:** Chỉ cập nhật kết quả vùng và quan hệ phụ thuộc được xét; không kết luận toàn bộ dự án đạt chỉ từ lần kiểm tra cục bộ.
- **A2 — Bước 5, có cảnh báo:** Người dùng đọc và xác nhận đã xem nếu cần; cảnh báo vẫn được lưu, không đổi thành đã sửa.
- **E1 — Bước 2, chưa có cấu trúc:** Báo chưa đủ dữ liệu, không coi danh sách lỗi rỗng là đạt.
- **E2 — Bước 6, revision đã thay đổi:** Kết quả cũ không mở khóa dựng cho revision mới; chạy lại hoặc yêu cầu kiểm tra mới.
- **E3 — Bước 3–4, bộ kiểm tra gặp lỗi:** Báo kiểm tra chưa hoàn tất và giữ trạng thái chưa được xác minh.

### Phân loại đề xuất

| Loại | Ví dụ | Xử lý |
| --- | --- | --- |
| Lỗi chặn | Thiếu tỷ lệ/chiều cao bắt buộc, tọa độ không hợp lệ, lỗ mở mất tường chủ, phòng tự cắt trong phạm vi sẽ dựng | Sửa trước khi dựng chính thức |
| Cảnh báo | Kết nối phòng cần xem lại, thông số bất thường nhưng chưa có ngưỡng cứng | Hiển thị và lưu trạng thái đã xem |
| Cần xác nhận | Thông số bắt buộc mới chỉ là mặc định hoặc dự đoán | Chặn xác nhận hoàn tất cho đến khi được bổ sung/xác nhận |

### Nghiệm thu

- **AC-UC09-01:** Lỗ mở tham chiếu tường không tồn tại tạo lỗi chặn gắn đúng đối tượng.
- **AC-UC09-02:** Kết quả kiểm tra revision cũ không đủ điều kiện dựng revision mới.
- **AC-UC09-03:** Bộ kiểm tra thất bại không hiển thị “không có lỗi”.
