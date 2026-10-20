import SmartLink from './SmartLink.jsx';

// Thẻ tin tức dùng ở trang chủ và trang danh sách. `item` cần: to, img, alt, title, text, (isNew), (tag).
export default function NewsCard({ item, featured }) {
  return (
    <article className={`news${featured ? ' news-featured' : ''}`}>
      <SmartLink to={item.to} className="news-img"><img src={item.img} alt={item.alt} loading="lazy" /></SmartLink>
      <div className="news-body">
        <div className="news-badges">
          {item.isNew && <span className="badge">Mới</span>}
          {item.tag && <span className="badge badge-soft">{item.tag}</span>}
        </div>
        <h3><SmartLink to={item.to}>{item.title}</SmartLink></h3>
        <p>{item.text}</p>
        <SmartLink className="more" to={item.to}>[Đọc thêm]</SmartLink>
      </div>
    </article>
  );
}
