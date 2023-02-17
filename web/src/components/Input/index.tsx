import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  Container,
  ErrorStyled,
  FieldStyled,
  Label,
  RequiredLabel,
} from "./styles";

interface InputProps {
  name: string;
  type: string;
  label: string;
  required: boolean;
}

export const Input = ({
  name,
  type = "",
  label,
  required,
  ...props
}: InputProps) => {
  return (
    <Container>
      <Label>
        {label || name}
        {required && <RequiredLabel>*</RequiredLabel>}
      </Label>
      <Field as={FieldStyled} name={name} type={type} {...props} />
      <ErrorMessage name={name} component={ErrorStyled} />
    </Container>
  );
};
