import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Image from "next/image";
import BasicAccordion from "../../Accordions/BasicAccordion/BasicAccordion";
import contentHelp from "../../../../src/utils/contentHelp";
import Typography from "@mui/material/Typography";

export default function BasicCard(props: any) {
    const help = contentHelp.content.help
    const contentCard =  contentHelp.content
    const buttons = contentHelp.children.buttons
    console.log(help)
    
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{ minHeight: "15em" }}>
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
          <span style={{fontSize: "2em", marginLeft: "0.3em"}}>{contentCard.title}</span>
        </Typography>
        <div style={{ textAlign: "left", marginTop: "2em" }}>          
          <BasicAccordion
            title1={help.title1}
            text1={help.text1}
            title2={help.title2}
            text2={help.text2}
            title3={help.title3}
            text3={help.text3}
            title4={help.title4}
            text4={help.text4}
            title5={help.title5}
            text5={help.text5}
            title6={help.title6}
            text6={help.text6}
            title7={help.title7}
            text7={help.text7}
          />
        </div>
      </CardContent>
      <hr />
      <CardActions>        
          <Button
            variant="contained"
            size="small"
            style={{ backgroundColor: "#249DD9" }}
          >
            {buttons.value}
          </Button>       
      </CardActions>
    </Card>
  );
}
