import {
  Button,
  Container,
  Grid,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useState } from "react";
import Header from "./components/Header";
import FeaturedPosts from "./components/FeaturedPosts";
import { featuredPosts, sidebar } from "./data/data";
import PostCard from "./components/PostCard";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [showBtn] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
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
        <ThemeProvider theme={darkTheme}>
          <Container>
            <Header />
            <FeaturedPosts />
            <br />
            <Grid container spacing={4} sx={{ marginBottom: 6 }}>
              {featuredPosts.map((post) => (
                <PostCard post={post} key={post.title} />
              ))}
            </Grid>

            <Grid container spacing={5}>
              <Main title="From the Firehouse" />
              <Sidebar sidebarDetails={sidebar} />
            </Grid>
          </Container>
          <Footer
            title="Footer"
            description="Some random Description is added for the time"
          />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
