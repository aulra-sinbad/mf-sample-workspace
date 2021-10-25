import { productStateKey } from "@home/domain/constant";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productReducer } from "./product";

/** NOTE
 * configureStore
 * https://redux-toolkit.js.org/api/configureStore
 */
export const store = configureStore({
  reducer: {
    [productStateKey]: productReducer,
  },
  devTools: {
    name: "[SSC] MF Sample Workspace - Home",
  },
});

/** NOTE
 * https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types
 */
export type RootState = ReturnType<typeof store.getState>;

type HomeDispatch = typeof store.dispatch;

export const useHomeDispatch = () => useDispatch<HomeDispatch>();
export const useHomeSelector: TypedUseSelectorHook<RootState> = useSelector;
