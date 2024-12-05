import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/NavBar";
import CreateHabitForm from "./components/CreateHabitForm";
import HabitList from "./components/HabitList";
import WeeklyView from "./components/WeeklyView";
import "./App.css";
import { addHabit, deleteHabit, toggleHabitStatus } from "./features/habits/habitsSlice";

function App() {
  const habits = useSelector((state) => state.habits.habits); // Access habits from Redux store
  const dispatch = useDispatch();

  // Add a new habit
  const handleAddHabit = (newHabit) => {
    const habitWithDefaults = {
      ...newHabit,
      id: Date.now(),
      streak: 0,
      weeklyStatus: Array(7).fill(""), // Weekly status
      time: new Date().toLocaleTimeString(), // Add current time for each habit
    };
    dispatch(addHabit(habitWithDefaults)); // Dispatch addHabit action
  };

  // Delete a habit
  const handleDeleteHabit = (id) => {
    dispatch(deleteHabit(id)); // Dispatch deleteHabit action
  };

  // Toggle status for a habit (Done/Not Done) and update streak
  const toggleWeeklyStatus = (habitId, dayIndex) => {
    dispatch(toggleHabitStatus({ habitId, dayIndex })); // Dispatch toggleHabitStatus action
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <CreateHabitForm onAddHabit={handleAddHabit} />
        <HabitList habits={habits} onDeleteHabit={handleDeleteHabit} />
        <WeeklyView habits={habits} onToggleStatus={toggleWeeklyStatus} />
      </div>
    </div>
  );
}

export default App;
