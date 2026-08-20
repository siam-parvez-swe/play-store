import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homepage/HomePage";
import Apps from "../pages/apps/Apps";
import InstallApps from "../pages/installApps/InstallApps";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AppDetails from "../pages/appDetails/AppDetails";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => fetch('/data.json')
      },
      {
        path: "/apps",
        Component: Apps
      },
      {
        path: "/apps/:id",
        Component: AppDetails
      },
      {
        path: "/installApps",
        Component: InstallApps
      },
      {
        path: "/dashboard",
        Component: Dashboard
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  }
])