import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Image from "next/image";
import BasicAccordion from "../../Accordions/BasicAccordion";
import Link from "next/link";
import fields from "../../../../src/utils/termsAccordion";
import Typography from "@mui/material/Typography";
import Cookies from 'universal-cookie';

/*eslint-disable */
export default function BasicCard(props: ITerms) {
  const cookies = new Cookies();
  const termState = cookies.get('termState');
  const termsRoute = termState ? "/views/home/" : "/views/accept/";
  
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
          <span style={{fontSize: "2em", marginLeft: "0.3em"}}>{props.value}</span>
        </Typography>
        <div style={{ textAlign: "center", marginTop: "2em" }}>          
          <BasicAccordion
            title1={fields.title1}
            text1={fields.text1}
            title2={fields.title2}
            text2={fields.text2}
            title3={fields.title3}
            text3={fields.text3}
            title4={fields.title4}
            text4={fields.text4}
            title5={fields.title5}
            text5={fields.text5}
            title6={fields.title6}
            text6={fields.text6}
            title7={fields.title7}
            text7={fields.text7}
            title8={fields.title8}
            text8={fields.text8}
            title9={fields.title9}
            text9={fields.text9}
          />
        </div>
      </CardContent>
      <hr />
      <CardActions>
        <Link href={termsRoute}>
          <Button
            variant="contained"
            size="small"
            style={{ backgroundColor: "#249DD9" }}
          >
            {props.textLink}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
/*eslint-disable */
