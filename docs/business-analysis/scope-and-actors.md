---
title: Phạm vi và tác nhân
description: Phạm vi MVP, đầu vào, đầu ra và trách nhiệm của các tác nhân.
sidebar_position: 4
---

# Phạm vi và tác nhân

## 3. Phạm vi nghiệp vụ

### 3.1. Đầu vào được hỗ trợ trong MVP đề xuất

- Một mặt bằng của một tầng, ở dạng PNG hoặc JPEG đủ rõ.
- Tường thẳng, chủ yếu vuông góc; quy ước ký hiệu cửa nằm trong tập đã thử nghiệm.
- Có ít nhất một chiều dài tham chiếu được người dùng xác nhận.
- Người dùng bổ sung các thông số theo chiều đứng còn thiếu.

Ảnh chụp bị méo phối cảnh cần được chỉnh hoặc yêu cầu thay ảnh. Một chiều dài tham chiếu không đủ để khắc phục mọi dạng biến dạng. PDF, bản vẽ CAD và nhiều trang có thể bổ sung sau; không cam kết hỗ trợ trong MVP này.

### 3.2. Đầu ra

| Đầu ra | Giá trị sử dụng |
| --- | --- |
| Mặt bằng có cấu trúc | Kiểm tra và sửa tường, phòng, cửa, cửa sổ |
| Mô hình 3D theo tham số | Quan sát sàn, tường, lỗ mở và kích thước đã xác nhận |
| Dự án được lưu | Mở lại bản vẽ gốc, đối tượng và thông số để tiếp tục làm việc |
| Danh sách vấn đề | Biết đối tượng nào sai, thiếu dữ liệu hoặc cần xác nhận |

Xuất IFC/DXF/GLB là phạm vi mở rộng cần chốt riêng. Với mỗi định dạng phải xác định rõ dữ liệu nào được giữ lại; không coi một file hình học hiển thị là tương đương với dữ liệu chỉnh sửa của dự án.

### 3.3. Ngoài phạm vi

Sinh bố cục từ prompt; phác thảo tay tùy ý; nhiều tầng và cầu thang; mái phức tạp; tính toán kết cấu chịu lực; thiết kế điện nước; thẩm định quy chuẩn xây dựng; hồ sơ thi công hoàn chỉnh.

## 4. Tác nhân và trách nhiệm

| Tác nhân | Trách nhiệm | Giới hạn |
| --- | --- | --- |
| Người sử dụng dự án | Cung cấp bản vẽ, xác nhận tỷ lệ và thông số, sửa đối tượng, lưu kết quả | Cần biết thông tin nào chưa được kiểm chứng |
| Hệ thống | Nhận diện, kiểm tra hình học, dựng mô hình, lưu và báo lỗi | Không tự coi dữ liệu thiếu là đã xác nhận |
| Người hỗ trợ có chuyên môn | Giải thích bản vẽ và hỗ trợ xử lý trường hợp khó | Là vai trò trong quy trình thực tế; chia sẻ trực tuyến chưa bắt buộc ở MVP |

Đăng nhập và phân quyền nhiều người chỉ bổ sung nếu ứng dụng lưu dự án cho nhiều tài khoản. Khi đó, dự án mặc định chỉ người được cấp quyền mới được xem và sửa.
