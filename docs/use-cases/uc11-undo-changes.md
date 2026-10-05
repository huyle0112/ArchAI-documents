---
title: UC11 — Hoàn tác chỉnh sửa
description: Khôi phục trạng thái nhất quán trước thao tác chỉnh sửa.
sidebar_position: 12
---

# UC11 — Hoàn tác chỉnh sửa

## 14. UC11 — Hoàn tác chỉnh sửa

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Khôi phục trước một thao tác chỉnh sửa đã áp dụng |
| Tác nhân | ACT01 |
| Kích hoạt | Chọn hoàn tác |
| Tiền điều kiện | Có thao tác thuộc lịch sử hoàn tác của phiên làm việc hiện tại |
| Hậu điều kiện thành công | Khôi phục đối tượng và quan hệ liên quan nhất quán; tạo revision mới; kiểm tra và cập nhật trạng thái 3D |
| Bảo đảm tối thiểu | Không khôi phục từng phần nếu thao tác hoàn tác thất bại |
| Quy tắc | BR10, BR11 |

### Luồng chính

1. Người dùng yêu cầu hoàn tác.
2. Ứng dụng xác định thao tác gần nhất và toàn bộ dữ liệu phụ thuộc.
3. Ứng dụng khôi phục trạng thái trước thao tác một cách nguyên vẹn.
4. Ứng dụng kiểm tra dữ liệu đã khôi phục, cập nhật 2D và đánh dấu/cập nhật 3D.
5. Ứng dụng thông báo thao tác đã hoàn tác; thay đổi cần được lưu nếu muốn giữ lâu dài.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 3, thao tác trước là xóa tường và cửa:** Khôi phục cả tường, cửa, quan hệ và trạng thái xác nhận liên quan.
- **E1 — Bước 2, lịch sử rỗng:** Không thực hiện; nút vô hiệu hóa hoặc giải thích không còn thao tác để hoàn tác.
- **E2 — Bước 3, không khôi phục được đầy đủ:** Giữ trạng thái trước yêu cầu hoàn tác và báo lỗi; không khôi phục tường mà bỏ cửa phụ thuộc.

### Nghiệm thu

- **AC-UC11-01:** Hoàn tác xóa tường phục hồi các cửa đã bị xóa cùng thao tác.
- **AC-UC11-02:** Revision khôi phục là một revision mới, nên tác vụ cũ đang chạy không thể ghi đè nó.
- **AC-UC11-03:** Không yêu cầu lịch sử hoàn tác tồn tại sau đóng/mở dự án ở MVP; dữ liệu đã lưu vẫn phải giữ đầy đủ.
