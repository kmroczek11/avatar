import type { RouteObject } from "react-router-dom";
import Layout from "../components/layout";
import HomeView from "../views/homeView";

export const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomeView /> },
      ],
    },
  ];