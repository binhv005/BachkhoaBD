import { useState } from 'react';
import Icon from './Icon.jsx';
import SmartLink from './SmartLink.jsx';
import { NAV, SCHOOL } from '../data.js';

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <Icon name="phone" className="ico" />
          <span>Tư vấn Zalo: <a href={SCHOOL.zaloHref} className="accent-text">{SCHOOL.zalo}</a></span>
          <span className="sep">|</span>
          <span>Hotline tuyển sinh: <a href={SCHOOL.hotlineHref} className="accent-text">{SCHOOL.hotline}</a></span>
        </div>
        <nav className="topbar-right" aria-label="Liên kết nhanh">
          <SmartLink to="/">Trang chủ</SmartLink><span className="sep">|</span>
          <SmartLink to="/#gioi-thieu">Giới thiệu</SmartLink><span className="sep">|</span>
          <SmartLink to="/#lien-he">Liên hệ</SmartLink>
        </nav>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header" id="header">
      <div className="container header-inner">
        <SmartLink className="brand" to="/" aria-label={SCHOOL.name}>
          <img src="/img/logo.png" alt="Logo Trường Trung cấp Bách Khoa Bình Dương" width="76" height="76" />
          <span className="brand-text">
            <small>TRƯỜNG TRUNG CẤP</small>
            <strong>BÁCH KHOA BÌNH DƯƠNG</strong>
            <em>BINH DUONG POLYTECHNIC · BDP</em>
          </span>
        </SmartLink>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <nav className={`main-nav${open ? ' open' : ''}`} id="main-nav" aria-label="Menu chính">
          <ul>
            {NAV.map((item) => (
              <li key={item.label} className={item.sub ? 'has-sub' : undefined}>
                <SmartLink to={item.to} onClick={close}>{item.label}</SmartLink>
                {item.sub && (
                  <ul className="sub">
                    {item.sub.map(([label, href]) => (
                      <li key={label}><SmartLink to={href} onClick={close}>{label}</SmartLink></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
