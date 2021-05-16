import { useState, useRef, useEffect, MouseEvent, KeyboardEvent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import { useUser } from "contexts/User";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 700,
    },
    avatar: {
      backgroundColor: deepOrange[500],
      color: "#fff",
      display: "flex",
      alignItems: "center",
      margin: theme.spacing(1),
      cursor: "pointer",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleLogoutButton = (event: React.MouseEvent<EventTarget>) => {
    handleClose(event);
    axios
      .get("/api/logout")
      .then(() => {
        console.log("logged out");
        setUser(null);
        // history.push("/login");
      })
      .catch((e) => console.log(e));
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const classes = useStyles();
  const [user, setUser] = useUser();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            fakebook
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <div
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <Avatar className={classes.avatar}>
              {user &&
                user.firstName[0].toUpperCase() +
                  user.lastName[0].toUpperCase()}
            </Avatar>
          </div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                      <MenuItem onClick={handleLogoutButton}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
    </div>
  );
}
