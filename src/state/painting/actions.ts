import { createAction } from "@reduxjs/toolkit";
import Painting from "../../services/models/Painting";

export const addPaintingAction = createAction<{ painting: Painting }>(
  "painting/addPaintingAction"
);
