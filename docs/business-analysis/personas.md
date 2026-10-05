---
title: Persona người dùng
description: Các nhóm người dùng giả định, nhu cầu và thứ tự ưu tiên phục vụ.
sidebar_position: 3
---

# Persona người dùng

## 2. Persona

### 2.1. Persona A — Chủ nhà đã có bản vẽ

**Tên minh họa:** Anh Minh  
**Vai trò:** Người cần xem và trao đổi phương án nhà ở  
**Mức ưu tiên đề xuất:** Người dùng chính của trải nghiệm đơn giản

| Thuộc tính | Mô tả giả định |
| --- | --- |
| Bối cảnh | Có ảnh mặt bằng do đơn vị thiết kế cung cấp; chưa có mô hình 3D để xem |
| Năng lực | Sử dụng web và thao tác kéo thả cơ bản; chưa quen CAD/BIM |
| Mục tiêu | Hiểu bố cục, quan sát không gian và ghi nhận điểm cần trao đổi với người thiết kế |
| Khó khăn | Không đọc thành thạo ký hiệu; không biết tự dựng mô hình hoặc kiểm tra lỗi kỹ thuật |
| Kỳ vọng | Tải bản vẽ, nhập vài thông số có hướng dẫn, xem mô hình và sửa các lỗi đơn giản |
| Điều khiến mất niềm tin | Phòng, cửa hoặc kích thước khác bản vẽ mà hệ thống không chỉ ra |
| Thành công | Có mô hình bám theo bản vẽ, biết thông tin nào còn thiếu và có thể dùng để trao đổi |

**Tình huống:** Anh Minh tải mặt bằng nhà một tầng, chọn đoạn có chiều dài đã biết để xác định tỷ lệ, bổ sung chiều cao tầng và xem các vùng hệ thống yêu cầu xác nhận. Một cửa bị nhận diện thiếu được thêm lại trước khi dựng mô hình.

**Job to be done:** Khi đã có bản vẽ mặt bằng, tôi muốn chuyển nó thành mô hình 3D dễ hiểu để trao đổi về không gian mà không phải học một quy trình dựng hình chuyên sâu.

**Hàm ý thiết kế:** Dùng tên đối tượng quen thuộc; hướng dẫn từng bước; hiển thị bản vẽ làm nền đối chiếu; không buộc người dùng hiểu thuật ngữ về mô hình AI.

### 2.2. Persona B — Người hỗ trợ thiết kế và dựng mô hình

**Tên minh họa:** Chị Linh  
**Vai trò:** Kiến trúc sư, trợ lý thiết kế hoặc kỹ thuật viên dựng mô hình sơ bộ  
**Mức ưu tiên đề xuất:** Người dùng chính của chức năng kiểm tra và hiệu chỉnh

| Thuộc tính | Mô tả giả định |
| --- | --- |
| Bối cảnh | Nhận mặt bằng dạng ảnh và cần dựng mô hình để thảo luận phương án |
| Năng lực | Đọc được bản vẽ, hiểu kích thước và biết sửa mô hình |
| Mục tiêu | Có cấu trúc ban đầu đúng để giảm phần dựng lặp lại |
| Khó khăn | Phải vẽ lại tường, cửa và kiểm tra sự liên kết giữa các thành phần |
| Kỳ vọng | Sửa chính xác tọa độ, bề dày, chiều cao và quan hệ cửa–tường |
| Điều khiến mất niềm tin | Tường trùng, lỗ mở sai, số đo bị thay đổi âm thầm, không giữ được chỉnh sửa |
| Thành công | Tổng thời gian dựng và sửa thấp hơn quy trình hiện tại; có thể mở lại để tiếp tục làm việc |

**Tình huống:** Chị Linh kiểm tra lớp nhận diện trên ảnh, sửa giao tường chữ T, gắn lại một cửa vào đúng tường và nhập chiều cao cửa. Hệ thống cập nhật mô hình, giữ nguyên các đối tượng không bị ảnh hưởng.

**Job to be done:** Khi nhận mặt bằng dạng ảnh, tôi muốn hệ thống chuẩn bị các đối tượng kiến trúc có thể kiểm tra và hiệu chỉnh để tập trung vào phần cần chuyên môn.

**Hàm ý thiết kế:** Có bảng thuộc tính, số đo trực tiếp, thông báo lỗi theo đối tượng, hoàn tác và lưu/mở lại dữ liệu có cấu trúc.

### 2.3. Persona C — Sinh viên kiến trúc hoặc xây dựng

**Tên minh họa:** Bạn An  
**Vai trò:** Người học cần trực quan hóa và đối chiếu bản vẽ  
**Mức ưu tiên đề xuất:** Nhóm mở rộng; không quyết định phạm vi MVP

| Thuộc tính | Mô tả giả định |
| --- | --- |
| Bối cảnh | Cần mô hình sơ bộ để học quan hệ giữa mặt bằng và không gian |
| Mục tiêu | Quan sát tác động của việc đổi kích thước, tường hoặc cửa |
| Khó khăn | Khó đối chiếu các biểu diễn, dễ bỏ sót quan hệ giữa đối tượng |
| Kỳ vọng | 2D và 3D đồng bộ; lỗi được giải thích đủ rõ để sửa |
| Thành công | Hiểu được mô hình được hình thành từ những thông số nào |

### 2.4. Ưu tiên phục vụ

MVP đề xuất phục vụ hai luồng trên cùng hệ thống: chủ nhà thực hiện tác vụ có hướng dẫn, người có chuyên môn sử dụng công cụ hiệu chỉnh. Không cần xây hai ứng dụng hoặc bắt buộc hai loại tài khoản. Persona mô tả nhu cầu; quyền truy cập được xác định theo dự án.

Nếu khảo sát cho thấy người không chuyên không thể xác nhận lỗi đáng tin cậy, cần ưu tiên người hỗ trợ dựng mô hình trong bản thử nghiệm đầu, thay vì tuyên bố sản phẩm đã phù hợp với mọi chủ nhà.
