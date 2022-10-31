import React from "react";
import "./StatsItem.css";

export default function StatsItem({ icon, title, content }) {
  return (
    <div className="stats-item">
      <div className="stats-item-icon">
        <img src={icon} alt="icon" />
      </div>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
}
