import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  // 初始数据
  initialState: {
    count: 1,
  },
  // store 名称
  name: "counter",
  // 修改数据方法
  reducers: {
    add(state) {
      state.count++;
    },
  },
});

const { add } = counter.actions;
const counterReducer = counter.reducer;

export { add };

export default counterReducer;
