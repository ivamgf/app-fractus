import * as React from "react";
import { useRouter } from "next/router";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import BasicButton from "../../Buttons/BasicButton";

/*eslint-disable */
export default function BasicCard(props: any) {
  const router = useRouter();
  const contentCard = props.value
  const buttons = props.buttons
  const buttonColor = 'backgroundColor: "#249DD9"'

  const redirectHome = async() => await router.push("/views/home/"); 
 
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
          <BasicButton text={buttons.value} style={buttonColor} onClick={redirectHome} />                  
        </CardActions>
      </Card>      
    </>
  );
}

/*eslint-disable */
