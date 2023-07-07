import { useState } from "react"
import { Link } from "react-router-dom";


export default function SidebarItems({ item }) {
    const [open, setOpen] = useState(false);

    const toogleBtn = (ev) => {
        ev.preventDefault()
        setOpen(!open)
    }
    
    if(item.title == "Logo"){
        <div className="sidebar-logo">
            
        </div>
    }else{
        if (item.childrens) {
            return (
                <div className={open ? "sidebar-item open" : "sidebar-item"}>
                    <div className="sidebar-title">
                        <span>
                            {item.icon && <i className={item.icon}></i>}
                            {item.title}
                        </span>
                        <i className="bi-chevron-double-down toogle-btn" onClick={toogleBtn}></i>
                    </div>
                    <div className="sidebar-content">
                       {item.childrens.map((child, index) => <SidebarItems key={index} item={child}/>)}
                    </div>
                </div>
            )
        } else {
            return (
                <Link to={item.path || "#"} className="sidebar-item plain">
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
                </Link>
            )
        }
    }
    
    

}