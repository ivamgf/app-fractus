import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckboxLabels from "../../Checkbox/formGroupCheckbox";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BasicButton from "../../../../lib/mui/Buttons/BasicButton";
import Cookies from 'universal-cookie';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props: any) {
  const cookies = new Cookies();
  const cookieState = cookies.get('cookieState');
  const termState = cookies.get('termState');
  const [checkedState, setChecked] = useState(false);
  const [checkedValue, setValue] = useState("no");
  const [buttonState, setActive] = useState(true);
  const [buttonColor, setColor] = useState('backgroundColor: "#249DD9"');

  function handleClick() {
    checkedState ? setChecked(true) : setChecked(false);
    buttonState ? setActive(false) : setActive(true);
    checkedState ? setValue("yes") : setValue("no");
    buttonState
      ? setColor("background: rgba(0, 0, 0, 0.12)")
      : setColor('backgroundColor: "#249DD9"');
    cookies.set('termState', true, { path: '/' });  
  }

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{ minHeight: "15em" }}>
          <Image
            src="/images/logo-fractus-cor.svg"
            alt="Logo Fractus"
            width={500}
            height={150}
          />
          <Typography
            variant="body2"
            style={{ textAlign: "center", marginTop: "2em" }}
          >
            {props.value}
          </Typography>
        </CardContent>
        <hr />
        <CardActions>
          <CheckboxLabels
            checked={checkedState}
            onClick={handleClick}
            value={checkedValue}
          />
          <Link href="/views/terms/">
            <Button size="small">{props.textLink}</Button>
          </Link>
        </CardActions>
      </Card>
      <BasicButton text="Avançar" style={buttonColor} disabled={buttonState} />
    </>
  );
}
