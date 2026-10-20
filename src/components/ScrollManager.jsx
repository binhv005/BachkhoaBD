import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Khôi phục hành vi cuộn của trang thường cho ứng dụng một-trang:
// đổi trang thì về đầu trang, link dạng '/#id' thì cuộn tới đúng mục (kể cả khi mục đó vừa mới render).
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const lastPath = useRef(pathname);

  useEffect(() => {
    const changedPage = lastPath.current !== pathname;
    lastPath.current = pathname;

    if (!hash) {
      if (changedPage || key !== 'default') window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer;
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: changedPage ? 'instant' : 'smooth' });
      else if (tries++ < 20) timer = setTimeout(scrollToTarget, 50);
    };
    scrollToTarget();
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}
