---
title: UC10 — Dựng và xem mô hình 3D
description: Dựng, cập nhật và quan sát mô hình 3D theo tham số.
sidebar_position: 11
---

# UC10 — Dựng và xem mô hình 3D

## 13. UC10 — Dựng, cập nhật và xem mô hình 3D

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Quan sát hình học 3D tương ứng dữ liệu kiến trúc hiện tại |
| Tác nhân | ACT01 |
| Kích hoạt | Chọn dựng/cập nhật 3D hoặc mở chế độ xem 3D |
| Tiền điều kiện | Dựng mới: revision hiện tại đã qua UC09, không còn lỗi chặn; chỉ xem: có mô hình đã dựng |
| Hậu điều kiện thành công | Có hình học gắn với revision nguồn, giữ định danh để chọn đối tượng; mô hình hiện hành chỉ khi revision còn khớp |
| Bảo đảm tối thiểu | Dựng lỗi không thay mô hình trước bằng mô hình khuyết được gắn nhãn thành công |
| Quy tắc | BR01–BR07, BR10, BR12 |

### Luồng chính

1. Người dùng chọn dựng hoặc cập nhật.
2. Ứng dụng kiểm tra điều kiện, ghi revision và thông số nguồn.
3. Ứng dụng tạo sàn, tường, lỗ mở theo dữ liệu; theo dõi trạng thái tác vụ.
4. Ứng dụng kiểm tra việc dựng đã hoàn tất và revision nguồn còn hiện hành.
5. Ứng dụng hiển thị mô hình và trạng thái đã dựng.
6. Người dùng xoay, di chuyển góc nhìn, phóng to/thu nhỏ và chọn đối tượng để đối chiếu với 2D.

### Luồng thay thế và ngoại lệ

- **A1 — Kích hoạt chỉ xem:** Nếu có mô hình, vào bước 6. Nếu mô hình cũ, hiển thị rõ cần cập nhật; không gắn nhãn là dữ liệu hiện tại.
- **A2 — Sau bước 6, người dùng sửa:** Thực hiện UC02/UC08, kiểm tra lại và cập nhật phần chịu ảnh hưởng hoặc dựng lại toàn bộ; lựa chọn kỹ thuật không được đổi kết quả nghiệp vụ.
- **E1 — Bước 2, chưa đủ điều kiện:** Liệt kê lỗi/thiếu thông số và chuyển UC09/UC08; chưa chạy dựng chính thức.
- **E2 — Bước 3–4, dựng lỗi hoặc thiếu đối tượng:** Nêu lỗi và đối tượng liên quan nếu có; giữ mô hình trước với nhãn cũ, cho thử lại.
- **E3 — Bước 4, dữ liệu đã đổi:** Không thay mô hình hiện hành bằng kết quả cũ; yêu cầu cập nhật theo revision mới.
- **E4 — Bước 5–6, trình duyệt không hiển thị được 3D:** Báo lỗi hiển thị, vẫn giữ dữ liệu dự án và khả năng sửa 2D.

### Nghiệm thu

- **AC-UC10-01:** Tường, sàn và lỗ mở được dựng từ đúng kích thước đã xác nhận trong dung sai của bộ dựng hình.
- **AC-UC10-02:** Sau thay đổi dữ liệu, mô hình cũ luôn có dấu cần cập nhật cho đến khi dựng mới thành công.
- **AC-UC10-03:** Xoay camera không thay đổi tọa độ hoặc kích thước đối tượng trong House Graph.
