import { Divider, IconButton, Toolbar, Typography, Badge } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        {/* <Typography sx={{flexGrow:1}} variant="h6"> */}
        <Typography className={classes.title} variant="h6">
          Blogging Website
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />

      <Toolbar className={classes.tagline}>
        Express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
