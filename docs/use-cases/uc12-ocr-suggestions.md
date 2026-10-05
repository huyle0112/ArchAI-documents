---
title: UC12 — Áp dụng gợi ý OCR
description: Đọc, kiểm tra và áp dụng thông tin do OCR đề xuất.
sidebar_position: 13
---

# UC12 — Áp dụng gợi ý OCR

## 15. UC12 — Đọc và áp dụng gợi ý OCR

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Giảm nhập tay nhãn và số đo nhưng giữ bước đối chiếu |
| Tác nhân | ACT01 |
| Ưu tiên | Nên có; luồng chính vẫn dùng được khi OCR không sẵn sàng |
| Kích hoạt | Yêu cầu đọc chữ hoặc xem gợi ý đã tạo |
| Tiền điều kiện | Có ảnh làm việc và tính năng OCR được bật |
| Hậu điều kiện thành công | Gợi ý được gắn đúng đối tượng/tham chiếu và xác nhận khi áp dụng |
| Bảo đảm tối thiểu | Chữ nhận diện chưa xác nhận không tự thay số đo đang dùng |
| Quy tắc | BR01–BR03, BR11 |

### Luồng chính

1. Người dùng yêu cầu đọc chữ trên ảnh hoặc vùng được chọn.
2. Ứng dụng hiển thị nội dung dự đoán cùng vị trí nguồn trên ảnh.
3. Người dùng chọn gợi ý, sửa nội dung nếu cần và xác định đối tượng/đoạn tham chiếu liên quan.
4. Người dùng xác nhận ý nghĩa, giá trị và đơn vị nếu là số đo.
5. Ứng dụng áp dụng thông qua UC05 hoặc UC08 và giữ nguồn OCR để truy nguyên.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 3, người dùng bỏ qua:** Không thay dữ liệu, tiếp tục nhập thủ công.
- **E1 — Bước 2, không đọc được hoặc OCR lỗi:** Báo chưa có gợi ý; không chặn UC05/UC08.
- **E2 — Bước 4, không rõ đơn vị hoặc đối tượng:** Chưa cho áp dụng; quay lại bước 3.
- **E3 — Bước 5, giá trị mâu thuẫn dữ liệu đã xác nhận:** Hiển thị giá trị cũ/mới và yêu cầu lựa chọn; không tự ghi đè.

### Nghiệm thu

- **AC-UC12-01:** Đọc được số “3600” nhưng chưa có đơn vị hoặc đoạn liên quan thì không tự đổi tỷ lệ.
- **AC-UC12-02:** OCR thất bại vẫn cho xác nhận kích thước bằng nhập tay.
- **AC-UC12-03:** Áp dụng gợi ý giữ được vị trí/nội dung nguồn và trạng thái người dùng xác nhận.
