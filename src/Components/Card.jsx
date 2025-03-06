import React from "react";
import "./card.css";

const StatsCards = () => {
  return (
    <div className="stats-container">
      <div className="stats-card">
        <h5 className="stats-title">Total Sales</h5>
        <h3 className="stats-value">$120,784.02</h3>
        <p className="stats-change positive">
          ↑ 12.3% <span className="stats-sub">+$1,453.89 today</span>
        </p><hr></hr>
        <a href="#" className="view-report">View Report →</a>
      </div>

      <div className="stats-card">
        <h5 className="stats-title">Total Orders</h5>
        <h3 className="stats-value">28,834</h3>
        <p className="stats-change positive">
          ↑ 20.1% <span className="stats-sub">+2,676 today</span>
        </p><hr></hr>
        <a href="#" className="view-report">View Report →</a>
      </div>

      <div className="stats-card">
        <h5 className="stats-title">Visitor</h5>
        <h3 className="stats-value">18,896</h3>
        <p className="stats-change negative">
          ↓ 5.6% <span className="stats-sub">-876 today</span>
        </p><hr></hr>
        <a href="#" className="view-report">View Report →</a>
      </div>

      <div className="stats-card">
        <h5 className="stats-title">Refunded</h5>
        <h3 className="stats-value">2,876</h3>
        <p className="stats-change positive">
          ↑ 13% <span className="stats-sub">+34 today</span>
        </p><hr></hr>
        <a href="#" className="view-report">View Report →</a>
      </div>
    </div>
  );
};

export default StatsCards;
