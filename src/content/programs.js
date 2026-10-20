// Nội dung ngành đào tạo.
// Đối tượng và quyền lợi lấy từ tờ rơi tuyển sinh của nhà trường. Phần "giới thiệu ngành", "nội dung học" và
// "cơ hội việc làm" là mô tả chung về ngành, cần nhà trường rà soát và bổ sung chương trình đào tạo chính thức.
// Thời gian đào tạo, học phí, chỉ tiêu chưa có dữ liệu nên hiển thị "liên hệ nhà trường".

export const COMBO_FLYER = '/img/p42.jpg';

export const GROUPS = [
  { id: 'suc-khoe', name: 'Khối Sức khỏe', tag: 'Y – DƯỢC · CHÍNH QUY', img: '/img/p36.jpg', imgAlt: 'Tuyển sinh Dược – Điều dưỡng' },
  { id: 'cong-nghe-kinh-te', name: 'Công nghệ – Kinh tế', tag: 'KỸ THUẬT · QUẢN TRỊ', img: '/img/p40.jpg', imgAlt: 'Tuyển sinh Công nghệ thông tin' },
  { id: 'ngoai-ngu', name: 'Ngoại ngữ', tag: 'NGÔN NGỮ · HỘI NHẬP', img: '/img/p27.jpg', imgAlt: 'Tuyển sinh Tiếng Trung Quốc' },
];

export const MAJORS = [
  {
    slug: 'cong-nghe-thong-tin', name: 'Công nghệ thông tin', group: 'cong-nghe-kinh-te', flyer: '/img/p40.jpg',
    summary: 'Trang bị kiến thức và kỹ năng về máy tính, mạng và phần mềm để vận hành, bảo trì và hỗ trợ hệ thống công nghệ thông tin.',
    about: 'Người học được làm quen với phần cứng, hệ điều hành, mạng máy tính và các công cụ phần mềm thông dụng, kết hợp thực hành để sử dụng thành thạo trong môi trường làm việc.',
    learn: ['Lắp ráp, cài đặt và bảo trì máy tính', 'Mạng máy tính và an toàn thông tin cơ bản', 'Lập trình và thiết kế web cơ bản', 'Quản trị và hỗ trợ người dùng trong doanh nghiệp'],
    jobs: ['Kỹ thuật viên máy tính, mạng', 'Nhân viên hỗ trợ kỹ thuật (IT Helpdesk)', 'Nhân viên thiết kế, quản trị website cơ bản'],
    flyerNote: 'Tốt nghiệp Trung cấp được học liên thông: Trung cấp, Cao đẳng, Đại học trên toàn quốc.',
  },
  {
    slug: 'ky-thuat-cong-nghe-o-to', name: 'Kỹ thuật công nghệ ô tô', group: 'cong-nghe-kinh-te', flyer: null,
    summary: 'Đào tạo kỹ năng bảo dưỡng, kiểm tra và sửa chữa các hệ thống trên ô tô.',
    about: 'Người học tìm hiểu cấu tạo, nguyên lý hoạt động của động cơ, hệ thống truyền động, hệ thống điện – điện tử trên ô tô và thực hành chẩn đoán, sửa chữa.',
    learn: ['Cấu tạo và nguyên lý động cơ ô tô', 'Hệ thống điện, điện tử ô tô', 'Bảo dưỡng, sửa chữa định kỳ', 'Chẩn đoán hư hỏng và an toàn lao động'],
    jobs: ['Kỹ thuật viên bảo dưỡng, sửa chữa ô tô', 'Nhân viên kỹ thuật tại gara, trung tâm dịch vụ', 'Nhân viên tư vấn dịch vụ kỹ thuật'],
  },
  {
    slug: 'ke-toan-doanh-nghiep', name: 'Kế toán doanh nghiệp', group: 'cong-nghe-kinh-te', flyer: null,
    summary: 'Cung cấp kiến thức và kỹ năng thực hành kế toán phục vụ hoạt động của doanh nghiệp.',
    about: 'Người học làm quen với nguyên lý kế toán, chứng từ, sổ sách và phần mềm kế toán, đáp ứng công việc kế toán cơ bản tại doanh nghiệp vừa và nhỏ.',
    learn: ['Nguyên lý kế toán và lập chứng từ', 'Kế toán các phần hành cơ bản', 'Thuế và báo cáo tài chính cơ bản', 'Sử dụng phần mềm kế toán, Excel'],
    jobs: ['Nhân viên kế toán doanh nghiệp', 'Nhân viên kế toán kho, công nợ, thanh toán', 'Nhân viên văn phòng, hành chính – tài chính'],
  },
  {
    slug: 'quan-tri-kinh-doanh', name: 'Quản trị kinh doanh', group: 'cong-nghe-kinh-te', flyer: null,
    summary: 'Trang bị kiến thức nền tảng về kinh doanh, bán hàng, marketing và tổ chức công việc trong doanh nghiệp.',
    about: 'Người học được tiếp cận các kỹ năng giao tiếp, bán hàng, chăm sóc khách hàng và quản lý công việc, phù hợp với nhu cầu của các doanh nghiệp thương mại, dịch vụ.',
    learn: ['Kiến thức cơ bản về quản trị và kinh doanh', 'Kỹ năng bán hàng, chăm sóc khách hàng', 'Marketing cơ bản', 'Kỹ năng giao tiếp, làm việc nhóm'],
    jobs: ['Nhân viên kinh doanh, bán hàng', 'Nhân viên chăm sóc khách hàng', 'Nhân viên hành chính, văn phòng'],
  },
  {
    slug: 'duoc', name: 'Dược', group: 'suc-khoe', flyer: '/img/p36.jpg',
    summary: 'Đào tạo kiến thức về thuốc, cách sử dụng, bảo quản và tư vấn dùng thuốc an toàn, hợp lý.',
    about: 'Người học được trang bị kiến thức về dược lý, các nhóm thuốc, quy định bảo quản – cấp phát thuốc và kỹ năng tư vấn cho người dùng thuốc.',
    learn: ['Các nhóm thuốc và dược lý cơ bản', 'Bảo quản, cấp phát và quản lý thuốc', 'Tư vấn sử dụng thuốc an toàn, hợp lý', 'Quy định pháp luật về hành nghề dược'],
    jobs: ['Nhân viên nhà thuốc, quầy thuốc', 'Nhân viên kho dược, công ty phân phối dược phẩm', 'Nhân viên tại cơ sở y tế'],
    flyerNote: 'Cơ hội liên thông: Cao đẳng, Đại học trên toàn quốc.',
  },
  {
    slug: 'dieu-duong', name: 'Điều dưỡng', group: 'suc-khoe', flyer: '/img/p36.jpg',
    summary: 'Đào tạo kỹ năng chăm sóc người bệnh, hỗ trợ điều trị và chăm sóc sức khỏe cộng đồng.',
    about: 'Người học được thực hành các kỹ thuật điều dưỡng cơ bản, chăm sóc người bệnh toàn diện và rèn luyện y đức, kỹ năng giao tiếp trong môi trường y tế.',
    learn: ['Kỹ thuật điều dưỡng cơ bản', 'Chăm sóc người bệnh toàn diện', 'Sơ cứu, cấp cứu ban đầu', 'Y đức và kỹ năng giao tiếp trong y tế'],
    jobs: ['Điều dưỡng tại bệnh viện, phòng khám', 'Nhân viên chăm sóc sức khỏe tại cơ sở y tế, trung tâm dưỡng lão', 'Nhân viên y tế cộng đồng'],
    flyerNote: 'Cơ hội liên thông: Cao đẳng, Đại học trên toàn quốc.',
  },
  {
    slug: 'y-hoc-co-truyen', name: 'Y học cổ truyền', group: 'suc-khoe', flyer: null,
    summary: 'Cung cấp kiến thức y học cổ truyền và các phương pháp chăm sóc sức khỏe bằng y học cổ truyền.',
    about: 'Người học làm quen với lý luận y học cổ truyền, dược liệu và các phương pháp hỗ trợ điều trị, chăm sóc sức khỏe theo y học cổ truyền.',
    learn: ['Lý luận cơ bản về y học cổ truyền', 'Dược liệu và bài thuốc cổ truyền', 'Các phương pháp chăm sóc, hỗ trợ điều trị', 'Y đức và an toàn trong thực hành'],
    jobs: ['Nhân viên tại cơ sở khám chữa bệnh bằng y học cổ truyền', 'Nhân viên tại cơ sở bán dược liệu, thuốc cổ truyền', 'Nhân viên chăm sóc sức khỏe tại cơ sở y tế'],
  },
  {
    slug: 'ky-thuat-xet-nghiem-y-hoc', name: 'Kỹ thuật xét nghiệm y học', group: 'suc-khoe', flyer: null,
    summary: 'Đào tạo kỹ năng thực hiện các xét nghiệm hỗ trợ chẩn đoán và theo dõi điều trị.',
    about: 'Người học được thực hành lấy mẫu, xử lý mẫu và thực hiện các xét nghiệm cơ bản trong phòng xét nghiệm, tuân thủ quy trình an toàn sinh học.',
    learn: ['Lấy và bảo quản mẫu bệnh phẩm', 'Các xét nghiệm huyết học, sinh hóa, vi sinh cơ bản', 'Vận hành và bảo quản thiết bị xét nghiệm', 'An toàn sinh học trong phòng xét nghiệm'],
    jobs: ['Kỹ thuật viên xét nghiệm tại bệnh viện, phòng khám', 'Kỹ thuật viên tại trung tâm xét nghiệm', 'Nhân viên phòng thí nghiệm y sinh'],
  },
  {
    slug: 'ky-thuat-hinh-anh-y-hoc', name: 'Kỹ thuật hình ảnh y học', group: 'suc-khoe', flyer: null,
    summary: 'Đào tạo kỹ năng vận hành thiết bị chẩn đoán hình ảnh phục vụ khám, chữa bệnh.',
    about: 'Người học được làm quen với các thiết bị chẩn đoán hình ảnh, quy trình thực hiện kỹ thuật và các nguyên tắc an toàn bức xạ.',
    learn: ['Nguyên lý các thiết bị chẩn đoán hình ảnh', 'Quy trình thực hiện kỹ thuật chụp, ghi hình', 'An toàn bức xạ và bảo vệ người bệnh', 'Giao tiếp, hướng dẫn người bệnh'],
    jobs: ['Kỹ thuật viên chẩn đoán hình ảnh tại bệnh viện, phòng khám', 'Nhân viên tại trung tâm chẩn đoán hình ảnh'],
  },
  {
    slug: 'ky-thuat-phuc-hinh-rang', name: 'Kỹ thuật phục hình răng', group: 'suc-khoe', flyer: null,
    summary: 'Đào tạo kỹ năng chế tác các loại phục hình răng theo chỉ định của nha sĩ.',
    about: 'Người học thực hành chế tác hàm, răng giả và các sản phẩm phục hình với yêu cầu cao về độ chính xác, thẩm mỹ.',
    learn: ['Giải phẫu răng miệng cơ bản', 'Chế tác răng giả tháo lắp và cố định', 'Vật liệu và dụng cụ trong phục hình răng', 'Quy trình làm việc cùng nha sĩ'],
    jobs: ['Kỹ thuật viên phục hình răng tại labo nha khoa', 'Kỹ thuật viên tại phòng khám nha khoa'],
  },
  {
    slug: 'tieng-trung-quoc', name: 'Tiếng Trung Quốc', group: 'ngoai-ngu', flyer: '/img/p27.jpg',
    summary: 'Trang bị kỹ năng nghe, nói, đọc, viết tiếng Trung phục vụ giao tiếp và làm việc.',
    about: 'Người học được rèn luyện bốn kỹ năng ngôn ngữ từ cơ bản, kết hợp tiếng Trung giao tiếp trong công việc và dịch vụ.',
    learn: ['Phát âm, từ vựng và ngữ pháp cơ bản', 'Nghe – nói giao tiếp thông dụng', 'Đọc – viết chữ Hán', 'Tiếng Trung trong môi trường công việc'],
    jobs: ['Nhân viên văn phòng, phiên dịch cơ bản tại doanh nghiệp có yếu tố Trung Quốc', 'Nhân viên kinh doanh, chăm sóc khách hàng', 'Nhân viên du lịch, dịch vụ'],
  },
  {
    slug: 'tieng-anh', name: 'Tiếng Anh', group: 'ngoai-ngu', flyer: null,
    summary: 'Trang bị kỹ năng nghe, nói, đọc, viết tiếng Anh phục vụ học tập và công việc.',
    about: 'Người học được rèn luyện bốn kỹ năng ngôn ngữ, tập trung vào tiếng Anh giao tiếp và tiếng Anh dùng trong môi trường làm việc.',
    learn: ['Ngữ pháp và từ vựng nền tảng', 'Nghe – nói giao tiếp', 'Đọc hiểu và viết thông dụng', 'Tiếng Anh văn phòng, dịch vụ'],
    jobs: ['Nhân viên văn phòng, hành chính', 'Nhân viên kinh doanh, chăm sóc khách hàng', 'Nhân viên du lịch, nhà hàng – khách sạn'],
  },
];

export const getMajor = (slug) => MAJORS.find((m) => m.slug === slug);
export const majorsOfGroup = (groupId) => MAJORS.filter((m) => m.group === groupId);
export const getGroup = (id) => GROUPS.find((g) => g.id === id);

// Các khóa đào tạo liên tục, bồi dưỡng khối ngành sức khỏe (theo tờ rơi)
export const HEALTH_COURSES = [
  'Dinh dưỡng tiết chế', 'Điện tâm đồ cơ bản', 'Điện tâm đồ', 'Kiểm soát nhiễm khuẩn', 'Phục hồi chức năng',
  'Thư ký y khoa', 'Bệnh nghề nghiệp', 'Kỹ thuật viên kính thuốc', 'Quản lý trang thiết bị y tế',
  'Phương pháp dạy học lâm sàng cho người dạy học thực hành trong đào tạo khối ngành sức khỏe',
];
