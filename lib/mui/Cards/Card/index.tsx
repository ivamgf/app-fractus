import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

type typeProps = {
  value: string
}

export default function BasicCard(props: typeProps) {
  
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
