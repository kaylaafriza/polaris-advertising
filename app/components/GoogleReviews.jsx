
"use client";

import { useState } from "react";

const reviews = [
  {
    name: "ONI Prasetia",
    initial: "O",
    time: "4 months ago",
    message: "Terimakasih atas pelayanannya CS Eca",
    color: "#4285F4",
  },
  {
    name: "Faizal Abdur",
    initial: "F",
    time: "4 months ago",
    message: "Pelayanan sangat baik dan hasil cetaknya memuaskan.",
    color: "#34A853",
  },
  {
    name: "Pelanggan Polaris",
    initial: "P",
    time: "3 months ago",
    message: "Hasil cetak bagus, pengerjaan cepat dan ramah.",
    color: "#EA4335",
  },
  {
    name: "Customer Polaris",
    initial: "C",
    time: "2 months ago",
    message: "Sangat puas dengan hasil desain dan printingnya.",
    color: "#FBBC05",
  },
  {
    name: "Pelanggan",
    initial: "P",
    time: "1 month ago",
    message: "Pelayanan memuaskan dan hasil cetaknya berkualitas.",
    color: "#8E44AD",
  },
];

export default function GoogleReviews() {
  const [active, setActive] = useState(0);

  const nextReview = () => {
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActive((prev) =>
      (prev - 1 + reviews.length) % reviews.length
    );
  };

  const visibleReviews = [
    reviews[active],
    reviews[(active + 1) % reviews.length],
  ];

  return (
    <section className="google-reviews">
      <div className="reviews-container">

        {/* RATING GOOGLE */}
        <div className="reviews-summary">

          <div className="reviews-logo">
            P
          </div>

          <h2>Polaris Advertising Kepanjen</h2>

          <div className="rating-number">
            <strong>4.9</strong>
            <span>★★★★★</span>
          </div>

          <p>Based on 584 reviews</p>

          <div className="powered-google">
            powered by{" "}
            <strong className="google-text">Google</strong>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Polaris+Advertising+Kepanjen"
            target="_blank"
            rel="noopener noreferrer"
            className="review-button"
          >
            Review us on Google
          </a>

        </div>

        {/* KARTU ULASAN */}
        <div className="reviews-slider">

          <button
            className="review-arrow prev"
            onClick={prevReview}
            aria-label="Ulasan sebelumnya"
          >
            &#10094;
          </button>

          <div className="review-cards">

            {visibleReviews.map((review, index) => (
              <div className="review-card" key={`${active}-${index}`}>

                <div className="review-header">

                  <div
                    className="review-avatar"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.initial}
                  </div>

                  <div className="review-user">
                    <h3>{review.name}</h3>
                    <p>{review.time}</p>
                  </div>

                  <span className="google-icon">
                    G
                  </span>

                </div>

                <div className="review-stars">
                  ★★★★★
                </div>

                <p className="review-message">
                  {review.message}
                </p>

              </div>
            ))}

          </div>

          <button
            className="review-arrow next"
            onClick={nextReview}
            aria-label="Ulasan berikutnya"
          >
            &#10095;
          </button>

          {/* INDICATOR */}
          <div className="review-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Ulasan ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
