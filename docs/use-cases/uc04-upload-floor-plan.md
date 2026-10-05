---
title: UC04 — Tải và kiểm tra bản vẽ
description: Tải lên và kiểm tra điều kiện đầu vào của bản vẽ.
sidebar_position: 5
---

# UC04 — Tải và kiểm tra bản vẽ

## 7. UC04 — Tải và kiểm tra bản vẽ

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Đưa mặt bằng phù hợp vào dự án và xác định ảnh sẽ dùng để nhận diện |
| Tác nhân | ACT01 |
| Kích hoạt | Chọn tải bản vẽ |
| Tiền điều kiện | Dự án đang mở và có quyền sửa |
| Dữ liệu vào | PNG/JPEG; vùng mặt bằng và góc xoay nếu người dùng điều chỉnh |
| Hậu điều kiện thành công | Giữ ảnh gốc, ảnh làm việc và phép biến đổi tương ứng; ảnh sẵn sàng nhận diện |
| Bảo đảm tối thiểu | File không hợp lệ không thay ảnh đang sử dụng |

### Luồng chính

1. Người dùng chọn file ảnh.
2. Ứng dụng kiểm tra nội dung có giải mã được, định dạng, dung lượng và độ phân giải theo giới hạn cấu hình.
3. Ứng dụng hiển thị bản xem trước; người dùng xác định một mặt bằng một tầng, cắt vùng hoặc xoay nếu cần.
4. Ứng dụng nêu các dấu hiệu cần xem lại chất lượng nếu phát hiện được; người dùng xác nhận ảnh đúng phạm vi.
5. Ứng dụng tiếp nhận ảnh và đặt trạng thái nháp, chưa xác nhận tỷ lệ.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 1, thay ảnh đã có dữ liệu:** Nêu rõ tỷ lệ, nhận diện và mô hình cũ không còn áp dụng cho ảnh mới. Chính sách MVP đề xuất: yêu cầu lưu bản cũ rồi tạo dự án mới để dùng ảnh thay thế; không trộn hai bản vẽ.
- **E1 — Bước 2, sai định dạng, file hỏng hoặc vượt giới hạn:** Nêu lý do và giới hạn liên quan, quay lại bước 1.
- **E2 — Bước 3–4, ảnh thiếu vùng hoặc méo phối cảnh:** Yêu cầu thay ảnh hay chỉnh bằng công cụ phù hợp rồi tải lại. Không cam kết tự phát hiện mọi loại méo hoặc tự sửa chúng.
- **E3 — Bước 5, tải lên thất bại:** Không ghi nhận ảnh đã sẵn sàng, cho thử lại.

### Nghiệm thu

- **AC-UC04-01:** File đổi đuôi thành PNG nhưng không phải ảnh hợp lệ bị từ chối.
- **AC-UC04-02:** Ảnh làm việc và các phép cắt/xoay được giữ khi lưu/mở lại.
- **AC-UC04-03:** Thay ảnh không âm thầm gán lại cấu trúc của ảnh cũ lên ảnh mới.
