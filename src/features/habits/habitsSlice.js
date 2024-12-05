// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   habits: [],
// };

// const habitsSlice = createSlice({
//   name: "habits",
//   initialState,
//   reducers: {
//     addHabit: (state, action) => {
//       state.habits.push(action.payload);
//     },
//     deleteHabit: (state, action) => {
//       state.habits = state.habits.filter((habit) => habit.id !== action.payload);
//     },
//     toggleHabitStatus: (state, action) => {
//       const { habitId, dayIndex } = action.payload;
//       const habit = state.habits.find((habit) => habit.id === habitId);
//       if (habit) {
//         habit.weeklyStatus[dayIndex] = habit.weeklyStatus[dayIndex] === "Done" ? "" : "Done";
//         habit.streak = habit.weeklyStatus.filter((status) => status === "Done").length;
//         habit.time = new Date().toLocaleTimeString(); // Update time when toggled
//       }
//     },
//   },
// });

// export const { addHabit, deleteHabit, toggleHabitStatus } = habitsSlice.actions;

// export default habitsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  habits: [], // Default empty state
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter((habit) => habit.id !== action.payload);
    },
    toggleHabitStatus: (state, action) => {
      const { habitId, dayIndex } = action.payload;
      const habit = state.habits.find((habit) => habit.id === habitId);
      if (habit) {
        habit.weeklyStatus[dayIndex] = habit.weeklyStatus[dayIndex] === "Done" ? "" : "Done";
        habit.streak = habit.weeklyStatus.filter((status) => status === "Done").length;
        habit.time = new Date().toLocaleTimeString(); // Update time when toggled
      }
    },
  },
});

export const { addHabit, deleteHabit, toggleHabitStatus } = habitsSlice.actions;

export default habitsSlice.reducer;
