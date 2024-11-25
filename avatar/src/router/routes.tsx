import type { RouteObject } from "react-router-dom";
import Layout from "../components/layout";
import RegisterView from "../views/registerView";

export const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <RegisterView /> },
      ],
    },
  ];