import * as React from "react";
import { useRouter } from "next/router";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function BasicCard() {
    const router = useRouter();
    const redirectHome = async() => await router.push("/views/home/");
    
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{ minHeight: "20em" }}>
          <Image
            src="/favicon.ico"
            alt="Logo Fractus"
            width={25}
            height={25}
          />
          <Typography
            variant="body2"
            style={{ textAlign: "center", marginTop: "4em" }}
          >
            
          </Typography>
        </CardContent>
        <CardActions>
            <Button
                variant="contained"
                size="small"
                style={{ backgroundColor: "#249DD9" }}
                onClick={redirectHome}
            >
                {}
            </Button> 
        </CardActions>
      </Card>      
    </>
  );
}
