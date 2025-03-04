import { useRoutes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { routes } from "./router/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AutoLogIn from "./components/auth/components/AutoLogIn";
import AuthProvider from "./components/auth/components/AuthProvider";
import { SocketProvider } from "./components/chat/components/SocketProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      dark: "#000",
      contrastText: "#000",
    },
    secondary: {
      main: "#f5f5f5",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 12,
  },
});

theme.typography.h1 = {
  fontSize: 50,
  fontWeight: 600,

  [theme.breakpoints.down("sm")]: {
    fontSize: 30,
  },
};

theme.typography.h2 = {
  fontSize: 30,
  fontWeight: 200,

  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
};

const queryClient = new QueryClient();

export default function App() {
  const element = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SocketProvider>
            <AutoLogIn />
            {element}
          </SocketProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};