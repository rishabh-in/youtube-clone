import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from "./App";
import HomePage from "./Pages/HomePage";
import PlayerContainer from "./Components/VideoPage/PlayerContainer";
import WatchPage from "./Pages/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/watch", 
        element: <WatchPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);