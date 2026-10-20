import PageHero from '../components/PageHero.jsx';
import SmartLink from '../components/SmartLink.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound({ what = 'trang' }) {
  usePageTitle('Không tìm thấy');
  return (
    <>
      <PageHero title="Không tìm thấy nội dung" crumbs={[['Không tìm thấy']]} />
      <section className="section">
        <div className="container not-found">
          <p>Rất tiếc, {what} bạn tìm không tồn tại hoặc đã được di chuyển.</p>
          <p className="not-found-links">
            <SmartLink className="btn btn-primary" to="/">Về trang chủ</SmartLink>
            <SmartLink className="btn btn-outline" to="/tin-tuc">Tin tức</SmartLink>
            <SmartLink className="btn btn-outline" to="/dao-tao">Ngành đào tạo</SmartLink>
          </p>
        </div>
      </section>
    </>
  );
}
