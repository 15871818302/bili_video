// 组合子模块
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count";

export default configureStore({
  // 注册子模块
  reducer: {
    counter: counterReducer,
  },
});
