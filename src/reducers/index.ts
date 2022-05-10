import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appReducer from "./app";
import healthReducer from "./health";

const store = configureStore({
  reducer: {
    app: appReducer,
    health: healthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<RootDispatch>();

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, useAppDispatch, useAppSelector };
