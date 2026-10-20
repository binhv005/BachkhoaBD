import { useEffect } from 'react';

// Thanh tiến độ cuộn ở đầu trang + cuộn lệch (parallax) nhẹ cho ảnh nền hero.
// Cập nhật qua biến CSS --scroll (0..1) và --parallax (px), gom theo requestAnimationFrame.
export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty('--scroll', max > 0 ? String(Math.min(1, window.scrollY / max)) : '0');
      root.style.setProperty('--parallax', `${Math.min(window.scrollY, 900) * 0.18}px`);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
