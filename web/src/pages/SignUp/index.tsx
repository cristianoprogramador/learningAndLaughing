import { ButtonView, Container, InputView } from "./styles";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
  const initialValues = {
    nomeCompleto: "",
    apelido: "",
    dataNascimento: "",
    email: "",
    password: "",
    retypePassword: "",
  };

  const validationSchema = Yup.object({
    nomeCompleto: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Favor informar o nome completo"),
    apelido: Yup.string(),
    dataNascimento: Yup.date()
      .max(new Date(), "Não é possível incluir uma data futura")
      .required("Favor informar a data de nascimento"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("Favor informar o seu e-mail"),
    password: Yup.string()
      .required("Favor informar uma senha.")
      .min(8, "Your password is too short."),
    retypePassword: Yup.string()
      .required("Favor repetir a senha escolhida.")
      .oneOf([Yup.ref("password")], "As senhas não batem."),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("tetsse");

    setSubmitting(false);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {
          console.log("submit!");
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <InputView>
              <Input
                name="nomeCompleto"
                required
                label="Nome Completo"
                type=""
              />
              <Input name="apelido" label="Apelido" />
              <Input
                name="dataNascimento"
                type="date"
                label="Data de Nascimento"
                required
              />
              <Input name="email" required type="string" label="E-mail" />
              <Input name="password" required type="password" label="Senha" />
              <Input
                name="retypePassword"
                required
                type="password"
                label="Repetir a senha"
              />
            </InputView>
            <Button type="submit" disabled={isSubmitting} text="Enviar" />
          </Form>
        )}
      </Formik>
    </Container>
  );
}
