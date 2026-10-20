import { GROUPS, HEALTH_COURSES, MAJORS as MAJOR_LIST, majorsOfGroup } from './content/programs.js';
import { NEWS_ITEMS } from './content/news.js';
import { NOTICES_DATA } from './content/notices.js';

export const SCHOOL = {
  name: 'TRƯỜNG TRUNG CẤP BÁCH KHOA BÌNH DƯƠNG',
  address: '89 Đại Lộ Độc Lập, P. Dĩ An, Tp. Dĩ An, Bình Dương (bên trong nhà khách A11, Quân đoàn 34)',
  phone: '0283 729 6689',
  hotline: '0989 627 686',
  hotlineHref: 'tel:0989627686',
  zalo: '0373 810 236',
  zaloHref: 'https://zalo.me/0373810236',
  contactPerson: 'Cô Hoa',
  website: 'bdp.edu.vn',
  websiteHref: 'https://bdp.edu.vn',
  facebook: 'https://www.facebook.com/tran.hoa.669215',
  mapsLink:
    'https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+Trung+C%E1%BA%A5p+B%C3%A1ch+Khoa+B%C3%ACnh+D%C6%B0%C6%A1ng/@10.8819749,106.7392704,17z/data=!3m1!4b1!4m6!3m5!1s0x3174d80d8bbbf6bd:0x50f7d8a7d9dc4489!8m2!3d10.8819749!4d106.7418453!16s%2Fg%2F11xhqpgpn',
  mapsEmbed: 'https://www.google.com/maps?q=10.8819749,106.7418453&z=16&output=embed',
};

const BOOST_NOTICE = '/thong-bao/tuyen-sinh-lop-10-ket-hop-hoc-trung-cap-chinh-quy';

// Đường dẫn dạng '/#id' dẫn về một mục trên trang chủ (ScrollManager tự cuộn tới mục đó).
export const NAV = [
  { label: 'Giới thiệu', to: '/#gioi-thieu', sub: [['Về nhà trường', '/#gioi-thieu'], ['Quyền lợi học sinh', '/#vi-sao']] },
  { label: 'Tuyển sinh', to: '/#tuyen-sinh', sub: [['Tuyển sinh lớp 10 kết hợp', BOOST_NOTICE], ['Đăng ký xét tuyển', '/#dang-ky']] },
  { label: 'Đào tạo', to: '/dao-tao', sub: [['Tất cả ngành đào tạo', '/dao-tao'], ...GROUPS.map((g) => [g.name, `/dao-tao#${g.id}`])] },
  { label: 'Tin tức', to: '/tin-tuc', sub: [['Tin tức & Sự kiện', '/tin-tuc'], ['Thông báo', '/thong-bao'], ['Hình ảnh hoạt động', '/#hoat-dong']] },
  { label: 'Liên hệ', to: '/#lien-he' },
];

export const STATS = [
  { icon: 'book', value: '12', label: 'ngành đào tạo' },
  { icon: 'cap', value: '100%', label: 'hỗ trợ học phí học nghề' },
  { icon: 'bag', value: '100%', label: 'cam kết có việc làm' },
  { icon: 'bank', value: '10-11-12', noCount: true, label: 'học văn hóa & liên thông CĐ, ĐH' },
];

export const BANNERS = [
  { src: '/img/p13.jpg', alt: 'Tuyển sinh vào lớp 10 – học văn hóa phổ thông và Trung cấp chính quy' },
  { src: '/img/p40.jpg', alt: 'Tuyển sinh Trung cấp ngành Công nghệ thông tin' },
  { src: '/img/p36.jpg', alt: 'Tuyển sinh Trung cấp chính quy Dược – Điều dưỡng' },
  { src: '/img/p27.jpg', alt: 'Tuyển sinh Trung cấp ngành Tiếng Trung Quốc' },
  { src: '/img/p08.jpg', alt: 'Chương trình đào tạo liên tục, bồi dưỡng kiến thức khối ngành sức khỏe' },
];

export const BENEFITS = [
  { icon: 'coin', title: 'Hỗ trợ 100% học phí học nghề', text: 'Học sinh được hỗ trợ toàn bộ học phí phần học nghề.' },
  { icon: 'page', title: 'Học lớp 10 – 11 – 12', text: 'Chương trình do Trung tâm giáo dục thường xuyên đào tạo; được dự thi tốt nghiệp THPT quốc gia.' },
  { icon: 'shield', title: 'Nhận 2 bằng', text: 'Bằng tốt nghiệp THPT và bằng Trung cấp chính quy khi hoàn thành chương trình.' },
  { icon: 'chart', title: 'Liên thông Cao đẳng, Đại học', text: 'Được liên thông Cao đẳng, Đại học trên toàn quốc.' },
];

export const WHY_BDP = [
  ['12 ngành đào tạo', ' thuộc khối Sức khỏe, Công nghệ – Kinh tế và Ngoại ngữ.'],
  ['Học văn hóa song song học nghề', ' – hoàn thành chương trình lớp 10, 11, 12.'],
  ['Hỗ trợ 100% học phí học nghề', ' cho học sinh theo chương trình tuyển sinh lớp 10 kết hợp.'],
  ['Nhận bằng THPT và Trung cấp chính quy', ', liên thông Cao đẳng, Đại học trên toàn quốc.'],
  ['Cam kết 100% học sinh ra trường có việc làm.', ''],
  ['Chương trình bồi dưỡng khối ngành sức khỏe', ' có lớp trực tuyến tại Đồng Nai, Bình Dương.'],
];

// Thẻ chương trình trên trang chủ: 3 nhóm ngành + khóa bồi dưỡng sức khỏe, mỗi mục dẫn tới trang chi tiết.
export const PROGRAMS = [
  ...GROUPS.map((g) => ({
    head: g.name.toUpperCase(), img: g.img, alt: g.imgAlt, tag: g.tag, to: `/dao-tao#${g.id}`,
    items: majorsOfGroup(g.id).map((m) => ({ name: m.name, to: `/dao-tao/${m.slug}` })),
  })),
  {
    head: 'BỒI DƯỠNG SỨC KHỎE', img: '/img/p08.jpg', alt: 'Đào tạo liên tục khối ngành sức khỏe', tag: 'CÓ LỚP TRỰC TUYẾN',
    to: '/thong-bao/boi-duong-kien-thuc-khoi-nganh-suc-khoe',
    items: HEALTH_COURSES.slice(0, 6).map((name) => ({ name, to: '/thong-bao/boi-duong-kien-thuc-khoi-nganh-suc-khoe' })),
  },
];

export const MAJOR_NAMES = MAJOR_LIST.map((m) => m.name);

export const LEVELS = ['Tốt nghiệp THCS', 'Tốt nghiệp THPT', 'Tốt nghiệp Trung cấp', 'Tốt nghiệp Cao đẳng, Đại học ngành khác'];

// Nội dung tin tức viết tạm theo ảnh – cần thay bằng tin thật của nhà trường.

const toCard = (n) => ({ ...n, to: `/tin-tuc/${n.slug}`, img: n.cover, alt: n.coverAlt, text: n.excerpt });
export const NEWS_FEATURED = toCard(NEWS_ITEMS[0]);

export const NEWS = NEWS_ITEMS.slice(1, 5).map(toCard);

export const NOTICE_FEATURED = {
  img: NOTICES_DATA[0].images[2][0], alt: NOTICES_DATA[0].images[2][1],
  title: NOTICES_DATA[0].title, to: `/thong-bao/${NOTICES_DATA[0].slug}`,
};

export const NOTICES = NOTICES_DATA.slice(1).map((n) => ({ title: n.short, to: `/thong-bao/${n.slug}` }));

export const GALLERY = [
  ['p07', 'Trao quà cho học sinh'], ['p09', 'Phụ huynh, học sinh tham dự chương trình tư vấn'],
  ['p14', 'Trao quà tại chương trình trải nghiệm'], ['p17', 'Hoạt động đoàn thể'],
  ['p26', 'Hoạt động trải nghiệm ngoài trời'], ['p30', 'Học sinh chụp ảnh lưu niệm tại khu di tích'],
  ['p32', 'Tham quan bảo tàng'], ['p35', 'Học sinh trước tượng đài'],
  ['p47', 'Trao giải tại chương trình trải nghiệm'], ['p18', 'Toàn thể học sinh tại sân trường'],
].map(([id, alt]) => ({ src: `/img/${id}.jpg`, alt }));
