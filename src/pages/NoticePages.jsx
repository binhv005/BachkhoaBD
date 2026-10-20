import { useParams } from 'react-router-dom';
import ConsultBox from '../components/ConsultBox.jsx';
import PageHero from '../components/PageHero.jsx';
import SmartLink from '../components/SmartLink.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { HEALTH_COURSES, MAJORS } from '../content/programs.js';
import { NOTICES_DATA, getNotice } from '../content/notices.js';
import { NEWS_ITEMS } from '../content/news.js';
import { SCHOOL } from '../data.js';
import NotFound from './NotFound.jsx';

const majorByName = (name) => MAJORS.find((m) => m.name === name);

export function NoticeList() {
  usePageTitle('Thông báo');
  return (
    <>
      <PageHero title="Thông báo" subtitle="Thông báo tuyển sinh và các chương trình đào tạo của nhà trường." crumbs={[['Thông báo']]} />
      <section className="section">
        <div className="container">
          <ul className="notice-rows">
            {NOTICES_DATA.map((n) => (
              <li key={n.slug}>
                <SmartLink className="notice-row" to={`/thong-bao/${n.slug}`}>
                  <img src={n.images[0][0]} alt={n.images[0][1]} loading="lazy" />
                  <span className="notice-row-body">
                    <span className="news-badges"><span className="badge badge-soft">Thông báo</span>{n.isNew && <span className="badge">Mới</span>}</span>
                    <strong>{n.title}</strong>
                    <span>{n.summary}</span>
                    <span className="more">[Xem chi tiết]</span>
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Section({ section }) {
  const items = section.items === 'HEALTH_COURSES' ? HEALTH_COURSES : section.items;
  return (
    <div className="notice-section">
      <h2>{section.heading}</h2>
      {section.type === 'text' && <p>{section.text}</p>}
      {section.type === 'list' && (
        <ol className={`${section.numbered ? 'list-numbered' : 'list-bullets'}${section.cols === 2 ? ' two-cols' : ''}`}>
          {items.map((it) => {
            const major = section.links === 'majors' ? majorByName(it) : null;
            return <li key={it}>{major ? <SmartLink to={`/dao-tao/${major.slug}`}>{it}</SmartLink> : it}</li>;
          })}
        </ol>
      )}
    </div>
  );
}

export function NoticeDetail() {
  const { slug } = useParams();
  const notice = getNotice(slug);
  usePageTitle(notice?.title);
  if (!notice) return <NotFound what="thông báo" />;

  const others = NOTICES_DATA.filter((n) => n.slug !== slug);
  const c = notice.contact || {};

  return (
    <>
      <PageHero title={notice.title} crumbs={[['Thông báo', '/thong-bao'], ['Chi tiết']]} />
      <section className="section">
        <div className="container detail-layout">
          <article className="article">
            <div className="news-badges"><span className="badge badge-soft">Thông báo</span>{notice.isNew && <span className="badge">Mới</span>}</div>
            <p className="lead">{notice.intro}</p>
            <div className="flyers">
              {notice.images.map(([src, alt]) => <figure key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}
            </div>
            {notice.sections.map((sec) => <Section key={sec.heading} section={sec} />)}
            {notice.major && (
              <p><SmartLink className="btn btn-outline" to={`/dao-tao/${notice.major}`}>Xem chi tiết ngành đào tạo</SmartLink></p>
            )}
            <div className="contact-card">
              <h2>Thông tin liên hệ</h2>
              <ul>
                {c.address && <li><b>Địa chỉ:</b> {SCHOOL.address}</li>}
                {c.phone && <li><b>Điện thoại:</b> {SCHOOL.phone}</li>}
                {c.hotline && <li><b>Hotline:</b> <a href={SCHOOL.hotlineHref}>{SCHOOL.hotline}</a></li>}
                {c.zalo && <li><b>Zalo:</b> <a href={SCHOOL.zaloHref} target="_blank" rel="noopener noreferrer">{SCHOOL.zalo}</a> ({SCHOOL.contactPerson})</li>}
                {c.website && <li><b>Website:</b> <a href={SCHOOL.websiteHref} target="_blank" rel="noopener noreferrer">{SCHOOL.website}</a></li>}
              </ul>
            </div>
          </article>
          <aside className="side">
            <ConsultBox major={notice.major ? MAJORS.find((m) => m.slug === notice.major)?.name : undefined} />
            <div className="side-card">
              <h3>Thông báo khác</h3>
              <ul className="side-list">
                {others.map((n) => <li key={n.slug}><SmartLink to={`/thong-bao/${n.slug}`}>{n.short}</SmartLink></li>)}
              </ul>
            </div>
            <div className="side-card">
              <h3>Tin tức mới</h3>
              <ul className="side-list">
                {NEWS_ITEMS.slice(0, 3).map((n) => <li key={n.slug}><SmartLink to={`/tin-tuc/${n.slug}`}>{n.title}</SmartLink></li>)}
              </ul>
              <SmartLink className="more" to="/tin-tuc">[Xem tất cả tin tức]</SmartLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
