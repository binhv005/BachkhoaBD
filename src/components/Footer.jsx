import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import SmartLink from './SmartLink.jsx';
import { SCHOOL } from '../data.js';

export function Contact() {
  return (
    <section className="contact" id="lien-he">
      <div className="container contact-grid">
        <div>
          <h3>THÔNG TIN LIÊN HỆ</h3>
          <ul>
            <li><b>Địa chỉ:</b> {SCHOOL.address}</li>
            <li><b>Điện thoại:</b> {SCHOOL.phone}</li>
            <li><b>Hotline:</b> <a href={SCHOOL.hotlineHref}>{SCHOOL.hotline}</a></li>
            <li><b>Zalo:</b> <a href={SCHOOL.zaloHref} target="_blank" rel="noopener noreferrer">{SCHOOL.zalo}</a> ({SCHOOL.contactPerson})</li>
            <li><b>Website:</b> <a href={SCHOOL.websiteHref} target="_blank" rel="noopener noreferrer">{SCHOOL.website}</a></li>
          </ul>
        </div>
        <div>
          <h3>THÔNG TIN TUYỂN SINH</h3>
          <ul className="links">
            <li><SmartLink to="/thong-bao/tuyen-sinh-lop-10-ket-hop-hoc-trung-cap-chinh-quy">Tuyển sinh lớp 10 kết hợp Trung cấp</SmartLink></li>
            <li><SmartLink to="/dao-tao">12 ngành đào tạo</SmartLink></li>
            <li><SmartLink to="/#vi-sao">Quyền lợi học sinh</SmartLink></li>
            <li><SmartLink to="/#dang-ky">Đăng ký xét tuyển</SmartLink></li>
            <li><SmartLink to="/thong-bao">Thông báo mới</SmartLink></li>
          </ul>
        </div>
        <div>
          <h3>THEO DÕI &amp; BẢN ĐỒ</h3>
          <p>
            <a className="btn btn-accent small" href={SCHOOL.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="btn btn-outline-light small" href={SCHOOL.mapsLink} target="_blank" rel="noopener noreferrer">Chỉ đường</a>
          </p>
          <iframe
            className="map"
            title="Bản đồ Trường Trung cấp Bách Khoa Bình Dương"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={SCHOOL.mapsEmbed}
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src="/img/logo.png" alt="Logo BDP" width="120" height="120" loading="lazy" />
        <div>
          <p className="footer-name">{SCHOOL.name}</p>
          <p>Binh Duong Polytechnic · BDP</p>
          <p><b>Địa chỉ:</b> {SCHOOL.address}</p>
          <p><b>Hotline:</b> {SCHOOL.hotline} · <b>Zalo:</b> {SCHOOL.zalo} ({SCHOOL.contactPerson}) · <b>Điện thoại:</b> {SCHOOL.phone}</p>
        </div>
      </div>
      <p className="copyright">© Trường Trung cấp Bách Khoa Bình Dương. Bảo lưu mọi quyền.</p>
    </footer>
  );
}

export function FloatButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside className="float" aria-label="Liên hệ nhanh">
      <a href={SCHOOL.mapsLink} target="_blank" rel="noopener noreferrer">
        <span className="fi fi-map"><Icon name="pin" /></span>Tìm đường
      </a>
      <a href={SCHOOL.zaloHref} target="_blank" rel="noopener noreferrer"><span className="fi fi-zalo">Zalo</span>Chat Zalo</a>
      <a href={SCHOOL.facebook} target="_blank" rel="noopener noreferrer"><span className="fi fi-fb">f</span>Facebook</a>
      <a href={SCHOOL.hotlineHref}><span className="fi fi-tel"><Icon name="phone" /></span>Gọi ngay</a>
      {showTop && (
        <button type="button" className="to-top" aria-label="Lên đầu trang" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>▲</button>
      )}
    </aside>
  );
}
