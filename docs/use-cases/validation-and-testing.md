---
title: Điểm cần chốt và kiểm thử
description: Các quyết định còn mở và kịch bản kiểm thử xuyên suốt.
sidebar_position: 16
---

# Điểm cần chốt và kiểm thử

## 19. Điểm cần chốt trước khi nghiệm thu chính thức

Các chính sách dưới đây là đề xuất trong đặc tả, cần được rà soát; chưa phải quyết định đã được người dùng dự án phê duyệt.

| Mã | Nội dung cần chốt | Đề xuất hoặc tác động |
| --- | --- | --- |
| D01 | Dung lượng, độ phân giải và chất lượng ảnh | Chốt bằng tập bản vẽ mục tiêu và phần cứng; UC04 phải hiển thị giới hạn thật |
| D02 | Dung sai hình học và kích thước | Quy định cách so khớp, đơn vị, ngưỡng nối điểm và chấp nhận sai số trước khi đo |
| D03 | Xóa tường có cửa | Xác nhận xóa đồng thời và hoàn tác nguyên vẹn như UC02 |
| D04 | Lỗ mở khi tường đổi | Giữ offset từ đầu mút tham chiếu, chặn nếu vượt biên; cần thử nghiệm trải nghiệm sử dụng |
| D05 | Đổi tỷ lệ | Chỉ đổi dữ liệu phụ thuộc ảnh; giữ giá trị nhập theo đơn vị thực và báo xung đột |
| D06 | Thay bản vẽ | MVP tạo dự án mới sau khi lưu bản cũ, tránh kế thừa sai tham chiếu |
| D07 | Chỉnh sửa phòng và sàn | MVP đề xuất suy ra hình học từ tường/biên; sửa nhãn riêng. Nếu cần vẽ polygon độc lập phải bổ sung use case |
| D08 | Phạm vi lưu trữ và tài khoản | Lưu cục bộ hay server; có đa tài khoản hay không; không mặc định có chia sẻ/realtime |
| D09 | Lịch sử hoàn tác | Bảo đảm trong phiên; chưa bắt buộc redo hoặc lịch sử lâu dài |
| D10 | Định dạng xuất đầu tiên | Chọn một định dạng và công cụ đích, quy định thuộc tính được giữ rồi mới nghiệm thu UC13 |
| D11 | Hiệu năng | Đặt thời gian phản hồi và thời gian tác vụ theo bộ dữ liệu/phần cứng; không đặt số liệu giả định thành cam kết |

## 20. Kịch bản kiểm thử xuyên suốt đề xuất

1. **Luồng thành công:** Bản vẽ rõ → tỷ lệ xác nhận → nhận diện → sửa một cửa → bổ sung chiều cao → kiểm tra → dựng → lưu/mở lại.
2. **Thiếu căn cứ:** Bản vẽ không có số đo → nhận diện nháp → chưa cho công nhận đúng kích thước → nhập tham chiếu → tiếp tục.
3. **Lỗi phụ thuộc:** Rút ngắn tường khiến cửa vượt biên → từ chối → sửa cửa/tường → áp dụng → hoàn tác và kiểm tra cả hai đối tượng.
4. **Tác vụ đến muộn:** Chạy nhận diện → sửa dữ liệu → kết quả cũ về → không ghi đè → người dùng chọn chạy lại.
5. **Khôi phục sau lỗi:** Dự án đã lưu → sửa tiếp → lưu thất bại → bản lưu trước còn nguyên, trạng thái mới vẫn chưa lưu và có thể thử lại.
6. **Mô hình cũ:** Đã có 3D → đổi tỷ lệ hoặc chiều cao → 3D đánh dấu cần cập nhật → dựng lại đúng revision.

Mỗi kịch bản cần lưu bản vẽ đầu vào, dữ liệu kỳ vọng, cấu hình, dung sai và kết quả thực tế. Chỉ báo đạt sau khi quan sát đủ hậu điều kiện; tài liệu này chưa ghi nhận kết quả chạy kiểm thử ứng dụng.
