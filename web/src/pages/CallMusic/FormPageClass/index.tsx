import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import {
  Bands,
  BandsToPlay,
  Container,
  Description,
  DescriptionEvent,
  FormTitle,
  ImageProfile,
  ImageTimeofTheDay,
  Information,
  InformationContainer,
  InputOption,
  InputRadio,
  LocationContainer,
  MainMenu,
  MidiaContainer,
  Places,
  PlacesAndDetails,
  PlacesToPlay,
  PriceButton,
  SelectionAndImage,
  Title,
  TitleOption,
} from "./styles";

import manha from "../../../assets/images/manha.jpg";
import noite from "../../../assets/images/noite.jpg";
import tarde from "../../../assets/images/tarde.jpg";

import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ptBR from "date-fns/locale/pt-BR";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { Button } from "../../../components/Button";
import { FooterCallMusic } from "../../../components/FooterCallMusic";
import { HeaderCallMusic } from "../../../components/HeaderCallMusic";
import { ModalSetList } from "../../../components/ModalSetList";

registerLocale("pt-BR", ptBR);
setDefaultLocale("pt-BR");

const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: "black",
  }),
};

type Option = {
  value: string;
  label: string;
};

const locationOptions: Option[] = [
  { value: "Segunda-feira", label: "Segunda-feira" },
  { value: "Terça-feira", label: "Terça-feira" },
  { value: "Quarta-feira", label: "Quarta-feira" },
  { value: "Quinta-feira", label: "Quinta-feira" },
  { value: "Sexta-feira", label: "Sexta-feira" },
  { value: "Sábado", label: "Sábado" },
  { value: "Domingo", label: "Domingo" },
];

export interface PropositionFormProps {
  daysOfWeek: [];
  timeOfTheDay: string;
  classDescription: string;
}

export function FormPageClass() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const initialValuesForm: PropositionFormProps = {
    daysOfWeek: [],
    timeOfTheDay: "",
    classDescription: "",
  };

  const validationSchemaProposition = Yup.object({
    daysOfWeek: Yup.array()
      .min(1, "Por favor, selecione pelo menos um dia da semana")
      .of(Yup.string()),
    timeOfTheDay: Yup.string()
      .oneOf(["manha", "tarde", "noite"], "Tipo inválido")
      .required("Periodo do dia é obrigatório"),
    classDescription: Yup.string()
      .min(10, "O campo deve ter no mínimo 10 caracteres")
      .required("Favor detalhar o evento"),
  });

  const bandNames = state.playlistItems.reduce((band: any, item: any) => {
    if (!band.includes(item.bandName)) {
      band.push(item.bandName);
    }
    return band;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <HeaderCallMusic />
      <MainMenu>
        <MidiaContainer>
          <Title>{state.nameOfTheGroup}</Title>
          <ImageProfile src={state.image} alt="" />
          <PriceButton>
            <div>Valor:</div>
            <strong>
              R$:{" "}
              {Number(state.teachPrice).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </strong>
          </PriceButton>
          (Por Hora)
          <PlacesAndDetails>
            <TitleOption>Estilos Musicais</TitleOption>
            <PlacesToPlay>
              {state.musicStyles.map((place: any, index: any) => {
                return <Places key={index}>{place}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
          <PlacesAndDetails>
            <TitleOption>Instrumentos para Aulas</TitleOption>
            <PlacesToPlay>
              {state.teachWhat.map((teach: any, index: any) => {
                return <Places key={index}>{teach}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
          <PlacesAndDetails>
            <TitleOption>Repertório:</TitleOption>
            <BandsToPlay>
              {bandNames.map((place: any, index: any) => {
                return <Bands key={index}>{place}</Bands>;
              })}
            </BandsToPlay>
          </PlacesAndDetails>
          <ModalSetList
            title={"Ver Lista de Músicas"}
            state={state.playlistItems}
          />
        </MidiaContainer>

        <InformationContainer>
          <Title>Solicitação de Aula:</Title>
          <Description>
            <div>
              Preencha as informações abaixo e envie sua proposta para o perfil
              selecionado, ele irá avaliar e terá até <strong>48 horas</strong>{" "}
              para te retornar uma resposta. Assim que o formulario for enviado,
              iremos notificar imediatamente o perfil para que possa entrar em
              contato com vocês (pela própria plataforma) e fechar o acordo.
            </div>
          </Description>
          <Formik
            initialValues={initialValuesForm}
            validationSchema={validationSchemaProposition}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              actions.setSubmitting(false);
              alert("DEU CERTO");
              navigate("/CallMusic/MainPage");
            }}
          >
            {({
              values,
              handleChange,
              setFieldValue,
              isSubmitting,
              errors,
              touched,
            }) => (
              <Information>
                <LocationContainer>
                  <FormTitle>
                    Dias da semana que você está disponivel:
                  </FormTitle>
                  <Select
                    placeholder="Clique e selecione o(s) dia(s)"
                    name="daysOfWeek"
                    options={locationOptions}
                    isMulti
                    styles={customStyles}
                    value={locationOptions.filter((option) =>
                      values.daysOfWeek.includes(option.value)
                    )}
                    onChange={(selectedOptions) =>
                      setFieldValue(
                        "daysOfWeek",
                        selectedOptions
                          ? selectedOptions.map((option) => option.value)
                          : []
                      )
                    }
                  />
                  {
                    <div style={{ color: "red", marginTop: 5 }}>
                      <ErrorMessage name="location" />
                    </div>
                  }
                  <FormTitle>Preferência por periodo:</FormTitle>
                  <InputRadio>
                    <SelectionAndImage>
                      <ImageTimeofTheDay src={manha} alt="" />
                      <InputOption>
                        <input
                          type="radio"
                          id="manha"
                          name="timeOfTheDay"
                          value="manha"
                          checked={values.timeOfTheDay === "manha"}
                          onChange={handleChange}
                        />
                        <label htmlFor="manha">Manhã</label>
                      </InputOption>
                    </SelectionAndImage>
                    <SelectionAndImage>
                      <ImageTimeofTheDay src={tarde} alt="" />
                      <InputOption>
                        <input
                          type="radio"
                          id="tarde"
                          name="timeOfTheDay"
                          value="tarde"
                          checked={values.timeOfTheDay === "tarde"}
                          onChange={handleChange}
                        />
                        <label htmlFor="tarde">Tarde</label>
                      </InputOption>
                    </SelectionAndImage>
                    <SelectionAndImage>
                      <ImageTimeofTheDay src={noite} alt="" />
                      <InputOption>
                        <input
                          type="radio"
                          id="noite"
                          name="timeOfTheDay"
                          value="noite"
                          checked={values.timeOfTheDay === "noite"}
                          onChange={handleChange}
                        />
                        <label htmlFor="noite">Noite</label>
                      </InputOption>
                    </SelectionAndImage>
                  </InputRadio>
                  <div style={{ color: "red", marginTop: 5 }}>
                    <ErrorMessage name="timeOfTheDay" />
                  </div>
                </LocationContainer>

                <FormTitle>Observações:</FormTitle>
                <DescriptionEvent
                  as="textarea"
                  name="classDescription"
                  id="classDescription"
                  placeholder="Descreva todas suas necessidades, o horario que você prefere, seu nivel de conhecimento e o que esta esperando das aulas..."
                  onChange={handleChange}
                />
                <div style={{ color: "red", marginTop: 5 }}>
                  <ErrorMessage name="classDescription" />
                </div>

                <Button
                  type="submit"
                  text="Enviar Proposta"
                  disabled={isSubmitting}
                />
              </Information>
            )}
          </Formik>
        </InformationContainer>
      </MainMenu>
      <FooterCallMusic />
    </Container>
  );
}
