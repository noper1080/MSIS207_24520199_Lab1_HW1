# Task Decomposition - HW1: Production Portfolio

## M1: Accessibility (A11y) & Semantic DOM
- Mục tiêu: Xây dựng cây DOM sử dụng landmark (không lạm dụng thẻ div).
- Đảm bảo tỷ lệ tương phản màu sắc đạt chuẩn WCAG 2.2 AA (>= 4.5:1).
- Tích hợp skip-link.

## M2: Focus Trap Audit & Navigation
- Mục tiêu: Xây dựng bố cục CSS (Grid/Flexbox) mobile-first ở 375px.
- Đảm bảo điều hướng 100% bằng bàn phím (Tab/Enter), không bị kẹt focus (bẫy tiêu điểm).

## M3: Security & Vanilla JS
- Mục tiêu: Thiết lập Strict CSP (Content Security Policy).
- Tách biệt logic JS, gắn sự kiện bằng `addEventListener`. Tuyệt đối không dùng inline handlers (onclick).

## M4: Performance Optimization
- Mục tiêu: Tối ưu hình ảnh, giải quyết triệt để lỗi CLS (Cumulative Layout Shift) bằng width/height và lazy loading. Đạt 100 điểm Lighthouse.