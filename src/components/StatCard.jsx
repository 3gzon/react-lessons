import React from "react";

function StatCard({title, stat, value, color}) {
    return (
        <div className={`stat-card ${color}`}>
            <p>{title}</p>
            <h2>{value}</h2>
            <p>{stat}</p>
      </div>
  )
}

export default StatCard;
