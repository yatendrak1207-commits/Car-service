import { Link } from "react-router-dom";
import { useState } from "react";
import "./Notifications.css";

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "booking",
      icon: "📅",
      title: "Service Booking Confirmed",
      message:
        "Your General Car Service booking has been confirmed for 28 Sep 2026 at 10:00 AM.",
      time: "10 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "service",
      icon: "🔧",
      title: "Service Completed",
      message:
        "Your Oil Change service for Maruti Suzuki Swift has been completed successfully.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "reminder",
      icon: "⏰",
      title: "Service Reminder",
      message:
        "Your Hyundai Creta is due for regular servicing. Book your next service today.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 4,
      type: "payment",
      icon: "💳",
      title: "Payment Successful",
      message:
        "Payment of ₹999 for General Car Service was completed successfully.",
      time: "18 Sep 2026",
      read: true,
    },
    {
      id: 5,
      type: "offer",
      icon: "🎁",
      title: "Special Service Offer",
      message:
        "Get 15% off on your next car detailing service. Offer valid for a limited time.",
      time: "15 Sep 2026",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  return (
    <div className="notifications-page">
      {/* Sidebar */}
      <aside className="notifications-sidebar">
        <div className="notifications-logo">AutoCare</div>

        <nav className="notifications-menu">
          <Link to="/dashboard" className="notifications-menu-item">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/my-cars" className="notifications-menu-item">
            <span>🚗</span>
            My Cars
          </Link>

          <Link to="/bookings" className="notifications-menu-item">
            <span>📅</span>
            My Bookings
          </Link>

          <Link to="/service-history" className="notifications-menu-item">
            <span>🔧</span>
            Service History
          </Link>

          <Link to="/notifications" className="notifications-menu-item active">
            <span>🔔</span>
            Notifications
            {unreadCount > 0 && (
              <b className="notification-count">{unreadCount}</b>
            )}
          </Link>

          <Link to="/profile" className="notifications-menu-item">
            <span>👤</span>
            Profile
          </Link>
        </nav>

        <div className="notifications-sidebar-bottom">
          <Link to="/" className="notifications-menu-item">
            <span>←</span>
            Back to Website
          </Link>

          <button className="notifications-logout">
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="notifications-main">
        {/* Header */}
        <header className="notifications-header">
          <div>
            <h1>Notifications</h1>

            <p>
              Stay updated with your bookings, services and account activity.
            </p>
          </div>

          {unreadCount > 0 && (
            <button className="mark-all-btn" onClick={markAllAsRead}>
              Mark all as read
            </button>
          )}
        </header>

        {/* Notification Summary */}
        <div className="notifications-summary">
          <div className="notification-summary-card">
            <span>Total Notifications</span>
            <strong>{notifications.length}</strong>
          </div>

          <div className="notification-summary-card">
            <span>Unread</span>
            <strong>{unreadCount}</strong>
          </div>

          <div className="notification-summary-card">
            <span>Status</span>
            <strong>{unreadCount === 0 ? "All Read" : "New Updates"}</strong>
          </div>
        </div>

        {/* Notification List */}
        <section className="notifications-section">
          <div className="notifications-section-header">
            <div>
              <h2>Recent Notifications</h2>
              <p>Your latest updates and alerts</p>
            </div>
          </div>

          <div className="notifications-list">
            {notifications.length === 0 ? (
              <div className="notifications-empty">
                <div>🔔</div>
                <h3>No notifications</h3>
                <p>You're all caught up. New updates will appear here.</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`notification-card ${
                    !notification.read ? "unread" : ""
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className={`notification-icon ${notification.type}`}>
                    {notification.icon}
                  </div>

                  <div className="notification-content">
                    <div className="notification-title-row">
                      <h3>{notification.title}</h3>

                      {!notification.read && (
                        <span className="new-badge">New</span>
                      )}
                    </div>

                    <p>{notification.message}</p>

                    <span className="notification-time">
                      {notification.time}
                    </span>
                  </div>

                  <button
                    className="delete-notification"
                    title="Delete notification"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notification.id);
                    }}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Notifications;
