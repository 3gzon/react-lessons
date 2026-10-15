import React from "react";

function Header() {
    return (
        <div className="header">
            <div>
                <p className="small-title">Mini project</p>
                <h1>Student dashboard</h1>
                <p className="subtitle">
                    manage students
                </p>
            </div>
            <div className="student-count">
                <span>Students</span>
                <strong>200</strong>
            </div>
      </div>
  )
}

export default Header;
