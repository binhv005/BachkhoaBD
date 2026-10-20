import { useParams } from 'react-router-dom';
import ConsultBox from '../components/ConsultBox.jsx';
import PageHero from '../components/PageHero.jsx';
import SmartLink from '../components/SmartLink.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { COMBO_FLYER, GROUPS, HEALTH_COURSES, MAJORS, getGroup, getMajor, majorsOfGroup } from '../content/programs.js';
import NotFound from './NotFound.jsx';

const HEALTH_NOTICE = '/thong-bao/boi-duong-kien-thuc-khoi-nganh-suc-khoe';
// Các ngành có thông tin đối tượng tuyển sinh trực tiếp trên tờ rơi của nhà trường
const HAS_AUDIENCE = new Set(['cong-nghe-thong-tin', 'duoc', 'dieu-duong', 'tieng-trung-quoc']);

// Tên hiển thị của nhóm trên trang danh sách: "Khối ngành Sức khỏe", "Khối ngành Ngoại ngữ"...
const deptTitle = (name) => `Khối ngành ${name.replace(/^Khối\s+/, '')}`;

function DeptCard({ id, title, img, imgAlt, items }) {
  return (
    <article className="dept-card" id={id}>
      <div className="dept-media"><img src={img} alt={imgAlt} loading="lazy" /></div>
      <div className="dept-body">
        <h2>{title}</h2>
        <ul className="dept-list">
          {items.map((it) => <li key={it.name}><SmartLink to={it.to}>{it.name}</SmartLink></li>)}
        </ul>
      </div>
    </article>
  );
}

export function ProgramList() {
  usePageTitle('Các khối ngành đào tạo');
  return (
    <section className="dept-page">
      <div className="container">
        <nav className="dept-crumbs" aria-label="Đường dẫn">
          <SmartLink to="/">Trang chủ</SmartLink><i aria-hidden="true">›</i><span aria-current="page">Ngành đào tạo</span>
        </nav>
        <h1>Các khối ngành đào tạo</h1>
        <p className="dept-sub">12 ngành Trung cấp chính quy, kết hợp học lớp 10 – 11 – 12 và liên thông Cao đẳng, Đại học.</p>

        <div className="dept-cards">
          {GROUPS.map((g) => (
            <DeptCard
              key={g.id}
              id={g.id}
              title={deptTitle(g.name)}
              img={g.img}
              imgAlt={g.imgAlt}
              items={majorsOfGroup(g.id).map((m) => ({ name: m.name, to: `/dao-tao/${m.slug}` }))}
            />
          ))}
          <DeptCard
            id="boi-duong"
            title="Đào tạo liên tục khối ngành sức khỏe"
            img="/img/p08.jpg"
            imgAlt="Tờ rơi đào tạo liên tục, bồi dưỡng kiến thức khối ngành sức khỏe"
            items={HEALTH_COURSES.map((name) => ({ name, to: HEALTH_NOTICE }))}
          />
        </div>

        <div className="cta-band">
          <div><h3>Chưa chọn được ngành phù hợp?</h3><p>Nhà trường tư vấn miễn phí để bạn chọn ngành và hình thức học phù hợp.</p></div>
          <SmartLink className="btn btn-accent" to="/#dang-ky">Đăng ký tư vấn</SmartLink>
        </div>
      </div>
    </section>
  );
}

export function ProgramDetail() {
  const { slug } = useParams();
  const major = getMajor(slug);
  usePageTitle(major ? `Ngành ${major.name}` : undefined);
  if (!major) return <NotFound what="ngành đào tạo" />;

  const group = getGroup(major.group);
  const same = majorsOfGroup(major.group).filter((m) => m.slug !== slug);
  const flyer = major.flyer || COMBO_FLYER;
  const flyerAlt = major.flyer ? `Tờ rơi tuyển sinh ngành ${major.name}` : 'Tờ rơi tuyển sinh lớp 10 kết hợp học Trung cấp chính quy tại Dĩ An (12 ngành đào tạo)';

  return (
    <>
      <PageHero title={`Ngành ${major.name}`} subtitle={major.summary} crumbs={[['Ngành đào tạo', '/dao-tao'], [group.name, `/dao-tao#${group.id}`], [major.name]]} />
      <section className="section">
        <div className="container detail-layout">
          <article className="article">
            <figure className="article-cover flyer-cover"><img src={flyer} alt={flyerAlt} /></figure>

            <h2>Giới thiệu ngành</h2>
            <p>{major.about}</p>

            <h2>Nội dung đào tạo</h2>
            <ul className="list-bullets">{major.learn.map((x) => <li key={x}>{x}</li>)}</ul>

            <h2>Cơ hội việc làm</h2>
            <p>Sau khi tốt nghiệp, người học có thể làm việc ở các vị trí như:</p>
            <ul className="list-bullets">{major.jobs.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="note">Nhà trường cam kết 100% học sinh ra trường có việc làm. Danh sách vị trí ở trên mang tính tham khảo.</p>

            <h2>Hình thức tuyển sinh</h2>
            <div className="admission-forms">
              <div>
                <h3>Lớp 10 kết hợp học Trung cấp chính quy</h3>
                <ul className="list-bullets">
                  <li>Học chương trình lớp 10 – 11 – 12 do Trung tâm giáo dục thường xuyên đào tạo và được dự thi tốt nghiệp THPT quốc gia.</li>
                  <li>Được hỗ trợ 100% học phí học nghề.</li>
                  <li>Nhận bằng tốt nghiệp THPT và Trung cấp chính quy.</li>
                  <li>Được liên thông Cao đẳng, Đại học trên toàn quốc.</li>
                </ul>
              </div>
              {HAS_AUDIENCE.has(slug) && (
                <div>
                  <h3>Tuyển sinh Trung cấp chính quy</h3>
                  <ul className="list-bullets">
                    <li>Tốt nghiệp THCS, THPT.</li>
                    <li>Tốt nghiệp Trung cấp, Cao đẳng, Đại học ngành khác.</li>
                    {major.flyerNote && <li>{major.flyerNote}</li>}
                  </ul>
                </div>
              )}
            </div>
            <p className="note">Thời gian đào tạo, học phí, chỉ tiêu và hồ sơ nhập học: vui lòng liên hệ nhà trường để được tư vấn cụ thể.</p>
          </article>

          <aside className="side">
            <ConsultBox major={major.name} title={`Đăng ký ngành ${major.name}`} />
            {same.length > 0 && (
              <div className="side-card">
                <h3>{group.name}</h3>
                <ul className="side-list">{same.map((m) => <li key={m.slug}><SmartLink to={`/dao-tao/${m.slug}`}>{m.name}</SmartLink></li>)}</ul>
              </div>
            )}
            <div className="side-card">
              <h3>Tất cả ngành đào tạo</h3>
              <ul className="side-list">
                {MAJORS.filter((m) => m.group !== major.group).map((m) => <li key={m.slug}><SmartLink to={`/dao-tao/${m.slug}`}>{m.name}</SmartLink></li>)}
              </ul>
              <SmartLink className="more" to="/dao-tao">[Xem tất cả]</SmartLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
