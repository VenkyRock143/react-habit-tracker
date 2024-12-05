import React, { useState } from "react";
import "./CreateHabitForm.css";

function CreateHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  const [habitFrequency, setHabitFrequency] = useState("Daily");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName) return;
    onAddHabit({ name: habitName, frequency: habitFrequency });
    setHabitName("");
    setHabitFrequency("Daily");
  };

  return (
    <form className="create-habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        required
      />
      <select
        value={habitFrequency}
        onChange={(e) => setHabitFrequency(e.target.value)}
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
      </select>
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default CreateHabitForm;
