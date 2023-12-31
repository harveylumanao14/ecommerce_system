import {createBrowserRouter, Link, Navigate} from "react-router-dom";
import  Login  from "./views/Login";
import  Signup  from "./views/Signup";
import  Users  from "./views/Users";
import  Notfound  from "./views/Notfound";
import { DefaultLayout } from "./components/DefaultLayout";
import { GuestLayout } from "./components/guestLayout";
import Dashboard from "./views/Dashboard";
import UserForm from "./views/UserForm";
import Home from "./views/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate"/>
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },

    {
        path: '*',
        element: <Notfound />
    }
    
])

export default router;