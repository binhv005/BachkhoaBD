import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { setPageReady } from '../ready.js';

const VISIBLE_MS = 800; // vào trang: hiện đủ để thấy logo, không đợi font/ảnh tải xong
const TRANSITION_MS = 450; // chuyển trang trong site: nhanh hơn
const FADE_MS = 400; // khớp với transition trong index.html
const IGNORE_SCROLL_MS = 250; // bỏ qua sự kiện scroll do trình duyệt/ScrollManager tự cuộn
const SCROLL_KEYS = new Set(['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'End', 'Home', ' ']);

// Màn hình chờ khi vào trang và khi chuyển trang.
// Lướt/vuốt/bấm phím cuộn trong lúc đang hiện thì vào trang luôn.
export default function Preloader() {
  const { pathname } = useLocation();
  const [phase, setPhase] = useState('show'); // show | fade | off
  const lastPath = useRef(pathname);
  const ignoreUntil = useRef(performance.now() + IGNORE_SCROLL_MS);
  const hideTimer = useRef(null);

  const dismiss = () => {
    clearTimeout(hideTimer.current);
    setPhase((p) => {
      if (p !== 'show') return p;
      setPageReady(true); // các hiệu ứng khi lướt tới (đếm số...) bắt đầu từ đây
      return 'fade';
    });
  };

  // Vào trang
  useEffect(() => {
    hideTimer.current = setTimeout(dismiss, VISIBLE_MS);
    const onUserScroll = () => dismiss();
    const onScroll = () => { if (performance.now() > ignoreUntil.current) dismiss(); };
    const onKey = (e) => { if (SCROLL_KEYS.has(e.key)) dismiss(); };
    window.addEventListener('wheel', onUserScroll, { passive: true });
    window.addEventListener('touchmove', onUserScroll, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(hideTimer.current);
      window.removeEventListener('wheel', onUserScroll);
      window.removeEventListener('touchmove', onUserScroll);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  // Chuyển sang trang khác trong site (đổi hash trong cùng trang thì không tính)
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    ignoreUntil.current = performance.now() + IGNORE_SCROLL_MS;
    setPageReady(false);
    setPhase('show');
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(dismiss, TRANSITION_MS);
  }, [pathname]);

  useEffect(() => {
    if (phase !== 'fade') return undefined;
    const t = setTimeout(() => setPhase('off'), FADE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === 'off') return null;

  return (
    <div
      className={`preloader${phase === 'fade' ? ' is-hiding' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Đang tải trang"
      aria-hidden={phase === 'fade'}
    >
      <img className="preloader-logo" src="/img/logo.png" alt="Logo Trường Trung cấp Bách Khoa Bình Dương" width="150" height="150" />
      <div className="preloader-name"><strong>BÁCH KHOA BÌNH DƯƠNG</strong><span>BINH DUONG POLYTECHNIC</span></div>
      <div className="preloader-dots" aria-hidden="true"><i /><i /><i /></div>
    </div>
  );
}
