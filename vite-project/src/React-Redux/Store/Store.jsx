import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, PERSIST } from "redux-persist";
import  storage  from "redux-persist/lib/storage";
import productReducer from '../ProductState/ProductState'

const persistconfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistconfig, productReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

