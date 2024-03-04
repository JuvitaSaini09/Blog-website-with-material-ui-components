import {
  Button,
  Divider,
  IconButton,
  Toolbar,
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import "./App.css";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
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

function App() {
  const [showBtn] = useState(false);
  const classes = useStyles();
  return (
    <>
      {showBtn ? (
        <>
          <h1>Material UI Practice</h1>
          <h2>Button with variant="contained || outlined || text"</h2>
          <Button color="secondary" variant="contained">
            Variant="contained"
          </Button>

          <Button color="error" variant="outlined">
            Variant="outlined"
          </Button>

          <Button color="success" variant="text">
            Variant="text"
          </Button>
          <h2>Size="small" || "medium" || "large"</h2>
          <Button color="info" variant="contained" size="small">
            small
          </Button>

          <Button color="info" variant="contained" size="medium">
            medium
          </Button>

          <Button color="info" variant="contained" size="large">
            large
          </Button>

          <h2>startIcon="" attribut</h2>
          <Button color="info" variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>

          <Button
            color="primary"
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>

          <Button
            color="error"
            variant="contained"
            startIcon={<ReportGmailerrorredIcon />}
          >
            Error
          </Button>
          <Stack direction="row" spacing={2}>
            <Button
              color="error"
              variant="contained"
              startIcon={<ReportGmailerrorredIcon />}
            >
              Error1
            </Button>
            <Button
              color="error"
              variant="contained"
              startIcon={<ReportGmailerrorredIcon />}
            >
              Error2
            </Button>
            <Button
              color="error"
              variant="contained"
              startIcon={<ReportGmailerrorredIcon />}
              disableRipple //on lick test ripple
            >
              Error3
            </Button>

            <input type="file" className="type" />
          </Stack>
        </>
      ) : (
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
      )}
    </>
  );
}

export default App;
