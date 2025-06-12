import { Link } from "react-router-dom";
import { FaHome, FaStar, FaEye } from "react-icons/fa";
import "./SideBar.css"

export default function SideBar({onMenuClose}) {
    return (
        <div className="menu-overlay" onClick={onMenuClose}>
            <div className="menu-container" onClick={(e) => e.stopPropagation()}>
                <span className="menu-close" onClick={onMenuClose}>&times;</span>
                <ul className="menu-detail">
                    <li>
                        <FaHome className="menu-icon" />
                        <Link to="/">   
                            Home
                        </Link>
                    </li>
                    <li>
                        <FaStar className="menu-icon" />
                        <Link to="src/pages/Favorites/Favorites.jsx"> 
                            Favorites
                        </Link>
                    </li>
                    <li>
                        <FaEye className="menu-icon" />
                        <Link to="src/pages/Watched/Watched.jsx">
                            Watched
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}