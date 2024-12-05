import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    const timer = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar gradient-bg shadow-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="brand">✨ Habit Tracker</h2>
        <div className="current-time">{currentTime}</div>
      </div>
    </nav>
  );
}

export default Navbar;
