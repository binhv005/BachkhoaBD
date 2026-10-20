import SmartLink from './SmartLink.jsx';

// Banner đầu các trang con: tiêu đề + đường dẫn (breadcrumb).
export default function PageHero({ title, subtitle, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Đường dẫn">
          <SmartLink to="/">Trang chủ</SmartLink>
          {crumbs.map(([label, to]) => (
            <span key={label}>
              <i aria-hidden="true">›</i>
              {to ? <SmartLink to={to}>{label}</SmartLink> : <span aria-current="page">{label}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
