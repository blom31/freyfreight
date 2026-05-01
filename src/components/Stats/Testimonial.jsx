export function Testimonial({ quote, authorName, authorRole, authorImg }) {
  return (
    <div className="testimonial">
      <span className="material-symbols-outlined testimonial__quote-icon">
        format_quote
      </span>
      <p className="testimonial__text">"{quote}"</p>
      <div className="testimonial__author">
        <div className="testimonial__author-img">
          <img alt={authorName} src={authorImg} />
        </div>
        <div>
          <div className="testimonial__author-name">{authorName}</div>
          <div className="testimonial__author-role">{authorRole}</div>
        </div>
      </div>
    </div>
  );
}
