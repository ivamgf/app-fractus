import * as React from "react";
import { useRouter } from "next/router";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function CardForm(props: any) {
    const router = useRouter();
    const redirectHome = async() => await router.push("/views/home/");
    const content = props.content
    const routes = props.routes
    const buttonPrev = props.buttonPrev 
    const buttonSend = props.buttonSend
    
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{ minHeight: "20em" }}>
        <Typography
            variant="body2"
            style={{ textAlign: "center" }}
          >
            <Image
              src="/favicon.ico"
              alt="Logo Fractus"
              width={25}
              height={25}
            />          
            <span style={{fontSize: "2em", marginLeft: "0.3em"}}>{content.title}</span>
          </Typography>
        </CardContent>
        <CardActions>
            <Button
                variant="contained"
                size="small"
                style={{ backgroundColor: "#249DD9" }}
                onClick={redirectHome}
            >
                {buttonPrev.value}
            </Button>
            <Button
                variant="contained"
                size="small"
                style={{ backgroundColor: "#249DD9", position: "absolute", right: "2em" }}
                onClick={redirectHome}
            >
                {buttonSend.value}
            </Button>
        </CardActions>
      </Card>      
    </>
  );
}
