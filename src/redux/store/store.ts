// src/store/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { createNoopStorage } from "./storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/cart/cartSlice"
import authReducer from '../features/auth/authSlice';

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
   cart: cartReducer,
   auth: authReducer
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
