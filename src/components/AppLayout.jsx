import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-center font-bold text-3xl">Company Job Posting</h1>
        {!currentUser && (
          <div>
            <Link
              to="/signin"
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md m-2"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md m-2"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <hr />

      <div className="min-h-screen flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
