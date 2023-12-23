import Avatar from "@mui/material/Avatar";
import AppDrawer from "../Drawer/Drawer";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <AppDrawer></AppDrawer>
      <Avatar>V</Avatar>
    </div>
  );
}
