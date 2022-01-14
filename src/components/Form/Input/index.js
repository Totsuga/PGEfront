import React from "react";
import { Input, Label, Wrapper, Link } from "./styles";

function Form({ label, ...rest }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...rest} />
    </Wrapper>
  );
}

export default Form;
