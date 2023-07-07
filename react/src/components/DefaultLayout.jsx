import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { useEffect } from "react"
import axiosClient from "../axios.client";

import Sidebar from './Sidebar';

export function DefaultLayout() {
    const { user, token, notification, setUser, setToken } = useStateContext()
    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })

    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])

    return (
        <div id="defaultLayout">
            <div className="main">
                <Sidebar />
            </div>

            {/* <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside> */}
            <div className="content">
                <header>
                    <div>
                        Online Shopping
                    </div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout"> Logout</a>
                    </div>

                </header>
                <main>
                    <Outlet />
                </main>
            </div>

            {notification &&
                <div className="notification">
                    {notification}
                </div>
            }

        </div>
    )
}