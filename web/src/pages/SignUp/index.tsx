import { ButtonView, Container, InputView } from "./styles";

import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
  const initialValues = {
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    naturalidade: "",
    endereço: "",
    cidade: "",
    email: "",
    celular: "",
  };

  const validationSchema = Yup.object({
    nome: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    sobrenome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    dataNascimento: Yup.date()
      .max(new Date(), "Não é possível incluir uma data futura")
      .required("Campo obrigatório"),
    celular: Yup.string()
      .max(13, "O campo deve ter no máximo 13 caracteres")
      .required("Campo obrigatório"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);

    setSubmitting(false);
  };

  return (
    <Container>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => (
          <InputView>
            <Input name="nome" required />
            <ButtonView>
              <Button
                text="Criar usuário"
                type="submit"
                disabled={isSubmitting}
              />
            </ButtonView>
          </InputView>
        )}
      </Formik>
    </Container>
  );
}
