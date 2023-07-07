import SidebarItems from "./sidebar/sidebarItems"
import items from "./sidebar/data/SidebarData"
import imageFilename from '../assets/logo/sidebar_logo4.png'

export default function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebar-logo">
            <img src={imageFilename} alt="Image description" />
        </div>  
            { items.map((item, index) => <SidebarItems key={index} item={item}/>) }
        </div>
    )
}