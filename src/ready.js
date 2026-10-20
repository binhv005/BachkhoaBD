import { useSyncExternalStore } from 'react';

// Trạng thái "trang đã sẵn sàng" dùng chung: Preloader bật khi màn hình chờ vừa tắt,
// các hiệu ứng khi lướt tới (đếm số...) đợi tín hiệu này để không chạy khuất sau màn hình chờ.
let ready = false;
const subscribers = new Set();

export function setPageReady(value) {
  if (ready === value) return;
  ready = value;
  subscribers.forEach((notify) => notify());
}

export function usePageReady() {
  return useSyncExternalStore(
    (notify) => {
      subscribers.add(notify);
      return () => subscribers.delete(notify);
    },
    () => ready,
  );
}
