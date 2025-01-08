import type { RouteObject } from "react-router-dom";
import Layout from "../components/layout";
import HomeView from "../views/homeView";
import { Role } from "../generated/graphql";
import Protected from "../components/auth/components/Protected";
import UserView from "../views/userView";

export const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomeView /> },
        {
        path: "/ustawienia",
        element: (
          <Protected allowedRoles={[Role.User]}>
            <UserView />
          </Protected>
        ),
      },
      ],
    },
  ];