import Avatar from "@mui/material/Avatar";
import AppDrawer from "../Drawer/Drawer";
import "./Header.css";

export default function Header({ expenseValues, setExpenseValues, Labels }) {
  return (
    <div className="header">
      <AppDrawer
        Labels={Labels}
        expenseValues={expenseValues}
        setExpenseValues={setExpenseValues}
      ></AppDrawer>
      <Avatar>V</Avatar>
    </div>
  );
}
