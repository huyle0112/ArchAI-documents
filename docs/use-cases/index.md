---
title: Tổng quan use case
description: Danh mục và quy ước đặc tả use case của AI House Design Workspace.
sidebar_position: 1
---

# Đặc tả use case — AI House Design Workspace

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản | 0.1 — Dự thảo để rà soát |
| Ngày | 04/10/2026 |
| Tài liệu cơ sở | Persona, vấn đề và phân tích nghiệp vụ, phiên bản 0.1 |
| Phạm vi | Mặt bằng 2D một tầng → dữ liệu kiến trúc có cấu trúc → mô hình 3D theo tham số |
| Trạng thái | Yêu cầu đề xuất; chưa biểu thị chức năng đã triển khai hoặc nghiệm thu |

## 1. Mục đích và phạm vi

Tài liệu mô tả tương tác giữa người dùng và ứng dụng, làm căn cứ thiết kế giao diện, triển khai chức năng và xây dựng kiểm thử nghiệm thu. Chi tiết lựa chọn model, API, database và thuật toán hình học thuộc tài liệu thiết kế kỹ thuật riêng.

**MVP:** Nhập PNG/JPEG của một mặt bằng một tầng; xác nhận tỷ lệ; nhận diện và hiệu chỉnh tường, phòng, cửa, cửa sổ; bổ sung thông số chiều đứng; kiểm tra cấu trúc; dựng, xem và lưu mô hình. Tường thẳng, chủ yếu vuông góc, ký hiệu nằm trong phạm vi được thử nghiệm.

**Ngoài MVP:** Sinh mặt bằng từ prompt, phác thảo tay tùy ý, PDF/CAD đầu vào, nhiều tầng, cầu thang, mái phức tạp, tính toán kết cấu và hồ sơ thi công. OCR là chức năng nên có; xuất IFC/DXF/GLB là mở rộng có điều kiện.

## 2. Tác nhân và quy ước

### 2.1. Tác nhân

| Mã | Tác nhân | Vai trò |
| --- | --- | --- |
| ACT01 | Người sử dụng dự án | Tạo/mở dự án, nhập bản vẽ, xác nhận thông số, chỉnh sửa, xem và lưu kết quả |

Chủ nhà, người hỗ trợ thiết kế và sinh viên là các persona của ACT01, không mặc định là ba nhóm quyền. Nếu có nhiều tài khoản, mọi thao tác phải kiểm tra quyền dự án; cơ chế đăng nhập và chia sẻ cần đặc tả bổ sung khi được đưa vào phạm vi.

AI, OCR, bộ kiểm tra và bộ dựng hình được xem là thành phần **bên trong ranh giới ứng dụng** ở mức đặc tả này. Không liệt kê chúng thành tác nhân người dùng hoặc use case độc lập chỉ vì chúng là dịch vụ kỹ thuật.

### 2.2. Thuật ngữ và bảo đảm chung

- **House Graph:** dữ liệu đối tượng kiến trúc, thông số và quan hệ; là nguồn để dựng hình.
- **Lỗ mở:** cửa đi, cửa sổ hoặc lối mở được gắn vào một tường chủ.
- **Bản nháp:** dữ liệu có thể còn thiếu hoặc sai nhưng được phép lưu để sửa tiếp.
- **Revision:** mốc thay đổi dữ liệu nội bộ để nhận biết kết quả xử lý có còn khớp dữ liệu hiện tại. Đây không phải yêu cầu xây hệ thống quản lý phiên bản cho người dùng.
- **Lỗi chặn:** lỗi khiến dữ liệu chưa đủ điều kiện dựng mô hình được công nhận là hợp lệ trong phạm vi ứng dụng.
- **Cảnh báo:** vấn đề cần xem xét nhưng không chặn dựng theo bộ quy tắc đã chốt. Việc người dùng xác nhận cảnh báo được ghi riêng với kết quả kiểm tra tự động.

Trong mọi use case, lỗi tác vụ không được làm mất bản lưu gần nhất. Chỉ hiển thị “đã lưu”, “đã dựng” hoặc “đã xác nhận” khi hành động tương ứng thực sự thành công. Nội dung chưa lưu vẫn được đánh dấu chưa lưu; không cam kết phục hồi sau đóng trình duyệt nếu chưa triển khai lưu tự động.

Mỗi luồng thay thế/ngoại lệ ghi bước phát sinh và điểm quay lại hoặc kết thúc. Mã tiêu chí nghiệm thu có dạng `AC-UCxx-nn` để không trùng bộ AC tổng quát trong tài liệu nghiệp vụ.

## 3. Danh mục use case

| Mã | Tên | Mức | Ưu tiên | Yêu cầu liên quan |
| --- | --- | --- | --- | --- |
| UC01 | Tạo mô hình sơ bộ từ mặt bằng | Tổng quát, xuyên suốt | Bắt buộc | FR01–FR10 |
| UC02 | Chỉnh sửa tường hoặc lỗ mở | Mục tiêu người dùng | Bắt buộc | FR06, FR08, FR10 |
| UC03 | Tạo, lưu và mở dự án | Nhóm thao tác quản lý | Bắt buộc | FR01 |
| UC04 | Tải và kiểm tra bản vẽ | Mục tiêu người dùng | Bắt buộc | FR02 |
| UC05 | Thiết lập tỷ lệ và đơn vị | Mục tiêu người dùng | Bắt buộc | FR03 |
| UC06 | Nhận diện cấu trúc mặt bằng | Mục tiêu người dùng | Bắt buộc | FR04 |
| UC07 | Đối chiếu và xác nhận kết quả | Mục tiêu người dùng | Bắt buộc | FR05, FR07 |
| UC08 | Bổ sung thông số kiến trúc | Mục tiêu người dùng | Bắt buộc | FR07 |
| UC09 | Kiểm tra tính hợp lệ | Chức năng dùng chung | Bắt buộc | FR08 |
| UC10 | Dựng, cập nhật và xem mô hình 3D | Mục tiêu người dùng | Bắt buộc | FR09, FR10 |
| UC11 | Hoàn tác chỉnh sửa | Mục tiêu người dùng | Bắt buộc | FR10 |
| UC12 | Đọc và áp dụng gợi ý OCR | Mục tiêu người dùng | Nên có | FR11 |
| UC13 | Xuất định dạng trao đổi | Mục tiêu người dùng | Mở rộng | FR12 |

Giữ nguyên ý nghĩa **UC01** và **UC02** trong tài liệu nghiệp vụ. UC01 điều phối các use case chi tiết; không phải một màn hình bắt buộc chứa toàn bộ chức năng.

### Quan hệ giữa các use case

- UC01 sử dụng UC03–UC10 theo luồng nghiệp vụ; UC02 và UC11 phục vụ các vòng hiệu chỉnh.
- UC02, UC08 và UC10 sử dụng bước kiểm tra UC09 khi cần áp dụng thay đổi hoặc dựng hình.
- UC07 có thể chuyển sang UC02/UC08 để sửa rồi quay lại xác nhận.
- UC12 hỗ trợ UC05/UC08 khi người dùng chọn áp dụng gợi ý; không là điều kiện bắt buộc của chúng.
- UC13 chỉ xuất được từ dữ liệu đáp ứng yêu cầu của định dạng đã triển khai.

## Truy cập nhanh

- [UC01 — Tạo mô hình sơ bộ](./uc01-create-model) — Điều phối quy trình tạo mô hình 3D sơ bộ từ bản vẽ mặt bằng.
- [UC02 — Chỉnh sửa tường hoặc lỗ mở](./uc02-edit-elements) — Chỉnh sửa đối tượng kiến trúc và giữ dữ liệu liên quan nhất quán.
- [UC03 — Tạo, lưu và mở dự án](./uc03-project-management) — Quản lý vòng đời và bản lưu của dự án.
- [UC04 — Tải và kiểm tra bản vẽ](./uc04-upload-floor-plan) — Tải lên và kiểm tra điều kiện đầu vào của bản vẽ.
- [UC05 — Thiết lập tỷ lệ và đơn vị](./uc05-scale-and-unit) — Xác nhận tỷ lệ thực và đơn vị đo của bản vẽ.
- [UC06 — Nhận diện cấu trúc](./uc06-detect-structure) — Nhận diện các đối tượng kiến trúc từ mặt bằng.
- [UC07 — Đối chiếu và xác nhận](./uc07-review-results) — Đối chiếu kết quả nhận diện với bản vẽ nguồn.
- [UC08 — Bổ sung thông số](./uc08-add-parameters) — Bổ sung các thông số kiến trúc còn thiếu.
- [UC09 — Kiểm tra tính hợp lệ](./uc09-validate-model) — Kiểm tra lỗi chặn, cảnh báo và tính nhất quán.
- [UC10 — Dựng và xem mô hình 3D](./uc10-build-3d-model) — Dựng, cập nhật và quan sát mô hình 3D theo tham số.
- [UC11 — Hoàn tác chỉnh sửa](./uc11-undo-changes) — Khôi phục trạng thái nhất quán trước thao tác chỉnh sửa.
- [UC12 — Áp dụng gợi ý OCR](./uc12-ocr-suggestions) — Đọc, kiểm tra và áp dụng thông tin do OCR đề xuất.
- [UC13 — Xuất định dạng trao đổi](./uc13-export) — Xuất dữ liệu sang định dạng trao đổi được hỗ trợ.
