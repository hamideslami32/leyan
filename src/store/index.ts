import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userSlice from "./slices/user";
// import { locationApi } from "@/apis/shared/location";

const makeStore = () => {
  return configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      // [locationApi.reducerPath]: locationApi.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(locationApi.middleware),
    devTools: true,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStore,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
