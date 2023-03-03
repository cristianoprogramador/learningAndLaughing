import {
  AddressContainer,
  Container,
  ImageSoloBand,
  Information,
  InputContainer,
  InputOption,
  InputRadio,
  InputView,
  NumericFormatInput,
  PriceByHour,
  SelectionAndImage,
  StyledCheckbox,
  Title,
  TitleMinor,
} from "./styles";

import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { NumericFormat } from "react-number-format";

import { products } from "../../../services/productsData.js";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/InputFormik";
import { useCart } from "../../../hooks/useCart";

import solo from "../../../assets/images/solo.jpg";
import band from "../../../assets/images/band.jpg";
import band2 from "../../../assets/images/band2.jpg";

type Option = {
  value: string;
  label: string;
};

export interface MusicianFormProps {
  sizeOfTheGroup: string;
  teach: boolean;
  teachWhat: [];
  nameOfTheGroup: string;
  placesToPlay: [];
  howFarToPlay: number;
  priceByHour: number;
  musicStyles: [];
  offerInstrumentals: boolean;
}

const options: Option[] = [
  { value: "Festa de Casamento", label: "Festa de Casamento" },
  { value: "Cerimônia de Casamento", label: "Cerimônia de Casamento" },
  { value: "Bar", label: "Bar" },
  { value: "Chácara", label: "Chácara" },
  { value: "Evento de Empresa", label: "Evento de Empresa" },
  { value: "Evento Social", label: "Evento Social" },
  { value: "Casa de Show", label: "Casa de Show" },
  { value: "Sarau", label: "Sarau" },
  { value: "Concerto em teatro", label: "Concerto em teatro" },
  { value: "Concerto ao ar livre", label: "Concerto ao ar livre" },
];

const musicOptions: Option[] = [
  { value: "rock", label: "Rock" },
  { value: "pop", label: "Pop" },
  { value: "jazz", label: "Jazz" },
  { value: "gospel", label: "Gospel" },
  { value: "pagode", label: "Pagode" },
  { value: "blues", label: "Blues" },
  { value: "nacional", label: "Nacional" },
  { value: "internacional", label: "Internacional" },
];

const teachOptions: Option[] = [
  { value: "violao", label: "Violão" },
  { value: "guitarra", label: "Guitarra" },
  { value: "baixo", label: "Baixo" },
  { value: "canto", label: "Canto" },
  { value: "piano", label: "Piano" },
  { value: "teclado", label: "Teclado" },
  { value: "bateria", label: "Bateria" },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: "black",
  }),
};

export function SignUpMusic() {
  const navigate = useNavigate();

  const initialValuesMusic: MusicianFormProps = {
    sizeOfTheGroup: "group",
    teach: false,
    teachWhat: [],
    nameOfTheGroup: "",
    placesToPlay: [],
    howFarToPlay: 0,
    priceByHour: 0,
    musicStyles: [],
    offerInstrumentals: false,
  };

  const validationSchemaMusic = Yup.object({
    sizeOfTheGroup: Yup.string()
      .oneOf(["individual", "group"], "Tipo inválido")
      .required("Tipo do Perfil é obrigatório"),
    teach: Yup.boolean(),
    teachWhat: Yup.array().of(Yup.string()),
    nameOfTheGroup: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Favor informar o nome completo"),
    placesToPlay: Yup.array()
      .min(
        1,
        "Por favor, selecione pelo menos lugar onde consegue realizar o show"
      )
      .of(Yup.string()),
    howFarToPlay: Yup.number()
      .min(1, "Distancia é obrigatória")
      .required("Distancia é obrigatória"),
    priceByHour: Yup.number()
      .min(1, "Preço é obrigatório")
      .required("Preço é obrigatório"),
    musicStyles: Yup.array()
      .min(1, "Por favor, selecione pelo menos um estilo de música")
      .of(Yup.string()),
    offerInstrumentals: Yup.boolean(),
  });

  return (
    <Container>
      <Formik
        initialValues={initialValuesMusic}
        validationSchema={validationSchemaMusic}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
          navigate("/CallMusic/MainPage");
        }}
      >
        {({ values, handleChange, setFieldValue, isSubmitting }) => (
          <Information>
            <AddressContainer>
              <Title>Perfil de Cadastro</Title>
              <TitleMinor>Tipo de Perfil:</TitleMinor>
              <InputRadio>
                <SelectionAndImage>
                  <ImageSoloBand src={band2} alt="" />
                  <InputOption>
                    <input
                      type="radio"
                      id="group"
                      name="sizeOfTheGroup"
                      value="group"
                      checked={values.sizeOfTheGroup === "group"}
                      onChange={handleChange}
                    />
                    <label htmlFor="group">Grupo Musical</label>
                  </InputOption>
                </SelectionAndImage>
                <SelectionAndImage>
                  <ImageSoloBand src={solo} alt="" />
                  <InputOption>
                    <input
                      type="radio"
                      id="individual"
                      name="sizeOfTheGroup"
                      value="individual"
                      checked={values.sizeOfTheGroup === "individual"}
                      onChange={handleChange}
                    />
                    <label htmlFor="individual">Individual</label>
                  </InputOption>
                </SelectionAndImage>
              </InputRadio>
              <div style={{ color: "red", marginTop: 5 }}>
                <ErrorMessage name="sizeOfTheGroup" />
              </div>

              {values.sizeOfTheGroup === "individual" && (
                <label
                  style={{
                    marginTop: 15,
                    gap: 10,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>Você deseja abrir possibilidade de dar aulas?</div>
                  <StyledCheckbox type="checkbox" name="teach" />
                </label>
              )}
              {values.teach === true &&
                values.sizeOfTheGroup === "individual" && (
                  <div style={{ marginTop: 20, marginBottom: 10 }}>
                    <label htmlFor="teachWhat">Tipo de Aula</label>
                    <Select
                      placeholder="Selecionar..."
                      name="teachWhat"
                      options={teachOptions}
                      isMulti
                      onChange={(selectedOptions) =>
                        setFieldValue(
                          "teachWhat",
                          selectedOptions
                            ? selectedOptions.map((option) => option.value)
                            : []
                        )
                      }
                      value={teachOptions.filter((option) =>
                        values.teachWhat.includes(option.value)
                      )}
                      styles={customStyles}
                    />
                    <div style={{ color: "red", marginTop: 5 }}>
                      <ErrorMessage name="placesToPlay" />
                    </div>
                  </div>
                )}

              <div style={{ marginTop: 20, marginBottom: 20 }}>
                <label htmlFor="placesToPlay">Locais para show</label>
                <Select
                  placeholder="Selecionar..."
                  name="placesToPlay"
                  options={options}
                  isMulti
                  onChange={(selectedOptions) =>
                    setFieldValue(
                      "placesToPlay",
                      selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : []
                    )
                  }
                  value={options.filter((option) =>
                    values.placesToPlay.includes(option.value)
                  )}
                  styles={customStyles}
                />
                <div style={{ color: "red", marginTop: 5 }}>
                  <ErrorMessage name="placesToPlay" />
                </div>
              </div>

              <InputView>
                <InputContainer>
                  <Input
                    name="nameOfTheGroup"
                    label="Nome Artistico"
                    type="text"
                  />
                  <Input
                    name="howFarToPlay"
                    label="Raio de Atuação (KM)"
                    type="number"
                  />
                  <PriceByHour>
                    <label htmlFor="priceByHour">Preço por Hora:</label>
                    <NumericFormatInput
                      id="priceByHour"
                      name="priceByHour"
                      onValueChange={(value) =>
                        setFieldValue("priceByHour", value.floatValue || "")
                      }
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="R$ "
                      allowNegative={false}
                    />
                    <div style={{ color: "red", marginTop: 5 }}>
                      <ErrorMessage name="priceByHour" />
                    </div>
                  </PriceByHour>
                  <div>
                    <label htmlFor="musicStyles">Estilos Musicais</label>
                    <Select
                      placeholder="Selecionar..."
                      id="musicStyles"
                      name="musicStyles"
                      options={musicOptions}
                      isMulti
                      onChange={(selectedOptions) =>
                        setFieldValue(
                          "musicStyles",
                          selectedOptions
                            ? selectedOptions.map((option) => option.value)
                            : []
                        )
                      }
                      value={musicOptions.filter((option) =>
                        values.musicStyles.includes(option.value)
                      )}
                      styles={customStyles}
                    />
                    <div style={{ color: "red", marginTop: 5 }}>
                      <ErrorMessage name="musicStyles" />
                    </div>
                  </div>
                </InputContainer>
              </InputView>
              <label
                style={{
                  marginTop: 15,
                  gap: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  Você deseja oferecer o equipamento como parte do serviço?
                  <div>
                    (Caso não selecione, o custo deve ir para o contratante)
                  </div>
                </div>
                <StyledCheckbox type="checkbox" name="offerInstrumentals" />
              </label>
              <Button
                type="submit"
                text="Salvar Cadastro"
                disabled={isSubmitting}
              />
            </AddressContainer>
          </Information>
        )}
      </Formik>
    </Container>
  );
}
