import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import paintingReducer from "./painting/reducer";

export const store = configureStore({
  reducer: {
    painting: paintingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
