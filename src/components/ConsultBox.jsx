import SmartLink from './SmartLink.jsx';
import { SCHOOL } from '../data.js';

// Khung "Cần tư vấn?" ở cột bên các trang chi tiết. `major` (tùy chọn) được chọn sẵn trong form đăng ký.
export default function ConsultBox({ major, title = 'Cần tư vấn tuyển sinh?' }) {
  return (
    <div className="consult-box">
      <h3>{title}</h3>
      <p>Liên hệ nhà trường để được tư vấn ngành học, hồ sơ và thời gian nhập học.</p>
      <ul>
        <li><b>Hotline:</b> <a href={SCHOOL.hotlineHref}>{SCHOOL.hotline}</a></li>
        <li><b>Zalo:</b> <a href={SCHOOL.zaloHref} target="_blank" rel="noopener noreferrer">{SCHOOL.zalo}</a> ({SCHOOL.contactPerson})</li>
      </ul>
      <SmartLink className="btn btn-accent" to="/#dang-ky" state={major ? { major } : undefined}>
        {major ? 'Đăng ký ngành này' : 'Đăng ký tuyển sinh'}
      </SmartLink>
    </div>
  );
}
