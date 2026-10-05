---
title: UC01 — Tạo mô hình sơ bộ
description: Điều phối quy trình tạo mô hình 3D sơ bộ từ bản vẽ mặt bằng.
sidebar_position: 2
---

# UC01 — Tạo mô hình sơ bộ

## 4. UC01 — Tạo mô hình sơ bộ từ mặt bằng

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Có mô hình 3D tương ứng với mặt bằng và các thông số đã xác nhận |
| Tác nhân | ACT01 |
| Kích hoạt | Người dùng chọn bắt đầu dựng mô hình từ bản vẽ |
| Tiền điều kiện | Có quyền làm việc với dự án; có bản vẽ thuộc loại đầu vào dự kiến |
| Hậu điều kiện thành công | Mô hình, dữ liệu kiến trúc và bản lưu phản ánh cùng revision; trạng thái xác nhận và cảnh báo được giữ lại |
| Bảo đảm tối thiểu | Dữ liệu đã lưu không mất; tác vụ chưa hoàn tất không được gắn nhãn thành công |
| Quy tắc | BR01–BR12 |

### Luồng chính

1. Người dùng tạo hoặc mở dự án bằng UC03.
2. Người dùng tải bản vẽ; ứng dụng kiểm tra và tiếp nhận bằng UC04.
3. Người dùng xác nhận tỷ lệ bằng UC05.
4. Người dùng yêu cầu nhận diện; ứng dụng cung cấp kết quả theo UC06.
5. Người dùng đối chiếu và xác nhận đối tượng bằng UC07; dùng UC02 nếu cần sửa.
6. Người dùng bổ sung thông số còn thiếu bằng UC08.
7. Ứng dụng chạy UC09 trên revision hiện tại và hiển thị vấn đề.
8. Khi không còn lỗi chặn, người dùng dựng và xem mô hình bằng UC10.
9. Người dùng lưu dự án bằng UC03; ứng dụng báo kết quả lưu.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 3, chưa biết kích thước:** Có thể thực hiện UC06 để xem nhận diện nháp; quay lại bước 3 trước khi dựng mô hình đúng tỷ lệ.
- **A2 — Bước 5–7, cần hiệu chỉnh:** Thực hiện UC02/UC08 rồi chạy lại bước 7. Không phải tải ảnh hoặc nhận diện lại nếu dữ liệu ảnh không thay đổi.
- **A3 — Bất kỳ bước nào, dừng để làm sau:** Lưu bản nháp qua UC03, kết thúc; lần sau tiếp tục từ trạng thái còn thiếu.
- **E1 — Bước 4 hoặc 8, tác vụ thất bại:** Báo lỗi, giữ dữ liệu hiện có, cho thử lại tại bước thất bại.
- **E2 — Bước 9, lưu thất bại:** Giữ dấu chưa lưu, cho thử lại; không báo hoàn tất toàn bộ luồng.

### Nghiệm thu

- **AC-UC01-01:** Với bản vẽ thuộc phạm vi và thông số đủ, hoàn thành luồng tạo được mô hình có tường, sàn và lỗ mở tương ứng dữ liệu đã xác nhận.
- **AC-UC01-02:** Khi thiếu tỷ lệ hoặc chiều cao bắt buộc, hệ thống chỉ rõ trường thiếu và không xác nhận mô hình đã đủ điều kiện.
- **AC-UC01-03:** Lưu rồi mở lại giữ được các thông số và trạng thái xác nhận của luồng vừa hoàn thành.
