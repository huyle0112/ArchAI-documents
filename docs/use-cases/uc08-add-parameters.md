---
title: UC08 — Bổ sung thông số
description: Bổ sung các thông số kiến trúc còn thiếu.
sidebar_position: 9
---

# UC08 — Bổ sung thông số

## 11. UC08 — Bổ sung thông số kiến trúc

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Hoàn thiện dữ liệu đủ để dựng sàn, tường và lỗ mở |
| Tác nhân | ACT01 |
| Kích hoạt | Chọn thông số chung hoặc thuộc tính đối tượng |
| Tiền điều kiện | Dự án đang mở; đối tượng được sửa tồn tại nếu nhập riêng |
| Dữ liệu vào | Chiều cao tầng/tường, bề dày tường/sàn, cao độ sàn, chiều rộng/cao lỗ mở và cao độ bậu |
| Hậu điều kiện thành công | Giá trị, đơn vị, nguồn và xác nhận được ghi; dữ liệu bị ảnh hưởng được kiểm tra lại |
| Bảo đảm tối thiểu | Giá trị không hợp lệ không thay dữ liệu trước; mặc định chưa chấp nhận không trở thành dữ liệu đã xác nhận |
| Quy tắc | BR02–BR05, BR10 |

### Luồng chính

1. Ứng dụng liệt kê thông số thiếu theo loại đối tượng.
2. Người dùng chọn đối tượng hoặc phạm vi áp dụng chung.
3. Người dùng nhập giá trị và đơn vị, hoặc chọn giá trị đề xuất.
4. Ứng dụng hiển thị các đối tượng sẽ thay đổi và kiểm tra giá trị cùng quan hệ phụ thuộc.
5. Người dùng xác nhận áp dụng.
6. Ứng dụng cập nhật thông số và nguồn; chạy UC09 trên phần bị ảnh hưởng, đánh dấu cần cập nhật 3D khi phù hợp.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 2, có giá trị riêng:** Giá trị chung mặc định chỉ áp dụng cho đối tượng đang kế thừa. Muốn thay cả giá trị riêng phải chọn rõ phạm vi ghi đè và xem trước.
- **A2 — Bước 3, dùng mặc định:** Giữ nguồn là mặc định và ghi thêm người dùng đã xác nhận; không đổi nguồn thành “đọc từ bản vẽ”.
- **E1 — Bước 4, thiếu đơn vị, giá trị không hữu hạn hoặc kích thước không dương:** Báo lỗi đúng trường, quay lại bước 3. Cao độ sàn/bậu dùng quy tắc riêng; không áp dụng máy móc điều kiện dương của kích thước.
- **E2 — Bước 4, cửa cao hơn tường:** Chặn áp dụng, chỉ rõ quan hệ vi phạm; không tự giảm chiều cao cửa.

### Nghiệm thu

- **AC-UC08-01:** Giá trị chung thay đổi không tự ghi đè giá trị riêng của đối tượng.
- **AC-UC08-02:** Bậu cửa sổ cộng chiều cao lỗ mở vượt chiều cao tường phải bị phát hiện.
- **AC-UC08-03:** Thông số mặc định đã chấp nhận vẫn truy nguyên được nguồn mặc định.
