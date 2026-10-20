import { PARTNERS } from '../content/partners.js';

// Ô giữ chỗ chỉ để xem bố cục khi chạy `npm run dev`; không bao giờ xuất hiện trên bản build.
const PLACEHOLDERS = Array.from({ length: 8 }, (_, i) => ({ name: `Đơn vị đồng hành ${i + 1}`, placeholder: true }));

const MIN_PER_HALF = 8; // mỗi nửa băng chuyền phải đủ dài để lấp đầy chiều ngang màn hình
const SECONDS_PER_LOGO = 3.2; // tốc độ trượt: càng nhiều logo thì chạy càng lâu một vòng, vận tốc không đổi

function Logo({ partner, clone }) {
  const body = partner.placeholder ? (
    <span className="partner-logo partner-placeholder" aria-hidden="true">LOGO</span>
  ) : (
    <img className="partner-logo" src={partner.logo} alt={clone ? '' : partner.name} loading="lazy" />
  );
  const inner = (<>{body}<span className="partner-name">{partner.name}</span></>);
  return (
    <figure className="partner" aria-hidden={clone || undefined}>
      {partner.href && !partner.placeholder
        ? <a href={partner.href} target="_blank" rel="noopener noreferrer" title={partner.name} tabIndex={clone ? -1 : undefined}>{inner}</a>
        : inner}
    </figure>
  );
}

// "Các đơn vị đồng hành": băng chuyền logo tự trượt ngang vô hạn (không có nút điều khiển).
// Danh sách được lặp hai lần giống hệt nhau và dịch chuyển đúng một nửa chiều dài => vòng lặp liền mạch.
export default function Partners() {
  const list = PARTNERS.length ? PARTNERS : (import.meta.env.DEV ? PLACEHOLDERS : []);
  if (!list.length) return null;

  const half = Array.from({ length: Math.ceil(MIN_PER_HALF / list.length) }).flatMap(() => list);

  return (
    <section className="section partners-section" id="doi-tac">
      <div className="container" data-reveal="up">
        <h2 className="section-title section-title-bar">
          <span className="title-row"><span className="title-ico" aria-hidden="true" />Các đơn vị đồng hành cùng BDP</span>
        </h2>
        <div className="marquee" role="group" aria-label="Các đơn vị đồng hành" style={{ '--marquee-duration': `${half.length * SECONDS_PER_LOGO}s` }}>
          <div className="marquee-track">
            {half.map((p, i) => <Logo partner={p} key={`a-${i}`} />)}
            {half.map((p, i) => <Logo partner={p} key={`b-${i}`} clone />)}
          </div>
        </div>
        {!PARTNERS.length && (
          <p className="dev-note">Chế độ chạy thử: đang hiện ô giữ chỗ. Thêm logo thật vào <code>src/content/partners.js</code>; khi danh sách trống, mục này tự ẩn trên bản chạy thật.</p>
        )}
      </div>
    </section>
  );
}
