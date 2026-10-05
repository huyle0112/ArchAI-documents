---
title: Nghiệm thu và đo hiệu quả
description: Tình huống nghiệm thu, chỉ số đánh giá và yêu cầu chất lượng.
sidebar_position: 9
---

# Nghiệm thu và đo hiệu quả

## 9. Tiêu chí nghiệm thu và đo hiệu quả

### 9.1. Tình huống nghiệm thu cốt lõi

| Mã | Tình huống | Kết quả mong đợi |
| --- | --- | --- |
| AC01 | Tải file không thuộc định dạng hỗ trợ | Nhận thông báo cụ thể; dự án vẫn tiếp tục được khi thay file |
| AC02 | Chưa xác nhận chiều dài tham chiếu | Không gắn nhãn mô hình đã xác nhận kích thước |
| AC03 | Thiếu chiều cao tầng | Hệ thống yêu cầu nhập hoặc xác nhận giá trị đề xuất |
| AC04 | Cửa vượt khỏi tường chủ | Lỗi được chỉ rõ tại cửa; không âm thầm sửa số đo |
| AC05 | Di chuyển tường và hoàn tác | Các đối tượng phụ thuộc trở lại trạng thái nhất quán trước đó |
| AC06 | Lưu rồi mở lại | Giữ nguyên đối tượng, thông số, tỷ lệ và trạng thái xác nhận |
| AC07 | Chạy nhận diện lại sau khi sửa | Phần đã xác nhận không bị ghi đè khi chưa có lựa chọn của người dùng |

### 9.2. Chỉ số đánh giá

- **Thời gian hoàn thành tác vụ:** từ bản vẽ đầu vào đến mô hình đạt bộ tiêu chí; tính cả thời gian chỉnh sửa và xác nhận.
- **Công sửa thủ công:** số thao tác và thời gian sửa lỗi nhận diện hoặc quan hệ.
- **Chất lượng cấu trúc:** số tường, cửa và quan hệ bị sai; sai số kích thước theo dung sai công bố.
- **Tỷ lệ hoàn thành:** số tác vụ đạt yêu cầu trong phạm vi đầu vào hỗ trợ, có ghi cả trường hợp thất bại.
- **Khả năng tự sử dụng:** tỷ lệ người dùng hoàn thành mà không cần hỗ trợ ngoài hướng dẫn của ứng dụng.

So sánh với quy trình người tham gia đang dùng trên tác vụ tương đương. Khi thiết kế thử nghiệm, cần hạn chế ảnh hưởng của việc đã quen bản vẽ ở lần làm trước. Tách nhóm có và không có chuyên môn khi phân tích kết quả.

Chưa đặt cam kết phần trăm giảm thời gian hoặc độ chính xác khi chưa có dữ liệu thử nghiệm. Ngưỡng nghiệm thu định lượng phải được thống nhất trước lần đánh giá chính thức.

### 9.3. Yêu cầu chất lượng

Giao diện cần phân biệt đang xử lý, nháp, lỗi và đã xác nhận. Thông báo phải chỉ ra cách sửa. Tác vụ dài cần có phản hồi trạng thái và khả năng thử lại. Lưu/mở lại phải bảo toàn dữ liệu; khi nhiều tài khoản được hỗ trợ, cần kiểm soát quyền truy cập dự án.

Ngưỡng thời gian phản hồi, dung lượng ảnh và thời gian dựng hình sẽ được chốt theo phần cứng và tập bản vẽ mục tiêu. Không dùng thời gian suy luận AI đơn lẻ để đại diện cho hiệu quả toàn bộ ứng dụng.
