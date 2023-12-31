import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import "../src/style/global.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { BrowserRouter } from "react-router-dom";
import WrapperRoutes from "./router";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const antdConfig = {
  locale: zhCN,
};
root.render(
  <React.StrictMode>
    <ConfigProvider {...antdConfig}>
      <BrowserRouter>
        <Provider store={store}>
          <WrapperRoutes></WrapperRoutes>
        </Provider>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
