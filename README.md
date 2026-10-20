# Website Trường Trung cấp Bách Khoa Bình Dương (React + Vite)

## Chạy dự án
Mở PowerShell trong thư mục này:

```powershell
# (Tùy chọn) giữ cache npm và file tạm trên ổ D thay vì ổ C
$env:npm_config_cache = "$PWD\.npm-cache"; $env:TEMP = "$PWD\.tmp"; $env:TMP = "$PWD\.tmp"

npm install        # lần đầu (đã cài sẵn thì bỏ qua)
npm run dev        # chạy thử tại http://localhost:5173
npm run build      # build ra thư mục dist/
npm run preview    # xem thử bản build
```

## Các trang
| Đường dẫn | Nội dung |
|---|---|
| `/` | Trang chủ |
| `/tin-tuc`, `/tin-tuc/<slug>` | Danh sách tin (lọc theo chuyên mục) và chi tiết bài viết |
| `/thong-bao`, `/thong-bao/<slug>` | Danh sách thông báo và chi tiết |
| `/dao-tao`, `/dao-tao/<slug>` | Danh sách 12 ngành (theo nhóm) và chi tiết từng ngành |

Site dùng đường dẫn thật (BrowserRouter). Khi đưa lên hosting, cấu hình **chuyển mọi đường dẫn về `index.html`**
(Netlify: file `_redirects` với dòng `/* /index.html 200`; Vercel: rewrites; Nginx: `try_files $uri /index.html;`).

## Sửa nội dung
- `src/data.js` – thông tin liên hệ, menu, số liệu trang chủ, ảnh banner/thư viện.
- `src/content/news.js` – **tin tức** (mỗi bài: slug, tiêu đề, ảnh, đoạn văn, thư viện ảnh).
- `src/content/notices.js` – **thông báo** (chép từ tờ rơi tuyển sinh).
- `src/content/programs.js` – **ngành đào tạo** (giới thiệu, nội dung học, cơ hội việc làm).
- `src/content/partners.js` – **các đơn vị đồng hành** (logo vào `public/img/partners/`). Danh sách trống thì mục này tự ẩn trên bản build.
- `src/styles/style.css` – giao diện (màu: 4 biến đầu file).
- `public/img/` – logo và ảnh.

## Form đăng ký
Chưa có nơi nhận dữ liệu. Mặc định form mở Zalo và sao chép sẵn nội dung. Để gửi thẳng về email/server:
copy `.env.example` thành `.env` và điền `VITE_FORM_ENDPOINT=<địa chỉ nhận POST JSON>`.

## Lưu ý trước khi đăng chính thức
- **Tin tức** trong `news.js` là nội dung tạm viết theo ảnh (chưa có ngày, địa điểm): cần thay bằng tin thật.
- **Ngành đào tạo**: đối tượng, quyền lợi lấy từ tờ rơi; phần "giới thiệu ngành / nội dung học / cơ hội việc làm" là mô tả chung, cần nhà trường rà soát. Thời gian đào tạo, học phí, chỉ tiêu chưa có dữ liệu nên đang ghi "liên hệ nhà trường".
