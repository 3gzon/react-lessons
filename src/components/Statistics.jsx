import React from "react";
import StatCard from "./StatCard";

function Statistics() {
    return (
        <div className="statistics">
            <StatCard
                title="Total students"
                value={30}
                color="blue"
                stat={30}
            />
            <StatCard
                title="Total students"
                value={30}
                color="green"
                stat={30}
            />
            
            <StatCard
                title="Total students"
                value={30}
                color="orange"
                stat={30}
            />
      </div>
  )
}

export default Statistics;
