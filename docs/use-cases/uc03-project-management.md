---
title: UC03 — Tạo, lưu và mở dự án
description: Quản lý vòng đời và bản lưu của dự án.
sidebar_position: 4
---

# UC03 — Tạo, lưu và mở dự án

## 6. UC03 — Tạo, lưu và mở dự án

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Bắt đầu một dự án hoặc tiếp tục công việc mà giữ nguyên dữ liệu đã lưu |
| Tác nhân | ACT01 |
| Kích hoạt | Chọn tạo mới, lưu hoặc mở dự án |
| Tiền điều kiện | Có quyền tương ứng; thao tác lưu yêu cầu một dự án đang mở |
| Dữ liệu | Tên dự án, ảnh nguồn, biến đổi ảnh, tỷ lệ, House Graph, thông số, nguồn dữ liệu, trạng thái xác nhận và revision |
| Hậu điều kiện thành công | Tạo được dự án, lưu được một bản nhất quán hoặc khôi phục đúng bản đã lưu |
| Bảo đảm tối thiểu | Lưu thất bại không phá bản lưu trước; mở thất bại không đóng mất dự án chưa lưu |

### Luồng chính — Tạo mới

1. Người dùng chọn tạo dự án và nhập tên.
2. Ứng dụng kiểm tra tên không rỗng sau khi bỏ khoảng trắng đầu/cuối.
3. Ứng dụng tạo định danh dự án và không gian làm việc ở trạng thái nháp.
4. Người dùng tiếp tục UC04 hoặc lưu bản nháp.

### Luồng thay thế và ngoại lệ

- **A1 — Kích hoạt lưu:** Ứng dụng chụp trạng thái nhất quán của revision hiện tại, lưu dữ liệu và thông báo thành công. Nếu người dùng sửa tiếp trong lúc lưu, revision mới vẫn mang dấu chưa lưu.
- **A2 — Kích hoạt mở:** Người dùng chọn dự án; ứng dụng đọc và kiểm tra dữ liệu, khôi phục ảnh, đối tượng, thông số và trạng thái xác nhận. Nếu hình học 3D không được lưu sẵn, dựng lại từ dữ liệu hợp lệ; bản nháp vẫn mở để sửa được.
- **A3 — Trước bước 3 hoặc A2, có thay đổi chưa lưu ở dự án khác:** Cho chọn lưu rồi chuyển, bỏ thay đổi hoặc hủy chuyển. Nếu lưu thất bại thì chưa chuyển.
- **E1 — Bước 2, tên rỗng:** Báo lỗi trường tên, quay lại bước 1.
- **E2 — A1, hết dung lượng hoặc lưu lỗi:** Giữ dấu chưa lưu và bản lưu trước, cho thử lại. Việc đóng trình duyệt khi chưa lưu không được xem là đã bảo toàn dữ liệu.
- **E3 — A2, dữ liệu hỏng hoặc phiên bản không hỗ trợ:** Báo không mở được, giữ nguyên nguồn; không ghi đè bằng dự án rỗng.
- **E4 — A1, bản lưu đã được cập nhật ở phiên khác:** Không âm thầm ghi đè; yêu cầu nạp bản mới hoặc lưu thành bản riêng nếu chức năng đó được hỗ trợ.

### Nghiệm thu

- **AC-UC03-01:** Lưu/mở lại giữ đúng đối tượng, nguồn thông số, tỷ lệ và trạng thái xác nhận.
- **AC-UC03-02:** Lỗi lưu không làm mất bản lưu thành công trước đó.
- **AC-UC03-03:** Lưu revision cũ thành công không xóa dấu chưa lưu của chỉnh sửa mới hơn.
