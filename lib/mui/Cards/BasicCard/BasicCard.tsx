import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import BasicButton from "../../Buttons/BasicButton";
import Link from "next/link";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props: any) {
  const contentCard = props.value
  const buttons = props.buttons
  console.log(buttons.value)
  const buttonColor = 'backgroundColor: "#249DD9"'

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{ minHeight: "20em", textAlign: "center" }}>

          <Typography
            variant="body2"
            style={{ textAlign: "center" }}
          >
            <Image
            src="/favicon.ico"
            alt="Logo Fractus"
            width={20}
            height={20}
            />
            <span style={{fontSize: "2em", marginLeft: "0.3em"}}>{contentCard.title}</span>
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "center", marginTop: "2em" }}
          >
            {contentCard.text}
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "right", marginTop: "2em", marginLeft: "2em" }}
          >
            {contentCard.credits}
          </Typography>
        </CardContent>
        <hr />
        <CardActions>
        <Link href="/views/home/">
          <BasicButton text={buttons.value} style={buttonColor} />
        </Link>          
        </CardActions>
      </Card>      
    </>
  );
}
