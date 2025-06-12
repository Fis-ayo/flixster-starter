import "./Header.css";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [clickedMenu, setClickedMenu] = useState(false);

  const onMenuClick = () => {
    setClickedMenu(true);
  }

  return (
    <>
      <div className="header-container">
        <h1>🎞️Flixster</h1>
        <FaBars className="menu" onClick={onMenuClick} />
      </div>
      {clickedMenu && <SideBar onMenuClose={() => setClickedMenu(false)}/>}
    </>
  );
}
