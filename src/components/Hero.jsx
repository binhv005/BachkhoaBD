import CountUp from './CountUp.jsx';
import Icon from './Icon.jsx';
import Slider from './Slider.jsx';
import { BANNERS, STATS } from '../data.js';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" role="img" aria-label="Học sinh Trường Trung cấp Bách Khoa Bình Dương" />
      <div className="container hero-inner">
        <p className="hero-eyebrow">BDP • Binh Duong Polytechnic</p>
        <h1>HỌC NGHỀ – CÓ VIỆC LÀM – VỮNG TƯƠNG LAI</h1>
        <p className="hero-sub">
          Tuyển sinh lớp 10 kết hợp học Trung cấp chính quy tại Dĩ An. Học văn hóa phổ thông song song với học nghề,
          cam kết 100% học sinh ra trường có việc làm.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#gioi-thieu">Khám phá BDP <span aria-hidden="true">↗</span></a>
          <a className="btn btn-outline" href="#dang-ky">Đăng ký tuyển sinh</a>
        </div>
      </div>
      <div className="container stats" role="list">
        {STATS.map((s) => (
          <div className="stat" role="listitem" key={s.label}>
            <Icon name={s.icon} />
            <b aria-label={s.value}><CountUp value={s.value} /></b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BannerSlider() {
  return (
    <section className="banner-section" aria-label="Thông tin tuyển sinh nổi bật">
      <div className="container">
        <Slider className="banner-slider" autoplay={5000} dots label="Thông tin tuyển sinh nổi bật">
          {BANNERS.map((b, i) => (
            <figure className="slide" key={b.src}>
              <img src={b.src} alt={b.alt} loading={i === 0 ? 'eager' : 'lazy'} />
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  );
}
