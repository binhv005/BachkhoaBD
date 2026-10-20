// Tin tức & sự kiện.
// LƯU Ý: nội dung viết tạm dựa trên hình ảnh nhà trường cung cấp (chưa có ngày tháng, địa điểm, số liệu cụ thể).
// Nhà trường cần thay bằng nội dung và thời gian thật của từng sự kiện trước khi đăng chính thức.

export const NEWS_TAGS = ['Hướng nghiệp', 'Hoạt động trải nghiệm', 'Giáo dục truyền thống', 'Sinh hoạt'];

const img = (n) => `/img/p${String(n).padStart(2, '0')}.jpg`;

export const NEWS_ITEMS = [
  {
    slug: 'le-truong-thanh-doi-tu-van-huong-nghiep',
    title: 'Lễ trưởng thành Đội – Chương trình tư vấn hướng nghiệp',
    tag: 'Hướng nghiệp', isNew: true,
    excerpt: 'Chương trình tư vấn hướng nghiệp dành cho học sinh, có sự tham gia của quý thầy cô và các đại biểu nhà trường.',
    cover: img(2), coverAlt: 'Hội trường trong Lễ trưởng thành Đội – Chương trình tư vấn hướng nghiệp',
    paragraphs: [
      'Chương trình "Lễ trưởng thành Đội – Tư vấn hướng nghiệp" được tổ chức cho học sinh với sự tham gia của quý thầy cô giáo và các đại biểu.',
      'Bên cạnh nghi thức trưởng thành Đội, chương trình giúp các em có thêm thông tin về định hướng học tập, lựa chọn ngành nghề phù hợp sau khi hoàn thành chương trình phổ thông.',
      'Nhà trường mong muốn đồng hành cùng học sinh và phụ huynh trong việc lựa chọn con đường học tập: học văn hóa kết hợp học nghề để có tấm bằng và cơ hội việc làm vững chắc.',
    ],
    gallery: [[3, 'Quý thầy cô và đại biểu chụp ảnh lưu niệm trước phông chương trình'], [4, 'Ảnh lưu niệm tại chương trình tư vấn hướng nghiệp'], [12, 'Một bạn học sinh phát biểu tại chương trình']],
  },
  {
    slug: 'hoat-dong-trai-nghiem-trach-nhiem-ban-than-doi-voi-gia-dinh',
    title: 'Hoạt động trải nghiệm: Trách nhiệm của bản thân đối với gia đình',
    tag: 'Hoạt động trải nghiệm',
    excerpt: 'Học sinh tham gia chương trình hoạt động trải nghiệm, hướng nghiệp với nhiều phần thi thú vị.',
    cover: img(44), coverAlt: 'Bàn trưng bày sản phẩm của học sinh trong chương trình trải nghiệm',
    paragraphs: [
      'Chương trình hoạt động trải nghiệm với chủ đề "Trách nhiệm của bản thân đối với gia đình" thu hút đông đảo học sinh tham gia.',
      'Các em được tự tay chuẩn bị sản phẩm, trang trí và thực hiện các phần thi theo nhóm, qua đó rèn luyện kỹ năng làm việc nhóm, sự sáng tạo và tinh thần trách nhiệm.',
      'Cuối chương trình, các nhóm có sản phẩm tốt được ban tổ chức trao quà và động viên.',
    ],
    gallery: [[47, 'Các bạn học sinh nhận phần thưởng của chương trình'], [43, 'Học sinh trang trí cành hoa đào giấy'], [45, 'Học sinh làm sản phẩm thủ công'], [46, 'Các nhóm cùng nhau hoàn thiện sản phẩm'], [48, 'Sản phẩm cành đào của học sinh']],
  },
  {
    slug: 'van-nghe-trao-qua-chuong-trinh-trai-nghiem',
    title: 'Văn nghệ và trao quà tại chương trình trải nghiệm',
    tag: 'Hoạt động trải nghiệm',
    excerpt: 'Tiết mục văn nghệ sôi nổi cùng các phần quà dành cho học sinh có thành tích tốt trong chương trình.',
    cover: img(7), coverAlt: 'Trao quà cho học sinh tại chương trình trải nghiệm',
    paragraphs: [
      'Chương trình có phần biểu diễn văn nghệ của các bạn học sinh, tạo không khí vui tươi, gần gũi.',
      'Ban tổ chức và quý thầy cô trao quà, động viên các bạn học sinh tích cực tham gia và đạt kết quả tốt.',
    ],
    gallery: [[5, 'Tiết mục nhảy của các bạn học sinh'], [6, 'Học sinh biểu diễn trên sân khấu'], [14, 'Trao quà cho các bạn học sinh'], [17, 'Thầy cô trao quà cho học sinh'], [19, 'Ảnh lưu niệm sau phần trao quà']],
  },
  {
    slug: 'hoc-sinh-trang-tri-canh-mai-dao-don-tet',
    title: 'Học sinh trang trí cành mai, đào đón Tết',
    tag: 'Sinh hoạt',
    excerpt: 'Không khí rộn ràng khi các bạn học sinh cùng nhau chuẩn bị, trang trí cho chương trình trải nghiệm.',
    cover: img(20), coverAlt: 'Học sinh gắn hoa mai trang trí cành mai',
    paragraphs: [
      'Các bạn học sinh cùng nhau gắn hoa, trang trí cành mai để chuẩn bị cho chương trình, mang không khí xuân đến lớp học.',
      'Hoạt động giúp các em gắn kết, phát huy sự khéo léo và tinh thần tập thể.',
    ],
    gallery: [[21, 'Học sinh trang trí cành mai trước dãy phòng học'], [15, 'Học sinh chuẩn bị cành mai'], [16, 'Học sinh cầm bao lì xì trang trí']],
  },
  {
    slug: 'tham-quan-hoc-tap-dang-huong-tai-khu-di-tich',
    title: 'Tham quan học tập, dâng hương tại khu di tích lịch sử',
    tag: 'Giáo dục truyền thống',
    excerpt: 'Hoạt động giáo dục truyền thống giúp học sinh hiểu thêm về lịch sử và biết ơn thế hệ đi trước.',
    cover: img(22), coverAlt: 'Học sinh dâng hương tại khu di tích lịch sử',
    paragraphs: [
      'Học sinh tham gia chuyến tham quan học tập, dâng hương tưởng nhớ các anh hùng, liệt sĩ tại khu di tích lịch sử.',
      'Chuyến đi là dịp để các em hiểu thêm về lịch sử dân tộc, bồi đắp lòng biết ơn và tinh thần trách nhiệm với quê hương, đất nước.',
    ],
    gallery: [[25, 'Học sinh thắp hương tưởng niệm'], [30, 'Học sinh chụp ảnh lưu niệm tại khu di tích'], [35, 'Học sinh trước tượng đài'], [23, 'Học sinh nghe giới thiệu tại bảo tàng'], [33, 'Các bạn học sinh tại khu trưng bày'], [38, 'Ảnh lưu niệm của học sinh']],
  },
  {
    slug: 'tham-quan-bao-tang-lich-su',
    title: 'Tham quan bảo tàng lịch sử',
    tag: 'Giáo dục truyền thống',
    excerpt: 'Học sinh được tìm hiểu hiện vật, hình ảnh lịch sử qua các khu trưng bày của bảo tàng.',
    cover: img(28), coverAlt: 'Khu trưng bày hình ảnh, tư liệu lịch sử trong bảo tàng',
    paragraphs: [
      'Trong chuyến tham quan, học sinh được tìm hiểu các hiện vật, tư liệu và hình ảnh lịch sử qua nhiều khu trưng bày.',
      'Hoạt động giúp việc học lịch sử trở nên sinh động, gần gũi và để lại nhiều ấn tượng cho các em.',
    ],
    gallery: [[32, 'Khu tái hiện cuộc sống thời kháng chiến'], [37, 'Khu trưng bày tư liệu, hình ảnh'], [41, 'Hiện vật được trưng bày trong bảo tàng'], [39, 'Hiện vật và bảng giới thiệu']],
  },
  {
    slug: 'trai-nghiem-song-nuoc-ren-luyen-ky-nang',
    title: 'Trải nghiệm sông nước, rèn luyện kỹ năng',
    tag: 'Hoạt động trải nghiệm',
    excerpt: 'Chuyến trải nghiệm giúp học sinh rèn luyện thể chất, tinh thần đồng đội và kỹ năng sống.',
    cover: img(24), coverAlt: 'Học sinh trải nghiệm chèo thuyền trên sông',
    paragraphs: [
      'Học sinh được tham gia các hoạt động ngoài trời như chèo thuyền, vận động và các trò chơi tập thể giữa không gian sông nước.',
      'Qua đó, các em rèn luyện sức khỏe, tinh thần đồng đội và kỹ năng sinh hoạt tập thể.',
    ],
    gallery: [[31, 'Học sinh tham gia hoạt động dưới nước'], [29, 'Học sinh trải nghiệm bên bờ sông'], [34, 'Học sinh tham gia trò chơi tập thể'], [26, 'Học sinh sinh hoạt ngoài trời']],
  },
  {
    slug: 'phu-huynh-hoc-sinh-tham-du-chuong-trinh-tai-truong',
    title: 'Phụ huynh và học sinh tham dự chương trình tại trường',
    tag: 'Sinh hoạt',
    excerpt: 'Đông đảo phụ huynh và học sinh có mặt tham dự chương trình do nhà trường tổ chức.',
    cover: img(9), coverAlt: 'Phụ huynh và học sinh tham dự chương trình dưới mái che',
    paragraphs: [
      'Chương trình thu hút đông đảo phụ huynh và học sinh đến tham dự, lắng nghe thông tin từ nhà trường.',
      'Nhà trường luôn mong muốn phối hợp chặt chẽ với phụ huynh để đồng hành cùng học sinh trong học tập và rèn luyện.',
    ],
    gallery: [[10, 'Phụ huynh và học sinh theo dõi chương trình'], [11, 'Lớp học tại trường'], [18, 'Toàn thể học sinh tại sân trường']],
  },
];

export const getNews = (slug) => NEWS_ITEMS.find((n) => n.slug === slug);
export const newsImg = img;
