import { Navigate, useLocation } from "react-router-dom";
import { Role } from "../../../generated/graphql";
import { useAuth } from "./AuthProvider";

interface ProtectedProps {
  allowedRoles: Role[];
  children: React.ReactElement;
}

export default function Protected(props: ProtectedProps) {
  const { allowedRoles, children } = props;
  const { user } = useAuth();
  const location = useLocation();

  return user?.roles.find((role) => allowedRoles?.includes(role)) ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
