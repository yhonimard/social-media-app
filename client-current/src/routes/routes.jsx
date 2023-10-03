import Authorized from "@/components/authorized/Authorized";
import Unauthorized from "@/components/unauthorized/Unauthorized";
import AuthPage from "@/pages/auth";
import HomePage from "@/pages/home";
import PostDetailPage from "@/pages/postDetail";
import ProfilePage from "@/pages/profile";
import RootPage from "@/pages/root";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Unauthorized>
        <RootPage />
      </Unauthorized>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "post",
        children: [
          {
            path: ":postId",
            element: <PostDetailPage />
          }
        ]
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },
      // {
      //   path: "user",
      //   element: <ProfilePage />,
      //   children: [
      //     {
      //       path: ":userId"
      //     }
      //   ]
      // }
    ],
  },
  {
    path: "/auth",
    element: (
      <Authorized>
        <AuthPage />
      </Authorized>
    )
  }
]);

export default routes;
