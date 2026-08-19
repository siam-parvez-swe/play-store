import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout.jsx'
import Apps from './pages/apps/Apps.jsx'
import InstallApps from './pages/installApps/InstallApps.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        element: <h1>Home Page</h1>
      },
      {
        path:"/apps",
        Component: Apps
      },
      {
        path: "/installApps",
        Component: InstallApps
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
