---
title: Yêu cầu chức năng và use case
description: Danh sách yêu cầu chức năng và các use case cốt lõi.
sidebar_position: 6
---

# Yêu cầu chức năng và use case

## 6. Yêu cầu chức năng và use case

### 6.1. Danh sách yêu cầu

| Mã | Chức năng | Mức ưu tiên | Vấn đề liên quan |
| --- | --- | --- | --- |
| FR01 | Tạo, lưu và mở dự án | Bắt buộc | P02, P04 |
| FR02 | Tải và kiểm tra bản vẽ đầu vào | Bắt buộc | P02, P03 |
| FR03 | Thiết lập, xác nhận tỷ lệ và đơn vị | Bắt buộc | P03 |
| FR04 | Đề xuất đối tượng kiến trúc từ ảnh | Bắt buộc | P02 |
| FR05 | Hiển thị lớp nhận diện trên ảnh để đối chiếu | Bắt buộc | P01, P05 |
| FR06 | Thêm, sửa, xóa tường và lỗ mở trong phạm vi hỗ trợ | Bắt buộc | P04, P06 |
| FR07 | Nhập và theo dõi nguồn gốc thông số | Bắt buộc | P03, P05 |
| FR08 | Kiểm tra lỗi hình học và quan hệ đối tượng | Bắt buộc | P06 |
| FR09 | Dựng, xoay và xem mô hình 3D | Bắt buộc | P01 |
| FR10 | Cập nhật 2D và 3D từ cùng dữ liệu; hoàn tác thao tác | Bắt buộc | P04, P06 |
| FR11 | Gợi ý số đo và nhãn bằng OCR | Nên có | P02, P03 |
| FR12 | Xuất định dạng trao đổi đã chọn | Mở rộng | P04 |

### 6.2. UC01 — Tạo mô hình sơ bộ từ mặt bằng

**Mục đích:** Có mô hình 3D bám theo bản vẽ và các thông số đã xác nhận.  
**Tác nhân:** Người sử dụng dự án.  
**Tiền điều kiện:** Có bản vẽ thuộc phạm vi hỗ trợ và quyền sử dụng dự án.

1. Người dùng tạo dự án và tải bản vẽ.
2. Hệ thống kiểm tra đầu vào; người dùng chọn vùng mặt bằng nếu cần.
3. Người dùng thiết lập tỷ lệ bằng chiều dài tham chiếu.
4. Hệ thống nhận diện và hiển thị các đối tượng trên ảnh.
5. Người dùng kiểm tra, chỉnh sửa đối tượng và bổ sung thông số.
6. Hệ thống kiểm tra dữ liệu; chỉ rõ lỗi cần xử lý nếu có.
7. Người dùng yêu cầu dựng 3D khi đủ điều kiện.
8. Hệ thống dựng mô hình và cho lưu dự án.

**Hậu điều kiện:** Dữ liệu 2D, thông số và mô hình 3D cùng phản ánh một trạng thái đã lưu. Những vấn đề chưa giải quyết vẫn được ghi nhận; kết quả nháp không bị gắn nhãn đã xác nhận.

### 6.3. UC02 — Chỉnh sửa tường hoặc lỗ mở

**Mục đích:** Sửa một đối tượng mà vẫn giữ dữ liệu liên quan nhất quán.  
**Tiền điều kiện:** Dự án đã có cấu trúc 2D.

1. Người dùng chọn đối tượng và sửa vị trí hoặc thông số.
2. Hệ thống xác định các phòng, tường hoặc cửa chịu ảnh hưởng.
3. Hệ thống kiểm tra thay đổi và thông báo xung đột nếu có.
4. Với thay đổi hợp lệ, hệ thống cập nhật dữ liệu và hình học hiển thị.
5. Người dùng có thể hoàn tác để khôi phục trạng thái trước thao tác.

**Ngoại lệ:** Khi xóa tường chứa cửa, hệ thống phải thông báo tác động và yêu cầu xử lý các cửa phụ thuộc trước khi hoàn tất thao tác. Quy tắc tự dịch chuyển cửa khi tường thay đổi cần được chốt riêng.
