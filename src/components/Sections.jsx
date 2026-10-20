import Icon from './Icon.jsx';
import NewsCard from './NewsCard.jsx';
import Slider from './Slider.jsx';
import SmartLink from './SmartLink.jsx';
import {
  BENEFITS, GALLERY, NEWS, NEWS_FEATURED, NOTICES, NOTICE_FEATURED, PROGRAMS, WHY_BDP,
} from '../data.js';

function SectionTitle({ children, left }) {
  return (
    <h2 className={`section-title${left ? ' left' : ''}`}>
      <span className="title-ico" aria-hidden="true" />{children}
    </h2>
  );
}

export function Admission() {
  return (
    <section className="section" id="tuyen-sinh">
      <div className="container">
        <SectionTitle>Thông tin tuyển sinh</SectionTitle>
        <div className="admission">
          <div className="admission-img">
            <img src="/img/p42.jpg" alt="Tờ rơi tuyển sinh lớp 10 kết hợp học Trung cấp chính quy tại Dĩ An" loading="lazy" />
            <span className="admission-tag">HỌC VĂN HÓA &amp; HỌC NGHỀ</span>
          </div>
          <div className="admission-body">
            <p className="kicker">BDP · TUYỂN SINH LỚP 10</p>
            <h3>HỌC LỚP 10<br />KẾT HỢP TRUNG CẤP CHÍNH QUY</h3>
            <p className="lead">
              Học sinh vừa hoàn thành chương trình phổ thông, vừa được đào tạo nghề tại Dĩ An; ra trường có bằng THPT và
              bằng Trung cấp chính quy.
            </p>
            <div className="benefits">
              {BENEFITS.map((b) => (
                <article className="benefit" key={b.title}>
                  <Icon name={b.icon} />
                  <div><h4>{b.title}</h4><p>{b.text}</p></div>
                </article>
              ))}
            </div>
            <a className="btn btn-primary" href="#dang-ky">Đăng ký ngay</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section section-tint" id="gioi-thieu">
      <div className="container">
        <SectionTitle>Giới thiệu nhà trường</SectionTitle>
        <p className="section-desc">
          Trường Trung cấp Bách Khoa Bình Dương (BDP – Binh Duong Polytechnic) đào tạo trung cấp chính quy, tuyển sinh lớp
          10 kết hợp học nghề và các chương trình bồi dưỡng, cập nhật kiến thức cho học viên.
        </p>
        <div className="about">
          <div className="about-photos">
            <img src="/img/p03.jpg" alt="Cán bộ, giáo viên nhà trường trong một chương trình tư vấn hướng nghiệp" loading="lazy" />
            <img src="/img/p11.jpg" alt="Lớp học tại trường" loading="lazy" />
          </div>
          <div className="about-body" id="vi-sao">
            <h3>Vì sao chọn BDP?</h3>
            <ul className="checks">
              {WHY_BDP.map(([bold, rest]) => (
                <li key={bold}><b>{bold}</b>{rest}</li>
              ))}
            </ul>
            <a className="btn btn-primary" href="#lien-he">Liên hệ tư vấn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <section className="section" id="dao-tao">
      <div className="container">
        <SectionTitle>Các chương trình đào tạo</SectionTitle>
        <p className="section-desc">
          Nhà trường tuyển sinh Trung cấp chính quy cho học sinh tốt nghiệp THCS, THPT, Trung cấp, Cao đẳng, Đại học ngành
          khác; có cơ hội liên thông Cao đẳng, Đại học trên toàn quốc.
        </p>
        <div className="programs" id="nganh">
          {PROGRAMS.map((p) => (
            <article className="program" key={p.head}>
              <SmartLink className="program-head" to={p.to}>{p.head}</SmartLink>
              <SmartLink to={p.to}><img src={p.img} alt={p.alt} loading="lazy" /></SmartLink>
              <div className="program-tag">{p.tag}</div>
              <ul>{p.items.map((it) => <li key={it.name}><SmartLink to={it.to}>{it.name}</SmartLink></li>)}</ul>
            </article>
          ))}
        </div>
        <p className="section-more"><SmartLink className="btn btn-outline" to="/dao-tao">Xem tất cả ngành đào tạo</SmartLink></p>
      </div>
    </section>
  );
}

export function NewsAndNotices() {
  return (
    <section className="section section-tint" id="tin-tuc">
      <div className="container news-wrap">
        <div className="news-col">
          <SectionTitle left>Tin tức &amp; Sự kiện</SectionTitle>
          <NewsCard item={NEWS_FEATURED} featured />
          <div className="news-grid">
            {NEWS.map((n) => <NewsCard item={n} key={n.slug} />)}
          </div>
          <p className="section-more left"><SmartLink className="btn btn-outline" to="/tin-tuc">Xem tất cả tin tức</SmartLink></p>
        </div>
        <aside className="notice-col" id="thong-bao">
          <SectionTitle left>Thông báo</SectionTitle>
          <article className="notice notice-featured">
            <SmartLink to={NOTICE_FEATURED.to}><img src={NOTICE_FEATURED.img} alt={NOTICE_FEATURED.alt} loading="lazy" /></SmartLink>
            <div className="notice-meta"><span>Thông báo</span><span className="badge">Mới</span></div>
            <h3><SmartLink to={NOTICE_FEATURED.to}>{NOTICE_FEATURED.title}</SmartLink></h3>
          </article>
          <ul className="notice-list">
            {NOTICES.map((n) => (
              <li key={n.to}>
                <span className="notice-meta"><span>Thông báo</span></span>
                <SmartLink to={n.to}>{n.title}</SmartLink>
              </li>
            ))}
          </ul>
          <p className="section-more left"><SmartLink className="btn btn-outline small" to="/thong-bao">Xem tất cả thông báo</SmartLink></p>
        </aside>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section" id="hoat-dong">
      <div className="container">
        <SectionTitle>Hình ảnh hoạt động của học sinh</SectionTitle>
        <Slider className="gallery" autoplay={3000} label="Hình ảnh hoạt động của học sinh">
          {GALLERY.map((g) => (
            <figure className="gal" key={g.src}><img src={g.src} alt={g.alt} loading="lazy" /></figure>
          ))}
        </Slider>
      </div>
    </section>
  );
}
