import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export function GuestLayout(){
    const {token} = useStateContext()
    if(token){
       return <Navigate to="/users" />
    }
  
    return(
        <div>
            <Outlet />
        </div>
    )
}