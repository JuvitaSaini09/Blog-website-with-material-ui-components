import {
  CardActionArea,
  Grid,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const CardStyled = styled(Card)({
  display: "flex",
});

const CardDetails = styled("div")({
  // border: "2px solid green",
});

const PostCard = ({ post }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <CardStyled>
          <CardDetails>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="grey">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}{" "}
              </Typography>
              <Typography variant="subtitle1" color="skyblue" paragraph>
                Continue Reading...
              </Typography>
            </CardContent>
          </CardDetails>

          <CardMedia
            component="img"
            sx={{
              width: 151,
              display: { xs: "none", sm: "block" }, // Hide on xs screens, show on sm and up
            }}
            image={post.image}
            alt="random unsplash pictures"
          />
        </CardStyled>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;
