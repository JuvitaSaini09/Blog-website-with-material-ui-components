import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const CardStyled = styled(Card)({
  backgroundImage: `url(https://images.unsplash.com/photo-1611433634706-39c25bb5b39f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
  backgroundPosition: "center",
  padding: "35px 25px",
});

const FeaturedPosts = () => {
  return (
    <CardStyled>
      <CardContent>
        <Typography sx={{ fontSize: 40 }} gutterBottom>
          Title of a longer featured blog post
        </Typography>

        <Typography variant="h5">
          Quickly, the fox jumps over the lazy dog, avoiding the tall fence with
          grace.Quickly, the fox jumps over the lazy dog.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" color="inherit">
          Read More ..
        </Button>
      </CardActions>
    </CardStyled>
  );
};

export default FeaturedPosts;
