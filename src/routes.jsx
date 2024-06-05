import RootLayout from "./pages/RootLayout/RootLayout.jsx";
import App from "./App.jsx";
import Purchased from "./pages/Purchased/Purchased.jsx";
import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Errors/Error.jsx";
const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <App /> },
      { path: "purchased", element: <Purchased /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
