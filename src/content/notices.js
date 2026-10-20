// Thông báo. Toàn bộ nội dung chép lại từ các tờ rơi tuyển sinh của nhà trường.
// Chưa có ngày đăng nên không hiển thị ngày; khi có, thêm trường `date` (YYYY-MM-DD) cho từng thông báo.

const AUDIENCE_THCS_THPT = ['Tốt nghiệp THCS, THPT', 'Tốt nghiệp Trung cấp, Cao đẳng, Đại học ngành khác'];

export const NOTICES_DATA = [
  {
    slug: 'tuyen-sinh-lop-10-ket-hop-hoc-trung-cap-chinh-quy',
    title: 'Tuyển sinh lớp 10 kết hợp học Trung cấp chính quy tại Dĩ An',
    short: 'Tuyển sinh lớp 10 kết hợp học Trung cấp chính quy tại Dĩ An',
    isNew: true,
    summary: 'Học sinh học chương trình lớp 10 – 11 – 12 và học Trung cấp chính quy; được hỗ trợ 100% học phí học nghề.',
    images: [['/img/p42.jpg', 'Tờ rơi tuyển sinh lớp 10 kết hợp học Trung cấp chính quy tại Dĩ An'], ['/img/p13.jpg', 'Thông báo tuyển sinh vào lớp 10 học văn hóa phổ thông và Trung cấp chính quy'], ['/img/p49.jpg', 'Tờ rơi tuyển sinh lớp 10 kết hợp (bản rút gọn)']],
    intro: 'Trường Trung cấp Bách Khoa Bình Dương thông báo tuyển sinh lớp 10 kết hợp học Trung cấp chính quy tại Dĩ An.',
    sections: [
      { heading: 'Các ngành đào tạo', type: 'list', items: ['Công nghệ thông tin', 'Kỹ thuật công nghệ ô tô', 'Dược', 'Điều dưỡng', 'Y học cổ truyền', 'Tiếng Trung Quốc', 'Tiếng Anh', 'Kế toán doanh nghiệp', 'Quản trị kinh doanh', 'Kỹ thuật xét nghiệm y học', 'Kỹ thuật hình ảnh y học', 'Kỹ thuật phục hình răng'], numbered: true, cols: 2, links: 'majors' },
      { heading: 'Quyền lợi học sinh', type: 'list', items: ['Được học chương trình lớp 10 – 11 – 12 do Trung tâm giáo dục thường xuyên đào tạo.', 'Được tham dự kỳ thi tốt nghiệp THPT quốc gia.', 'Được hỗ trợ 100% học phí học nghề.', 'Được nhận bằng tốt nghiệp THPT và Trung cấp chính quy.', 'Được liên thông Cao đẳng, Đại học trên toàn quốc.'] },
      { heading: 'Cam kết', type: 'text', text: 'Cam kết 100% học sinh ra trường có việc làm.' },
    ],
    contact: { address: true, phone: true, hotline: true, zalo: true, website: true },
  },
  {
    slug: 'tuyen-sinh-trung-cap-cong-nghe-thong-tin',
    title: 'Tuyển sinh Trung cấp ngành Công nghệ thông tin',
    short: 'Tuyển sinh Trung cấp ngành Công nghệ thông tin',
    summary: 'Tuyển sinh Trung cấp ngành Công nghệ thông tin; tốt nghiệp Trung cấp được học liên thông Cao đẳng, Đại học trên toàn quốc.',
    images: [['/img/p40.jpg', 'Tờ rơi tuyển sinh Trung cấp ngành Công nghệ thông tin']],
    intro: 'Trường Trung cấp Bách Khoa Bình Dương thông báo tuyển sinh Trung cấp ngành Công nghệ thông tin.',
    sections: [
      { heading: 'Đối tượng tuyển sinh', type: 'list', items: AUDIENCE_THCS_THPT },
      { heading: 'Liên thông', type: 'text', text: 'Tốt nghiệp Trung cấp được học liên thông: Trung cấp, Cao đẳng, Đại học trên toàn quốc.' },
    ],
    major: 'cong-nghe-thong-tin',
    contact: { hotline: true, zalo: true },
  },
  {
    slug: 'tuyen-sinh-trung-cap-chinh-quy-duoc-dieu-duong',
    title: 'Tuyển sinh Trung cấp chính quy Dược – Điều dưỡng',
    short: 'Tuyển sinh Trung cấp chính quy Dược – Điều dưỡng',
    summary: 'Tuyển sinh Trung cấp chính quy ngành Dược và Điều dưỡng; có cơ hội liên thông Cao đẳng, Đại học trên toàn quốc.',
    images: [['/img/p36.jpg', 'Tờ rơi tuyển sinh Trung cấp chính quy Dược – Điều dưỡng']],
    intro: 'Trường Trung cấp Bách Khoa Bình Dương thông báo tuyển sinh Trung cấp chính quy ngành Dược – Điều dưỡng.',
    sections: [
      { heading: 'Đối tượng tuyển sinh', type: 'list', items: ['Tốt nghiệp THCS, THPT', 'Tốt nghiệp Trung cấp', 'Cao đẳng, Đại học ngành khác'] },
      { heading: 'Liên thông', type: 'text', text: 'Cơ hội liên thông: Cao đẳng, Đại học trên toàn quốc.' },
    ],
    major: 'duoc',
    contact: { hotline: true, zalo: true },
  },
  {
    slug: 'tuyen-sinh-trung-cap-tieng-trung-quoc',
    title: 'Tuyển sinh Trung cấp ngành Tiếng Trung Quốc',
    short: 'Tuyển sinh Trung cấp ngành Tiếng Trung Quốc',
    summary: 'Tuyển sinh Trung cấp ngành Tiếng Trung Quốc dành cho người tốt nghiệp THCS, THPT, Trung cấp, Cao đẳng, Đại học ngành khác.',
    images: [['/img/p27.jpg', 'Tờ rơi tuyển sinh Trung cấp ngành Tiếng Trung Quốc']],
    intro: 'Trường Trung cấp Bách Khoa Bình Dương thông báo tuyển sinh Trung cấp ngành Tiếng Trung Quốc.',
    sections: [
      { heading: 'Đối tượng tuyển sinh', type: 'list', items: ['Tốt nghiệp THCS, THPT', 'Tốt nghiệp Trung cấp, Cao đẳng, Đại học ngành khác'] },
    ],
    major: 'tieng-trung-quoc',
    contact: { hotline: true, zalo: true },
  },
  {
    slug: 'boi-duong-kien-thuc-khoi-nganh-suc-khoe',
    title: 'Đào tạo liên tục, bồi dưỡng kiến thức khối ngành sức khỏe tại Đồng Nai, Bình Dương',
    short: 'Đào tạo liên tục, bồi dưỡng kiến thức khối ngành sức khỏe tại Đồng Nai, Bình Dương',
    summary: 'Chương trình đào tạo liên tục, bồi dưỡng, cập nhật kiến thức khối ngành sức khỏe, có lớp trực tuyến.',
    images: [['/img/p08.jpg', 'Tờ rơi giới thiệu chương trình đào tạo liên tục, bồi dưỡng kiến thức khối ngành sức khỏe']],
    intro: 'Giới thiệu chương trình đào tạo liên tục, bồi dưỡng, cập nhật kiến thức thuộc khối ngành sức khỏe tại Đồng Nai, Bình Dương. Có lớp trực tuyến.',
    sections: [
      { heading: 'Các khóa đào tạo', type: 'list', items: 'HEALTH_COURSES', numbered: true },
    ],
    contact: { hotline: true, zalo: true },
  },
];

export const getNotice = (slug) => NOTICES_DATA.find((n) => n.slug === slug);
