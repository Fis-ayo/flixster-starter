import "./Header.css"
import SideBar from "../SideBar/SideBar";

export default function Header() {
  return (
    <div className="header-container">
      <h1>🎞️Flixster</h1>
      <SideBar />
    </div>
  );
}
