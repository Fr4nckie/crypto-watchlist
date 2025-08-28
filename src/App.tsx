import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/coin/:id", element: <div>Coin details</div> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
