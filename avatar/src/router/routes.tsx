import type { RouteObject } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../components/home";

export const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
  ];