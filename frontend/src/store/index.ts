import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import authReducer from "./auth/authReducer";
import listingsReducer from "./listings/listingsReducer";
import imagesReducer from "./images/imagesReducer";
import ordersReducer from "./orders/ordersReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    listings:listingsReducer,
    images:imagesReducer,
    orders:ordersReducer,
    // user: user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ...(process.env.NODE_ENV !== "production" ? [logger] : [])
    ),
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
