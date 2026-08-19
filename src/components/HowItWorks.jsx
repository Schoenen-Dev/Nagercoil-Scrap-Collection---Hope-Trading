const STEPS = [
  {
    num: "01",
    title: "Contact Us",
    text: "Call or WhatsApp us with details about the scrap you want to sell or collect.",
  },
  {
    num: "02",
    title: "Share Scrap Details",
    text: "Tell us the type of scrap and approximate quantity available.",
  },
  {
    num: "03",
    title: "Schedule Collection",
    text: "Choose a convenient collection time based on availability.",
  },
  {
    num: "04",
    title: "Scrap Pickup",
    text: "Our team collects the scrap from your location.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">

        <div className="how-it-works__head">
          <span className="eyebrow">SIMPLE PROCESS</span>

          <h2>How Our Scrap Collection Works</h2>

          <p>
            Selling your scrap is simple. Just follow these four easy steps.
          </p>
        </div>

        <div className="how-it-works__steps">
          {STEPS.map(({ num, title, text }, index) => (
            <div className="how-step" key={num}>

              <div className="how-step__number">
                {num}
              </div>

              <div className="how-step__content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

              {index < STEPS.length - 1 && (
                <span className="how-step__arrow" aria-hidden="true">
                  →
                </span>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}