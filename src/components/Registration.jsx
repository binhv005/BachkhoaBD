import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LEVELS, MAJOR_NAMES, SCHOOL } from '../data.js';

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';
const EMPTY = { name: '', phone: '', major: '', level: '', note: '' };
const PHONE_RE = /^(0|\+84)\d{9,10}$/;

export default function Registration() {
  const { state } = useLocation();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });

  // Bấm "Đăng ký ngành này" ở trang ngành đào tạo: tự chọn sẵn ngành trong form
  useEffect(() => {
    if (state?.major) setValues((v) => ({ ...v, major: state.major }));
  }, [state]);

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const phone = values.phone.replace(/[\s.-]/g, '');
    const nextErrors = { name: !values.name.trim(), phone: !PHONE_RE.test(phone) };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone) {
      setStatus({ type: 'err', text: 'Vui lòng nhập họ tên và số điện thoại hợp lệ.' });
      return;
    }
    const data = { ...values, name: values.name.trim(), phone, note: values.note.trim() };

    if (FORM_ENDPOINT) {
      setStatus({ type: '', text: 'Đang gửi...' });
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(res.status);
        setValues(EMPTY);
        setStatus({ type: 'ok', text: 'Đã gửi đăng ký. Nhà trường sẽ liên hệ với bạn sớm nhất.' });
      } catch {
        setStatus({ type: 'err', text: `Chưa gửi được. Vui lòng gọi hotline ${SCHOOL.hotline} hoặc nhắn Zalo ${SCHOOL.zalo}.` });
      }
      return;
    }

    const text = [
      'ĐĂNG KÝ TUYỂN SINH - Trường Trung cấp Bách Khoa Bình Dương',
      `Họ tên: ${data.name}`,
      `SĐT: ${data.phone}`,
      `Ngành quan tâm: ${data.major || '(chưa chọn)'}`,
      `Trình độ: ${data.level || '(chưa chọn)'}`,
      data.note && `Ghi chú: ${data.note}`,
    ].filter(Boolean).join('\n');
    navigator.clipboard?.writeText(text).catch(() => {});
    window.open(SCHOOL.zaloHref, '_blank', 'noopener');
    setStatus({ type: 'ok', text: 'Đã mở Zalo tư vấn. Nội dung đăng ký đã được sao chép – hãy dán vào khung chat để gửi cho nhà trường.' });
  };

  return (
    <section className="section section-primary" id="dang-ky">
      <div className="container reg">
        <div className="reg-info">
          <h2>Đăng ký tuyển sinh</h2>
          <p>Để lại thông tin, nhà trường sẽ liên hệ tư vấn cho bạn. Bạn cũng có thể gọi hotline hoặc nhắn Zalo để được hỗ trợ nhanh nhất.</p>
          <ul className="contact-list">
            <li><b>Hotline tuyển sinh:</b> <a href={SCHOOL.hotlineHref}>{SCHOOL.hotline}</a></li>
            <li><b>Zalo:</b> <a href={SCHOOL.zaloHref} target="_blank" rel="noopener noreferrer">{SCHOOL.zalo}</a> ({SCHOOL.contactPerson})</li>
            <li><b>Website:</b> <a href={SCHOOL.websiteHref} target="_blank" rel="noopener noreferrer">{SCHOOL.website}</a></li>
          </ul>
        </div>
        <form className="reg-form" onSubmit={submit} noValidate>
          <div className="field">
            <label htmlFor="f-name">Họ và tên *</label>
            <input id="f-name" name="name" type="text" autoComplete="name" value={values.name} onChange={update} className={errors.name ? 'invalid' : ''} />
          </div>
          <div className="field">
            <label htmlFor="f-phone">Số điện thoại *</label>
            <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="VD: 0373 810 236" value={values.phone} onChange={update} className={errors.phone ? 'invalid' : ''} />
          </div>
          <div className="field">
            <label htmlFor="f-major">Ngành quan tâm</label>
            <select id="f-major" name="major" value={values.major} onChange={update}>
              <option value="">Chọn ngành</option>
              <option>Lớp 10 kết hợp học Trung cấp chính quy</option>
              {MAJOR_NAMES.map((m) => <option key={m}>{m}</option>)}
              <option>Khóa bồi dưỡng khối ngành sức khỏe</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-level">Trình độ hiện tại</label>
            <select id="f-level" name="level" value={values.level} onChange={update}>
              <option value="">Chọn trình độ</option>
              {LEVELS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="f-note">Ghi chú</label>
            <textarea id="f-note" name="note" rows="3" value={values.note} onChange={update} />
          </div>
          <button className="btn btn-accent full" type="submit">Gửi đăng ký</button>
          <p className={`form-msg full ${status.type}`} role="status" aria-live="polite">{status.text}</p>
        </form>
      </div>
    </section>
  );
}
