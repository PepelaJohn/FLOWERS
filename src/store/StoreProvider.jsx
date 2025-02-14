import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducers } from "../reducers/index";
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare({ serializableCheck: false });
  },
});

{
  /* 
  
  const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

  
  */
}



const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
