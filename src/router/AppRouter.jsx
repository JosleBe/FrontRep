import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../components/auth/LoginPage";
import ProfilePage from "../components/userPages/ProfilePage"
import Layout from "../layouts/Layout";
import Campaigns from "../components/campaignsPage/Campaigns";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: (
      <Layout>
        <ProfilePage />
      </Layout>
    ), // Con sidebar
  },
  {
    path: "/campaigns",
    element: (
      <Layout>
        <Campaigns/>
      </Layout>
      )
  }

]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
