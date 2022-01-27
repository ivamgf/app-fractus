import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props: any) {
  
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{ minHeight: "20em" }}>
          <Image
            src="/images/logo-fractus-cor.svg"
            alt="Logo Fractus"
            width={500}
            height={150}
          />
          <Typography
            variant="body2"
            style={{ textAlign: "center", marginTop: "4em" }}
          >
            {props.value}
          </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>      
    </>
  );
}
