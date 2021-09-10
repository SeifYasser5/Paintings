import { createReducer } from "@reduxjs/toolkit";
import Painting from "../../services/models/Painting";
import { addPaintingAction } from "./actions";

export interface PaintingState {
  paintings: Painting[];
}

const initialState: PaintingState = {
  paintings: [],
};

export default createReducer(initialState, (builder) =>
  builder.addCase(addPaintingAction, (state, action) => {
    state.paintings.push(action.payload.painting);
  })
);
