import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageReady } from '../ready.js';

const STEP_MS = 90; // độ trễ giữa các phần tử con trong cùng một nhóm [data-stagger]

// Hiệu ứng xuất hiện khi lướt tới: phần tử có data-reveal="up|down|left|right|zoom|pop|fade" sẽ hiện ra
// (thêm class "in") lần đầu vào khung nhìn. Nhóm có data-stagger thì các phần tử con hiện lần lượt.
// Đợi màn hình chờ tắt; tắt hẳn khi người dùng bật "giảm chuyển động" (CSS không ẩn gì cả).
export default function RevealManager() {
  const { pathname } = useLocation();
  const ready = usePageReady();

  useEffect(() => {
    if (!ready) return undefined;
    const root = document.documentElement;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.remove('reveal-js');
      return undefined;
    }

    document.querySelectorAll('[data-stagger]').forEach((group) => {
      const kind = group.dataset.stagger || 'up';
      Array.from(group.children).forEach((child, i) => {
        if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', kind);
        child.style.setProperty('--d', `${i * STEP_MS}ms`);
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    root.classList.add('reveal-js');
    document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, ready]);

  return null;
}
