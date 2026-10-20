import { useEffect } from 'react';

const SUFFIX = 'Trường Trung cấp Bách Khoa Bình Dương';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : `${SUFFIX} | Tuyển sinh lớp 10 kết hợp học Trung cấp chính quy`;
  }, [title]);
}
