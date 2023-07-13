import { useRoutes } from "react-router-dom";
import App from "../App";
import RouteConfig from "./type";
import React from "react";
import HomePage from "../views/Home/Index";
import LoginPage from "../views/login";

const routerList: RouteConfig[] = [
  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/home",
    element: <HomePage></HomePage>,
  },
];

const WrapperRoutes = () => {
  let element: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null;
  // @ts-ignore
  element = useRoutes(routerList);
  return element;
};

export default WrapperRoutes;
