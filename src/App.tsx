import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoinDetail from "./pages/CoinDetail.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <CoinDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
