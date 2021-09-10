import { useCallback } from "react";
import { useHistory } from "react-router";
import Painting from "../../services/models/Painting";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { addPaintingAction } from "./actions";

export const usePaintings = (): Painting[] => {
  return useAppSelector((state: RootState) => state.painting.paintings);
};

export const useAddPainting = (): ((painting: Painting) => void) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  return useCallback(
    (painting: Painting) => {
      dispatch(addPaintingAction({ painting }));
      history.push("/paintings");
    },
    [history, dispatch]
  );
};
