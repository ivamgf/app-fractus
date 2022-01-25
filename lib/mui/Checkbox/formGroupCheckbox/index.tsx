import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels(props: any) {
  const checkedState = props.checked;

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked={checkedState} />}
        label="Aceitar Termos de Uso."
        value={props.value}
        onClick={props.onClick}
      />
    </FormGroup>
  );
}
