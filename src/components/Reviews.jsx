import { reviews } from "../data/reviews.js";


export default function Reviews() {
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our Customers Say</h2>
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid--3">
            {reviews.map((r, i) => (
              <div className="card review-card" key={i}>
                <div className="review-card__stars" aria-hidden="true">★★★★★</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="review-card__author">
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="reviews-empty">
            <p>Customer reviews coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
