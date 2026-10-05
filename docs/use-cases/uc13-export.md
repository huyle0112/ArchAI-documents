---
title: UC13 — Xuất định dạng trao đổi
description: Xuất dữ liệu sang định dạng trao đổi được hỗ trợ.
sidebar_position: 14
---

# UC13 — Xuất định dạng trao đổi

## 16. UC13 — Xuất định dạng trao đổi

| Thuộc tính | Đặc tả |
| --- | --- |
| Mục tiêu | Dùng kết quả trong công cụ khác theo khả năng của định dạng đã triển khai |
| Tác nhân | ACT01 |
| Ưu tiên | Mở rộng, chưa là điều kiện hoàn thành MVP |
| Kích hoạt | Chọn xuất dữ liệu |
| Tiền điều kiện | Có dữ liệu đạt quy tắc xuất; định dạng được hỗ trợ; có quyền truy cập |
| Hậu điều kiện thành công | Có file gắn với revision nguồn và mô tả dữ liệu được giữ lại |
| Bảo đảm tối thiểu | Xuất lỗi không làm mất/chỉnh sửa dự án gốc hoặc trả file rỗng như kết quả thành công |
| Quy tắc | BR01, BR02, BR10, BR12 |

### Luồng chính

1. Người dùng chọn định dạng đang được hỗ trợ.
2. Ứng dụng mô tả nội dung xuất, đơn vị và các thuộc tính không được giữ lại.
3. Ứng dụng kiểm tra điều kiện trên revision sẽ xuất; người dùng xác nhận.
4. Ứng dụng tạo file, kiểm tra hoàn tất và cung cấp tải xuống.
5. Ứng dụng hiển thị revision nguồn và kết quả xuất.

### Luồng thay thế và ngoại lệ

- **A1 — Bước 3, có thay đổi chưa lưu:** Cho lưu trước hoặc xuất bản hiện tại theo lựa chọn rõ ràng; ghi đúng revision thực sự được xuất.
- **E1 — Bước 1, định dạng chưa triển khai:** Không hiển thị như lựa chọn sử dụng được.
- **E2 — Bước 3, đơn vị/đối tượng chưa hợp lệ:** Chỉ rõ dữ liệu thiếu; chưa xuất.
- **E3 — Bước 4, dữ liệu đổi trong khi xuất:** File chỉ đại diện revision đã chụp; không gắn nhãn là bản mới nhất.
- **E4 — Bước 4, xuất thất bại:** Thông báo lỗi và cho thử lại; giữ dữ liệu gốc.

### Nghiệm thu

- **AC-UC13-01:** File mở được bằng công cụ đích đã chọn trong kế hoạch kiểm thử và giữ đơn vị/kích thước theo hợp đồng xuất.
- **AC-UC13-02:** Chỉ cam kết đối tượng và thuộc tính đã xác định cho định dạng; không tuyên bố mọi file xuất đều chỉnh sửa tương đương dự án gốc.
- **AC-UC13-03:** Nếu có IFC, cần kiểm tra thêm loại đối tượng và quan hệ lỗ mở/tường đã cam kết; chỉ xem thấy mesh chưa đủ nghiệm thu ngữ nghĩa.
