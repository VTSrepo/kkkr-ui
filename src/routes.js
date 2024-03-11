import { useRoutes } from "react-router-dom";


import Login from "./components/login/login";
import Home from './components/home/home';
import CreateProfile from './components/home/createprofile';

export default function Router() {
    let element = useRoutes([
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path:'/create',
            element:<CreateProfile/>
        }

    ]);

    return element;
}
