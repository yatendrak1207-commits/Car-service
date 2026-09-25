import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminReviews.css";

function AdminReviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      car: "Hyundai Creta",
      rating: 5,
      review:
        "Excellent service. The mechanic was professional and the car was serviced on time.",
      date: "22 Sep 2026",
      status: "Published",
    },
    {
      id: 2,
      name: "Priya Singh",
      car: "Honda City",
      rating: 5,
      review: "Very smooth booking experience and good service quality.",
      date: "20 Sep 2026",
      status: "Published",
    },
    {
      id: 3,
      name: "Aman Sharma",
      car: "Maruti Swift",
      rating: 4,
      review: "Good service overall. Pickup and delivery were convenient.",
      date: "18 Sep 2026",
      status: "Published",
    },
    {
      id: 4,
      name: "Mohit Verma",
      car: "Tata Nexon",
      rating: 3,
      review: "Service was okay but took a little longer than expected.",
      date: "16 Sep 2026",
      status: "Pending",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const updateStatus = (id, status) => {
    setReviews((prev) =>
      prev.map((review) => (review.id === id ? { ...review, status } : review)),
    );
  };

  const filteredReviews =
    filter === "All"
      ? reviews
      : reviews.filter((review) => review.status === filter);

  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) /
    reviews.length;

  return (
    <div className="admin-reviews-page">
      <aside className="admin-reviews-sidebar">
        <div className="admin-reviews-logo">
          AutoCare
          <span>ADMIN</span>
        </div>

        <nav>
          <Link to="/admin">
            <span>▣</span>Dashboard
          </Link>

          <Link to="/admin/bookings">
            <span>📅</span>Bookings
          </Link>

          <Link to="/admin/customers">
            <span>👥</span>Customers
          </Link>

          <Link to="/admin/services">
            <span>🔧</span>Services
          </Link>

          <Link to="/admin/mechanics">
            <span>🧑‍🔧</span>Mechanics
          </Link>

          <Link to="/admin/vehicles">
            <span>🚗</span>Vehicles
          </Link>

          <Link to="/admin/reviews" className="active">
            <span>⭐</span>Reviews
          </Link>

          <Link to="/admin/roadside">
            <span>🚨</span>Roadside Requests
          </Link>
        </nav>

        <div className="admin-reviews-bottom">
          <Link to="/profile">
            <span>⚙️</span>Settings
          </Link>

          <Link to="/">
            <span>↩</span>Back to Website
          </Link>
        </div>
      </aside>

      <main className="admin-reviews-main">
        <header className="admin-reviews-header">
          <div>
            <span>REVIEW MANAGEMENT</span>
            <h1>Customer Reviews</h1>
            <p>Manage customer feedback and reviews.</p>
          </div>
        </header>

        <div className="review-stats">
          <div>
            <span>Total Reviews</span>
            <strong>{reviews.length}</strong>
          </div>

          <div>
            <span>Average Rating</span>
            <strong>★ {averageRating.toFixed(1)}</strong>
          </div>

          <div>
            <span>5 Star Reviews</span>
            <strong>
              {reviews.filter((item) => item.rating === 5).length}
            </strong>
          </div>

          <div>
            <span>Pending Reviews</span>
            <strong>
              {reviews.filter((item) => item.status === "Pending").length}
            </strong>
          </div>
        </div>

        <div className="review-filter">
          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={filter === "Published" ? "active" : ""}
            onClick={() => setFilter("Published")}
          >
            Published
          </button>

          <button
            className={filter === "Pending" ? "active" : ""}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </button>
        </div>

        <section className="reviews-admin-card">
          <div className="reviews-admin-header">
            <div>
              <h2>Customer Feedback</h2>
              <p>{filteredReviews.length} reviews</p>
            </div>
          </div>

          <div className="admin-review-list">
            {filteredReviews.map((review) => (
              <div className="admin-review-item" key={review.id}>
                <div className="admin-review-top">
                  <div className="review-customer">
                    <div className="review-avatar">{review.name.charAt(0)}</div>

                    <div>
                      <strong>{review.name}</strong>
                      <small>
                        {review.car} · {review.date}
                      </small>
                    </div>
                  </div>

                  <div className="review-right">
                    <div className="review-stars">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>

                    <span
                      className={`review-status ${review.status.toLowerCase()}`}
                    >
                      {review.status}
                    </span>
                  </div>
                </div>

                <p className="admin-review-text">"{review.review}"</p>

                <div className="admin-review-actions">
                  {review.status === "Pending" && (
                    <button
                      className="publish-review"
                      onClick={() => updateStatus(review.id, "Published")}
                    >
                      Publish
                    </button>
                  )}

                  {review.status === "Published" && (
                    <button
                      className="hide-review"
                      onClick={() => updateStatus(review.id, "Pending")}
                    >
                      Hide Review
                    </button>
                  )}

                  <button
                    className="delete-review"
                    onClick={() =>
                      setReviews((prev) =>
                        prev.filter((item) => item.id !== review.id),
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminReviews;
