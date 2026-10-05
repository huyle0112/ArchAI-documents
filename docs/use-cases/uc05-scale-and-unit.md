---
title: UC05 — Thiết lập tỷ lệ và đơn vị
description: Xác nhận tỷ lệ thực và đơn vị đo của bản vẽ.
sidebar_position: 6
---

# UC05 — Thiết lập tỷ lệ và đơn vị

## 8. UC05 — Thiết lập tỷ lệ và đơn vị

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Quy đổi tọa độ ảnh sang kích thước thực có căn cứ |
| Tác nhân | ACT01 |
| Kích hoạt | Chọn thiết lập hoặc thay đổi tỷ lệ |
| Tiền điều kiện | Có ảnh làm việc hợp lệ, không thay đổi trong lúc xác nhận |
| Dữ liệu vào | Hai điểm khác nhau, chiều dài thực dương, đơn vị mm/cm/m |
| Hậu điều kiện thành công | Tỷ lệ và tham chiếu được xác nhận; dữ liệu chịu ảnh hưởng được kiểm tra lại |
| Bảo đảm tối thiểu | Nhập sai hoặc hủy không thay tỷ lệ trước đó |
| Quy tắc | BR01–BR04, BR10 |

### Luồng chính

1. Người dùng chọn hai điểm trên đoạn có chiều dài đã biết.
2. Ứng dụng hiển thị đoạn tham chiếu và yêu cầu chiều dài, đơn vị.
3. Người dùng nhập giá trị rồi xem trước kích thước quy đổi.
4. Ứng dụng kiểm tra hai điểm khác nhau và giá trị dương, hữu hạn; quy đổi đơn vị nội bộ thống nhất.
5. Người dùng xác nhận.
6. Ứng dụng ghi tham chiếu và trạng thái xác nhận; cập nhật kích thước lấy từ ảnh.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 2, có gợi ý OCR:** Cho chọn gợi ý từ UC12 nhưng vẫn yêu cầu gắn đúng đoạn và xác nhận đơn vị.
- **A2 — Bước 5, đổi tỷ lệ sau khi đã sửa dữ liệu:** Hiển thị thông số nào phụ thuộc ảnh sẽ đổi. Chính sách đề xuất: thông số do người dùng nhập theo đơn vị thực không tự nhân theo tỷ lệ; nếu xung đột, chuyển cần xác nhận. Mô hình cũ chuyển cần cập nhật.
- **E1 — Bước 4, hai điểm trùng hoặc chiều dài không hợp lệ:** Không áp dụng; quay lại bước 1 hoặc 3 tương ứng.
- **E2 — Bước 3, nhiều số đo tham chiếu mâu thuẫn:** Yêu cầu kiểm tra đoạn, đơn vị hoặc ảnh biến dạng; không tự lấy trung bình để xác nhận.

### Nghiệm thu

- **AC-UC05-01:** Cùng đoạn tham chiếu, nhập 4000 mm và 4 m cho cùng tỷ lệ nội bộ.
- **AC-UC05-02:** Hai điểm trùng hoặc chiều dài bằng 0 không tạo tỷ lệ.
- **AC-UC05-03:** Đổi tỷ lệ không âm thầm thay chiều cao tầng do người dùng đã nhập.
