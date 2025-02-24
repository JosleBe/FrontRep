import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../components/auth/LoginPage";
import ProfilePage from "../components/userPages/ProfilePage"
import Layout from "../layouts/Layout";
import ErrorPage from "../components/errorPage/ErrorPage";
import RegisterCampaign from "../components/campaignsPage/RegisterCampaign";
import EditProfie from "../components/userPages/EditProfie";
import ChatRoom from "../components/chatInbox/ChatRoom";
import CampaignMain from "../components/campaignsPage/CampaignMain";
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
       <CampaignMain />
      </Layout>
      )
  },
  {
    path: "/campaigns-register",
    element: (
      <Layout>
       <RegisterCampaign />
      </Layout>
      )
  },
  {
    path: "/editProfile",
    element: (
      <Layout>
        <EditProfie />
      </Layout>
    ), // Con sidebar
  },
  {
    path: "/chat",
    element: (
      <Layout>
        <ChatRoom />
      </Layout>
    ), // Con sidebar
  },
  {
    path :"/pageError",
    element: (
      <ErrorPage/>
    )
  }
 
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
