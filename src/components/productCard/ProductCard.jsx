import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
export const ProductCard = ({ title, description, price, id, img }) => {
  //    const{ tittle, descrption, price}=props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component={"img"}
        sx={{ height: 140, width: "100%" }}
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="contained">
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
