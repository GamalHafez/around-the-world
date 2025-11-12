import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountryPage, ErrorPage, HomePage, LayoutPage } from "@/pages";
import "./index.scss";

//access

let router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":country",
        element: <CountryPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
