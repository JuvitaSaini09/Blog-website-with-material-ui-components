import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

const Sidebar = ({ sidebarDetails }) => {
  const { title, description, archives, social } = sidebarDetails;
  return (
    <Grid item xs={12} md={4} sx={{ marginTop: 3 }}>
      {/* adding padding to the paper */}

      <Paper elevation={0} sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="">{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom marginTop={3}>
        Archives
      </Typography>

      {archives.map((archive) => (
        <Link
          href={archive.url}
          variant="body1"
          key={archive.title}
          display="block"
        >
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom marginTop={3}>
        Social
      </Typography>
      {social.map((network) => (
        <Link href="#" variant="body1" key={network.name} display="block">
          <Grid container spacing={1} direction="row" alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
