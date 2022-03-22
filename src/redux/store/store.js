import { configureStore } from "@reduxjs/toolkit";
import { reportes } from "../reducer/reportes";

export const store = configureStore({
  reducer: {
    reportes,
  },
});
