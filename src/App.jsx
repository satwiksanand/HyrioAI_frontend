import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import VerifyEmail from "./Pages/VerifyEmail";
import VerifyMobile from "./Pages/VerifyMobile";
import CreateJob from "./Pages/CreateJob";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // This can be publicly accessible
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/verifyEmail",
        element: <VerifyEmail />,
      },
      {
        path: "/verifyMobile",
        element: <VerifyMobile />,
      },
      // Protected routes should be inside PrivateRoute now
      {
        element: <PrivateRoute />, // Protect these routes
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/createJob",
            element: <CreateJob />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
