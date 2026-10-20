import { useEffect, useRef, useState } from 'react';
import { usePageReady } from '../ready.js';

const DIGITS = /(\d+)/;

// Đếm tăng dần các số trong chuỗi (vd "100%", "10-11-12") khi phần tử được lướt tới.
// Chạy một lần, đợi màn hình chờ tắt; người dùng bật "giảm chuyển động" thì hiện luôn giá trị cuối.
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const ready = usePageReady();
  const [inView, setInView] = useState(false);
  const parts = value.split(DIGITS);
  const [text, setText] = useState(() => parts.map((p) => (DIGITS.test(p) ? '0' : p)).join(''));

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) { setInView(true); return undefined; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !ready) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setText(value); return undefined; }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3; // nhanh lúc đầu, chậm dần về cuối
      setText(parts.map((p) => (DIGITS.test(p) ? String(Math.round(Number(p) * eased)) : p)).join(''));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, ready, value, duration]);

  return <span ref={ref} aria-hidden="true">{text}</span>;
}
