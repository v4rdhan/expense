import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import "./Drawer.css";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AppDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [open, setOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenRemove = () => setRemoveOpen(true);
  const handleClose = () => setOpen(false);
  const handleRemove = () => setRemoveOpen(false)

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Add Expense"} onClick={handleOpen} />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary={"Remove Expense"}
              onClick={handleOpenRemove}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
            {" "}
            <MenuIcon></MenuIcon>
          </Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      }
      <Modal
        open={open || removeOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {open ? (
              <h3 className="center">Monthly Expense</h3>
            ) : (
              <h3 className="center">Remove Monthly Expense</h3>
            )}
            <div className="align-inputs">
              <FormControl className="month-input">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ minWidth: 120 }}
                >
                  Month
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Month"
                  // onChange={handleChange}
                >
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((val) => (
                    <MenuItem value={val} key={val}>
                      {val}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {open ? (
                <TextField
                  id="outlined-basic"
                  label="Per Month Expense"
                  variant="outlined"
                />
              ) : (
                ""
              )}
            </div>
          </Typography>
          <Stack spacing={2} direction="row" className="center">
            <Button variant="contained"> {open ? 'Add to Expense' : 'Remove Expense'}</Button>
            <Button variant="outlined" onClick={()=>{handleClose();handleRemove()}}>Cancel</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
