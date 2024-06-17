import { createBrowserRouter } from "react-router-dom";
import Home from "~/page/home";
import Explore from "~/page/explore";
import Notifications from "~/page/notifications";
import NotFound from "~/page/not-found";
import MainLayout from "~/layouts/main/index.jsx";
import Messages from "~/page/messages/index.jsx";
import Lists from "~/page/lists/index.jsx";
import Bookmarks from "~/page/bookmarks/index.jsx";
import Profile from "~/page/profile/index.jsx";

const routes = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '*',
                element: <NotFound/>
            },
            {
                index: true,
                element: <Home />
            },
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: 'messages',
                element: <Messages />
            },
            {
                path: 'lists',
                element: <Lists />
            },
            {
                path: 'bookmarks',
                element: <Bookmarks />
            },
            {
                path: 'profile',
                element: <Profile />
            }
        ]
    }
])

export default routes