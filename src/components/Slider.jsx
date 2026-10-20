import { Children, useCallback, useEffect, useRef, useState } from 'react';

// Slider dùng chung: mũi tên, chấm trang (tùy chọn), tự chạy, tạm dừng khi rê chuột/focus, vuốt trên cảm ứng.
// Mỗi phần tử con là một "ô" và tự quy định độ rộng bằng CSS (flex-basis).
export default function Slider({ children, autoplay = 0, dots = false, className = '', label }) {
  const items = Children.toArray(children);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const touchStart = useRef(null);
  const [index, setIndex] = useState(0);
  const [cellWidth, setCellWidth] = useState(0);
  const [visible, setVisible] = useState(1);
  const [paused, setPaused] = useState(false);

  const last = Math.max(0, items.length - visible);
  const safeIndex = Math.min(index, last);

  useEffect(() => {
    const measure = () => {
      const cell = trackRef.current?.firstElementChild;
      const viewport = viewportRef.current;
      if (!cell || !viewport) return;
      setCellWidth(cell.offsetWidth);
      setVisible(Math.max(1, Math.round(viewport.offsetWidth / cell.offsetWidth)));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [items.length]);

  const next = useCallback(() => setIndex((i) => (Math.min(i, last) >= last ? 0 : Math.min(i, last) + 1)), [last]);
  const prev = useCallback(() => setIndex((i) => (Math.min(i, last) <= 0 ? last : Math.min(i, last) - 1)), [last]);

  useEffect(() => {
    if (!autoplay || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(next, autoplay);
    return () => clearInterval(timer);
  }, [autoplay, paused, next]);

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStart.current = null;
  };

  return (
    <div
      className={`slider ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
      onTouchEnd={onTouchEnd}
    >
      <div className="slider-viewport" ref={viewportRef}>
        <div className="slider-track" ref={trackRef} style={{ transform: `translateX(-${safeIndex * cellWidth}px)` }}>
          {items}
        </div>
      </div>
      {last > 0 && (
        <>
          <button type="button" className="slider-btn prev" aria-label="Trước" onClick={prev}>‹</button>
          <button type="button" className="slider-btn next" aria-label="Sau" onClick={next}>›</button>
        </>
      )}
      {dots && (
        <div className="slider-dots" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-label={`Slide ${i + 1}`}
              aria-selected={i === safeIndex}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
