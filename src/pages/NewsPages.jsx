import { useParams, useSearchParams } from 'react-router-dom';
import ConsultBox from '../components/ConsultBox.jsx';
import NewsCard from '../components/NewsCard.jsx';
import PageHero from '../components/PageHero.jsx';
import SmartLink from '../components/SmartLink.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { NEWS_ITEMS, NEWS_TAGS, getNews, newsImg } from '../content/news.js';
import { NOTICES_DATA } from '../content/notices.js';
import NotFound from './NotFound.jsx';

const toCard = (n) => ({ ...n, to: `/tin-tuc/${n.slug}`, img: n.cover, alt: n.coverAlt, text: n.excerpt });

export function NewsList() {
  usePageTitle('Tin tức & Sự kiện');
  const [params, setParams] = useSearchParams();
  const tag = NEWS_TAGS.includes(params.get('chuyen-muc')) ? params.get('chuyen-muc') : '';
  const items = NEWS_ITEMS.filter((n) => !tag || n.tag === tag);
  const choose = (value) => setParams(value ? { 'chuyen-muc': value } : {}, { replace: true });

  return (
    <>
      <PageHero title="Tin tức & Sự kiện" subtitle="Hoạt động, sự kiện và những khoảnh khắc đáng nhớ của học sinh nhà trường." crumbs={[['Tin tức & Sự kiện']]} />
      <section className="section">
        <div className="container">
          <div className="chips" role="group" aria-label="Lọc theo chuyên mục">
            <button type="button" className={`chip${!tag ? ' is-active' : ''}`} aria-pressed={!tag} onClick={() => choose('')}>Tất cả ({NEWS_ITEMS.length})</button>
            {NEWS_TAGS.map((t) => (
              <button type="button" key={t} className={`chip${tag === t ? ' is-active' : ''}`} aria-pressed={tag === t} onClick={() => choose(t)}>
                {t} ({NEWS_ITEMS.filter((n) => n.tag === t).length})
              </button>
            ))}
          </div>
          {items.length ? (
            <div className="news-list-grid">{items.map((n) => <NewsCard key={n.slug} item={toCard(n)} />)}</div>
          ) : (
            <p className="empty">Chưa có bài viết trong chuyên mục này.</p>
          )}
        </div>
      </section>
    </>
  );
}

export function NewsDetail() {
  const { slug } = useParams();
  const item = getNews(slug);
  usePageTitle(item?.title);
  if (!item) return <NotFound what="bài viết" />;

  const index = NEWS_ITEMS.findIndex((n) => n.slug === slug);
  const prev = NEWS_ITEMS[index - 1];
  const next = NEWS_ITEMS[index + 1];
  const related = NEWS_ITEMS.filter((n) => n.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero title={item.title} crumbs={[['Tin tức & Sự kiện', '/tin-tuc'], [item.tag, `/tin-tuc?chuyen-muc=${encodeURIComponent(item.tag)}`]]} />
      <section className="section">
        <div className="container detail-layout">
          <article className="article">
            <div className="news-badges">
              {item.isNew && <span className="badge">Mới</span>}
              <span className="badge badge-soft">{item.tag}</span>
            </div>
            <figure className="article-cover"><img src={item.cover} alt={item.coverAlt} /></figure>
            {item.paragraphs.map((text) => <p key={text}>{text}</p>)}
            {item.gallery?.length > 0 && (
              <>
                <h2>Hình ảnh</h2>
                <div className="photo-grid">
                  {item.gallery.map(([n, alt]) => (
                    <figure key={n}><img src={newsImg(n)} alt={alt} loading="lazy" /><figcaption>{alt}</figcaption></figure>
                  ))}
                </div>
              </>
            )}
            <nav className="prev-next" aria-label="Bài viết khác">
              {prev ? <SmartLink to={`/tin-tuc/${prev.slug}`}><small>‹ Bài trước</small><span>{prev.title}</span></SmartLink> : <span />}
              {next ? <SmartLink className="next" to={`/tin-tuc/${next.slug}`}><small>Bài sau ›</small><span>{next.title}</span></SmartLink> : <span />}
            </nav>
          </article>
          <aside className="side">
            <ConsultBox />
            <div className="side-card">
              <h3>Tin liên quan</h3>
              <ul className="side-list thumbs">
                {related.map((n) => (
                  <li key={n.slug}>
                    <SmartLink to={`/tin-tuc/${n.slug}`}><img src={n.cover} alt="" loading="lazy" /><span>{n.title}</span></SmartLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="side-card">
              <h3>Thông báo mới</h3>
              <ul className="side-list">
                {NOTICES_DATA.slice(0, 3).map((n) => <li key={n.slug}><SmartLink to={`/thong-bao/${n.slug}`}>{n.short}</SmartLink></li>)}
              </ul>
              <SmartLink className="more" to="/thong-bao">[Xem tất cả thông báo]</SmartLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
