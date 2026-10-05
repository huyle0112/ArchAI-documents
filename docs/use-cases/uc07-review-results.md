---
title: UC07 — Đối chiếu và xác nhận
description: Đối chiếu kết quả nhận diện với bản vẽ nguồn.
sidebar_position: 8
---

# UC07 — Đối chiếu và xác nhận

## 10. UC07 — Đối chiếu và xác nhận kết quả

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Xác định đối tượng nào đúng với bản vẽ và phần nào cần chỉnh sửa |
| Tác nhân | ACT01 |
| Kích hoạt | Mở kết quả nhận diện hoặc chọn kiểm tra mặt bằng |
| Tiền điều kiện | Có ảnh nguồn và bộ đối tượng đề xuất |
| Hậu điều kiện thành công | Ghi nhận xác nhận theo từng đối tượng/thuộc tính trên revision hiện tại |
| Bảo đảm tối thiểu | Phần chưa được kiểm tra vẫn chưa xác nhận; xác nhận không xóa lỗi hình học |
| Quy tắc | BR02, BR03, BR09, BR12 |

### Luồng chính

1. Ứng dụng chồng lớp đối tượng lên ảnh làm việc đúng hệ tọa độ.
2. Người dùng bật/tắt lớp và chọn đối tượng để đối chiếu.
3. Ứng dụng hiển thị loại, vị trí, nguồn dữ liệu và các vấn đề liên quan.
4. Người dùng xác nhận phần đúng, hoặc chuyển UC02/UC08 để sửa phần sai rồi quay lại.
5. Ứng dụng ghi phạm vi xác nhận; chỉ bỏ trạng thái cần xác nhận của phần đã được xử lý.
6. Người dùng yêu cầu UC09 để đánh giá điều kiện dựng.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 4, nhận diện nhầm loại:** Người dùng sửa loại theo tập được hỗ trợ; đổi loại làm phát sinh trường bắt buộc thì chuyển UC08.
- **A2 — Bước 4, thiếu đối tượng:** Dùng UC02 để thêm tường/lỗ mở; phòng được suy ra lại từ cấu trúc tường theo quy ước MVP đề xuất.
- **E1 — Bước 5, đối tượng đã thay đổi sau lần xem:** Yêu cầu đối chiếu lại; không áp dụng xác nhận cũ cho dữ liệu mới.
- **E2 — Bước 1, không tải được ảnh nguồn:** Báo lỗi đối chiếu, không cho xác nhận dựa trên ảnh chưa hiển thị; vẫn cho xem dữ liệu đã lưu.

### Nghiệm thu

- **AC-UC07-01:** Chọn một đối tượng phải xác định được vị trí tương ứng trên ảnh và nguồn thông số.
- **AC-UC07-02:** Xác nhận đối tượng A không tự xác nhận B hoặc thuộc tính chưa kiểm tra.
- **AC-UC07-03:** Xác nhận bằng mắt không bỏ qua lỗi cửa nằm ngoài tường chủ.
