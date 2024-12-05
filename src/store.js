import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./features/habits/habitsSlice";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("habitsState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("habitsState", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

// Configure the store
const preloadedState = loadState(); 
const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
  preloadedState, 
});


store.subscribe(() => {
  saveState({
    habits: store.getState().habits,
  });
});

export default store;
