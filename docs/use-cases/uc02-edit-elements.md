---
title: UC02 — Chỉnh sửa tường hoặc lỗ mở
description: Chỉnh sửa đối tượng kiến trúc và giữ dữ liệu liên quan nhất quán.
sidebar_position: 3
---

# UC02 — Chỉnh sửa tường hoặc lỗ mở

## 5. UC02 — Chỉnh sửa tường hoặc lỗ mở

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Hiệu chỉnh hình học hoặc thông số mà giữ quan hệ đối tượng nhất quán |
| Tác nhân | ACT01 |
| Kích hoạt | Chọn thêm, sửa hoặc xóa tường/lỗ mở trên editor |
| Tiền điều kiện | Dự án có cấu trúc 2D; người dùng có quyền sửa; sửa số đo thực yêu cầu tỷ lệ đã xác nhận |
| Dữ liệu vào | Đối tượng, vị trí, kích thước, tường chủ và lựa chọn xử lý đối tượng phụ thuộc |
| Hậu điều kiện thành công | Thay đổi được áp dụng thành một thao tác nhất quán; revision tăng; mô hình cũ được đánh dấu cần cập nhật nếu hình học thay đổi |
| Bảo đảm tối thiểu | Thao tác không hợp lệ hoặc bị hủy không thay đổi dữ liệu đã áp dụng |
| Quy tắc | BR04–BR10 |

### Luồng chính — Sửa đối tượng

1. Người dùng chọn tường hoặc lỗ mở.
2. Ứng dụng hiển thị thuộc tính và các đối tượng liên quan.
3. Người dùng đổi vị trí hoặc thông số rồi chọn áp dụng.
4. Ứng dụng tạo bản xem trước, xác định các phòng, tường và lỗ mở chịu ảnh hưởng.
5. Ứng dụng kiểm tra hình học và quan hệ bị tác động bằng UC09.
6. Nếu không phát sinh lỗi chặn, ứng dụng áp dụng thay đổi và lưu thao tác để hoàn tác.
7. Ứng dụng cập nhật 2D; cập nhật 3D hoặc đánh dấu mô hình cũ cần cập nhật theo UC10.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 1, thêm:** Người dùng chọn loại đối tượng; với lỗ mở phải chọn tường chủ; nhập thuộc tính rồi tiếp tục bước 4.
- **A2 — Bước 3, xóa lỗ mở:** Ứng dụng bỏ quan hệ với tường chủ, kiểm tra rồi áp dụng tại bước 6.
- **A3 — Bước 3, xóa tường có đối tượng phụ thuộc:** Liệt kê lỗ mở bị ảnh hưởng. Người dùng chọn hủy hoặc xác nhận xóa cả tường và các lỗ mở liên quan; phòng bị ảnh hưởng được đánh dấu để kiểm tra lại. Toàn bộ xóa là một thao tác hoàn tác được. Đây là chính sách MVP đề xuất.
- **A4 — Bước 4, tường dịch chuyển:** Xem trước vị trí lỗ mở sau thay đổi. Chính sách đề xuất giữ khoảng cách dọc tường từ đầu mút tham chiếu; không tự thu nhỏ cửa để làm vừa tường.
- **E1 — Bước 5, lỗ mở vượt biên hoặc có lỗi mới:** Không áp dụng; chỉ rõ lỗi, quay lại bước 3. Vẫn cho phép sửa từng phần của dữ liệu nhận diện vốn đã có lỗi nếu thao tác không tạo lỗi chặn mới ở vùng chịu tác động.
- **E2 — Bước 6, đối tượng đã thay đổi:** Yêu cầu tải lại thuộc tính hiện tại, không áp dụng lên đối tượng khác revision.

### Nghiệm thu

- **AC-UC02-01:** Đổi chiều dài tường khiến cửa vượt biên phải bị chặn; chiều rộng cửa không tự thay đổi.
- **AC-UC02-02:** Xóa tường có cửa phải hiển thị tác động trước khi thực hiện; hủy giữ nguyên tường và cửa.
- **AC-UC02-03:** Sau một thay đổi hợp lệ, 2D và 3D không đồng thời được gắn nhãn hiện hành nếu khác revision.
