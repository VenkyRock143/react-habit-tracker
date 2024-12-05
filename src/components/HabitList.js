import React from "react";
import "./HabitList.css";

function HabitList({ habits, onDeleteHabit }) {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div key={habit.id} className="habit-item">
          <div className="habit-details">
            <h3>{habit.name}</h3>
            <p>Frequency: {habit.frequency}</p>
            <p>Streak: {habit.streak}</p>
            <p>Last Updated: {habit.time}</p>
          </div>
          <div className="habit-actions">
            <button onClick={() => onDeleteHabit(habit.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="none"
                  stroke="#3498db"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitList;
