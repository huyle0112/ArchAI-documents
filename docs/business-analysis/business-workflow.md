---
title: Quy trình nghiệp vụ
description: Quy trình hiện tại, quy trình đề xuất và các luồng ngoại lệ.
sidebar_position: 5
---

# Quy trình nghiệp vụ

## 5. Quy trình nghiệp vụ

### 5.1. Quy trình hiện tại cần khảo sát

Người dùng nhận bản vẽ, diễn giải đối tượng và số đo, dựng hình thủ công bằng công cụ sẵn có, kiểm tra lại với bản vẽ và sửa sai. Cần quan sát ít nhất một tác vụ thực tế để xác định thời gian, công cụ và điểm nghẽn; không xem mô tả này là kết quả khảo sát.

### 5.2. Quy trình đề xuất

| Bước | Người dùng | Hệ thống | Điều kiện chuyển bước |
| --- | --- | --- | --- |
| 1. Tạo dự án | Nhập tên, tải bản vẽ | Kiểm tra định dạng, khả năng đọc và phạm vi | Có mặt bằng phù hợp để xử lý |
| 2. Xác định tỷ lệ | Chọn hai điểm, nhập chiều dài thực và đơn vị | Ghi tỷ lệ, phát hiện giá trị không hợp lệ | Tỷ lệ được xác nhận |
| 3. Nhận diện | Bắt đầu xử lý | Đề xuất tường, phòng, cửa và cửa sổ | Có dữ liệu nhận diện hoặc lỗi cụ thể |
| 4. Kiểm tra mặt bằng | Đối chiếu lớp nhận diện với ảnh; sửa và xác nhận | Nêu lỗi hình học, đối tượng chưa chắc chắn | Lỗi bắt buộc được giải quyết |
| 5. Bổ sung thông số | Nhập chiều cao, bề dày và cao độ còn thiếu | Kiểm tra tính đầy đủ và hợp lệ | Đủ thông số cho các đối tượng cần dựng |
| 6. Dựng và xem 3D | Quan sát, đối chiếu | Dựng mô hình từ dữ liệu hiện tại | Mô hình dựng thành công |
| 7. Hiệu chỉnh | Sửa thông số hoặc vị trí | Kiểm tra tác động, cập nhật các đối tượng liên quan | Không còn lỗi bắt buộc chưa xử lý |
| 8. Lưu | Lưu kết quả | Lưu dữ liệu và phiên bản trạng thái tương ứng | Có thể mở lại và tiếp tục chỉnh sửa |

Có thể nhận diện sơ bộ trước khi xác nhận tỷ lệ, nhưng kết quả chỉ ở trạng thái nháp và chưa được công nhận là mô hình đúng kích thước.

### 5.3. Ngoại lệ

| Tình huống | Cách xử lý nghiệp vụ |
| --- | --- |
| Ảnh mờ, cắt mất phần nhà | Yêu cầu thay hoặc chỉnh ảnh; giữ dự án để tiếp tục |
| Không biết chiều dài thực | Cho xem kết quả nhận diện nháp; chưa xác nhận kích thước mô hình |
| OCR đọc được số nhưng không rõ thuộc đoạn nào | Hiển thị như gợi ý; yêu cầu người dùng gán và xác nhận |
| Không xác định được cửa hay khoảng hở | Đánh dấu vùng cần kiểm tra; không tự bịt kín |
| Kích thước mâu thuẫn | Hiển thị các giá trị và vị trí liên quan để người dùng lựa chọn, ghi nhận thay đổi |
| Sửa tường khiến cửa vượt ra ngoài | Từ chối thao tác hoặc giữ dạng nháp cần sửa; không âm thầm bỏ cửa |
| Nhận diện thất bại hoặc bị gián đoạn | Báo nguyên nhân có thể hành động, cho thử lại và giữ dữ liệu đã lưu |
