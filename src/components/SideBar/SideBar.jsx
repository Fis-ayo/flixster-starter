import { FaBars } from "react-icons/fa";

export default function SideBar(){
    return (
        <>
        <FaBars />
        <li>
        <a><Home /></a>
        <a><Favorites /></a>
        <a><Watched /></a>
        </li>
        </>
    )

}