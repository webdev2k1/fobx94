import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../Data/trendData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>

      {TrendData.map((trend, id) => (
        <div className="trend">
          <span>
            <b>#{trend.name}</b>
          </span>
          <span> {trend.shares} shares</span>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
