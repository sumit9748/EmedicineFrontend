import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import UpdateProfile from "./pages/updateProfile/UpdateProfile";
import AddMedicine from "./pages/AddMedicine/AddMedicine";
import Cart from "./pages/cart/Cart";
import { useSelector } from "react-redux";
import NavbarMain from "./pages/navbar/NavbarMain";
import Footer from "./pages/footer/Footer";
import Admin_Home from "./pages/admin/admin_home/Admin_Home";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  const Layout = () => {
    return (
      <div>
        <NavbarMain />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    } else return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/updateProfile",
          element: <UpdateProfile />,
        },
        {
          path: "/addMedicine",
          element: <AddMedicine />,
        },
        { path: "/cart", element: <Cart /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    { path: "/admin_dasboard", element: <Admin_Home /> },
  ]);
  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
