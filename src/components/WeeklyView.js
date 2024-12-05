import React from "react";
import "./WeeklyView.css";

function WeeklyView({ habits, onToggleStatus }) {
  return (
    <div className="weekly-view">
      <h2>Weekly View</h2>
      <div className="week-table">
        {habits.map((habit) => (
          <div key={habit.id}>
            <h3>{habit.name}</h3>
            <table>
              <thead>
                <tr>
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <th key={index}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {habit.weeklyStatus.map((status, index) => (
                    <td key={index}>
                      <button
                        className={status === "Done" ? "done" : ""}
                        onClick={() => onToggleStatus(habit.id, index)}
                      >
                        {status === "Done" ? "✔" : "❌"}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <div className="habit-streak">
              <p>Streak: {habit.streak}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyView;
