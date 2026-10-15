// 1. Lấy phần tử DOM (Chỉ dùng const theo chuẩn ES6+)[cite: 1]
const themeToggle = document.querySelector('#theme-btn');

// 2. Kiểm tra trạng thái đã lưu trong localStorage[cite: 1]
const currentTheme = localStorage.getItem('theme');

// Nếu người dùng đã chọn dark theme trước đó, áp dụng ngay
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.setAttribute('aria-pressed', 'true');
}

// 3. Xử lý sự kiện bằng addEventListener (Tuyệt đối không dùng inline onclick)[cite: 1, 2]
themeToggle.addEventListener('click', () => {
  // Bật/tắt class dark-theme trên thẻ body[cite: 1]
  document.body.classList.toggle('dark-theme');
  
  // Xác định trạng thái hiện tại
  const isDark = document.body.classList.contains('dark-theme');
  
  // Cập nhật thuộc tính aria-pressed cho Accessibility[cite: 1]
  themeToggle.setAttribute('aria-pressed', isDark);
  
  // Lưu trạng thái vào localStorage để giữ nguyên khi tải lại trang[cite: 1]
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});