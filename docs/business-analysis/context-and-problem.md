---
title: Bối cảnh và vấn đề
description: Bối cảnh sử dụng, phát biểu vấn đề, hệ quả và mục tiêu nghiệp vụ.
sidebar_position: 2
---

# Bối cảnh và vấn đề

## 1. Bối cảnh và vấn đề

### 1.1. Bối cảnh sử dụng

Người dùng đã có bản vẽ mặt bằng và muốn quan sát ngôi nhà dưới dạng 3D để hiểu cách phân chia không gian, kiểm tra bố trí hoặc trao đổi phương án. Bản vẽ đầu vào có thể là ảnh được xuất từ phần mềm thiết kế hoặc ảnh quét đủ rõ; người dùng không nhất thiết có file thiết kế gốc.

Để có mô hình chỉnh sửa được, cần xác định tường, phòng, cửa, cửa sổ, kích thước và quan hệ giữa các đối tượng. Một số thông tin theo chiều đứng không xuất hiện trên mặt bằng và phải được bổ sung.

### 1.2. Phát biểu vấn đề

**Người có bản vẽ mặt bằng 2D cần một cách chuyển bản vẽ thành mô hình 3D dễ kiểm tra và chỉnh sửa, nhưng quá trình xác định đối tượng, thiết lập kích thước và dựng hình thủ công đòi hỏi kỹ năng và công sức. Khi nhận diện tự động còn sai hoặc dữ liệu thiếu, người dùng cần biết chỗ nào phải xác nhận và có thể sửa trực tiếp để hoàn thiện mô hình.**

Mức độ tốn thời gian của quy trình hiện tại là giả thuyết cần đo trên tác vụ thực tế. Không giả định rằng mọi nhóm người dùng đều có cùng khó khăn hoặc sẵn sàng dùng sản phẩm.

### 1.3. Phân tích vấn đề và hệ quả

| Mã | Vấn đề | Nguyên nhân cần xử lý | Hệ quả đối với người dùng |
| --- | --- | --- | --- |
| P01 | Khó hình dung không gian từ mặt bằng | Người xem phải tự diễn giải ký hiệu và quan hệ không gian | Khó trao đổi về bố trí và kích thước |
| P02 | Phải dựng lại nhiều thành phần | Ảnh bản vẽ chưa chứa đối tượng có thể chỉnh sửa trực tiếp | Mất công vẽ lại tường, sàn và lỗ mở |
| P03 | Không xác định được kích thước đáng tin cậy | Thiếu tỷ lệ, số đo khó đọc hoặc ảnh bị biến dạng | Mô hình có thể đúng hình dáng nhưng sai kích thước |
| P04 | Kết quả tự động khó sửa | Các thành phần chưa được tách thành đối tượng có quan hệ | Phải xử lý lại hoặc dựng lại phần lớn mô hình |
| P05 | Không biết thông số nào có căn cứ | Dữ liệu nhận diện, mặc định và người dùng nhập bị trộn lẫn | Dễ hiểu nhầm thông tin suy đoán là thông tin trên bản vẽ |
| P06 | Sửa một chỗ làm phát sinh lỗi khác | Tường, cửa và phòng phụ thuộc nhau | Tăng công kiểm tra, giảm niềm tin vào kết quả |

### 1.4. Mục tiêu nghiệp vụ

- Giảm tổng thời gian từ bản vẽ đến mô hình đạt tiêu chí, bao gồm cả thời gian sửa lỗi.
- Giúp người dùng kiểm tra sự tương ứng giữa bản vẽ và mô hình.
- Cho phép sửa từng đối tượng mà không phải bắt đầu lại toàn bộ tác vụ.
- Bảo toàn kích thước và quan hệ đã xác nhận trong các lần dựng lại.
- Phân biệt rõ dữ liệu quan sát được, dữ liệu người dùng cung cấp và dữ liệu mặc định.
