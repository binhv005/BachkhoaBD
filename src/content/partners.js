// Các đơn vị đồng hành cùng nhà trường (doanh nghiệp, trường đại học, cơ sở y tế, đối tác liên kết đào tạo...).
//
// Cách thêm: bỏ file logo vào public/img/partners/ (nên dùng PNG/SVG nền trong suốt, tỉ lệ gần vuông hoặc ngang),
// rồi thêm một dòng vào danh sách dưới đây:
//   { name: 'Tên đơn vị', logo: '/img/partners/ten-file.png', href: 'https://website-don-vi.vn' }   // href có thể bỏ trống
//
// LƯU Ý: 8 logo hiện tại được lấy từ trang tham khảo hcci.edu.vn (là đối tác của HCCI) để dựng giao diện mẫu.
// TRƯỚC KHI ĐĂNG CHÍNH THỨC: thay bằng đối tác thật của Trường Trung cấp Bách Khoa Bình Dương
// (hoặc xin phép từng đơn vị), kẻo trang thể hiện sai quan hệ hợp tác.
//
// Khi danh sách còn trống, mục này TỰ ẨN trên bản chạy thật (npm run build); chạy `npm run dev` sẽ thấy ô giữ chỗ để xem bố cục.
// Chỉ thêm những đơn vị thực sự hợp tác với nhà trường và đã đồng ý cho dùng logo.
export const PARTNERS = [
  { name: 'Đại học KHTN - ĐHQG TP.HCM', logo: '/img/partners/khtn-dhqg-hcm.jpg' },
  { name: 'Công ty CP Quản lý nhà Toàn Cầu', logo: '/img/partners/global-home.png' },
  { name: 'Mai Linh Group', logo: '/img/partners/mai-linh.png' },
  { name: 'Công ty CP Xây dựng WorldSteel', logo: '/img/partners/world-steel.png' },
  { name: 'Đại học Trà Vinh', logo: '/img/partners/dai-hoc-tra-vinh.png' },
  { name: 'Đại học Mở Hà Nội', logo: '/img/partners/dai-hoc-mo-ha-noi.jpg' },
  { name: 'Đại học Kinh tế TP.HCM', logo: '/img/partners/dai-hoc-kinh-te-hcm.jpg' },
  { name: 'Đại học CNTT - ĐHQG TP.HCM', logo: '/img/partners/dai-hoc-cntt-hcm.jpg' },
];
