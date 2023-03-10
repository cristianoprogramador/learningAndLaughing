import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import {
  AddressContainer,
  AdressField,
  AmountOfPeople,
  AmountOfTime,
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
  LineContainer,
  LocationContainer,
  MainMenu,
  MidiaContainer,
  OptionContainer,
  Places,
  PlacesAndDetails,
  PlacesToPlay,
  PriceButton,
  SelectionAndImage,
  SelectionDate,
  StyledCheckbox,
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
  { value: "Restaurante", label: "Restaurante" },
];

export interface PropositionFormProps {
  location: string;
  streetAddress: string;
  numberAddress: string;
  districtName: string;
  city: string;
  dateOfEvent: Date; //date
  timeOfTheDay: string;
  amountOfPeople: number;
  amountTimeEvent: string; //date
  equipmentNeed: boolean;
  equipmentDescription: string;
  repertoireSuggestion: boolean;
  repertoireSuggestionList: string;
  eventDescription: string;
}

export function FormPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const initialValuesForm: PropositionFormProps = {
    location: "",
    streetAddress: "",
    numberAddress: "",
    districtName: "",
    city: "",
    dateOfEvent: tomorrow,
    timeOfTheDay: "",
    amountOfPeople: 0,
    amountTimeEvent: "01:00",
    equipmentNeed: false,
    equipmentDescription: "",
    repertoireSuggestion: false,
    repertoireSuggestionList: "",
    eventDescription: "",
  };

  const validationSchemaProposition = Yup.object({
    location: Yup.object().nullable().required("Campo obrigatório"),
    streetAddress: Yup.string().required("Favor preencher a rua"),
    numberAddress: Yup.string().required("Favor preencher número"),
    districtName: Yup.string().required("Favor preencher o bairro"),
    city: Yup.string().required("Favor preencher a cidade"),
    dateOfEvent: Yup.date()
      .min(new Date(), "Não é possível incluir uma data futura")
      .required("Favor informar a data do evento"),
    timeOfTheDay: Yup.string()
      .oneOf(["manha", "tarde", "noite"], "Tipo inválido")
      .required("Periodo do dia é obrigatório"),
    amountOfPeople: Yup.number()
      .min(1, "Expectativa de público é obrigatório")
      .required("Expectativa de público é obrigatório"),
    amountTimeEvent: Yup.string()
      .matches(
        /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
        "Horário inválido, utilize o formato HH:MM (ex: 01:30)"
      )
      .required("Campo obrigatório"),
    equipmentNeed: Yup.boolean(),
    equipmentDescription: Yup.string(),
    repertoireSuggestion: Yup.boolean(),
    repertoireSuggestionList: Yup.string(),
    eventDescription: Yup.string()
      .min(10, "O campo deve ter no mínimo 10 caracteres")
      .required("Favor detalhar o evento"),
  });

  const bandNames = state.playlistItems.reduce((nomes, item) => {
    if (!nomes.includes(item.bandName)) {
      nomes.push(item.bandName);
    }
    return nomes;
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
              {Number(state.priceByHour).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </strong>
          </PriceButton>
          (Por Hora)
          <PlacesAndDetails>
            <TitleOption>Estilos Musicais</TitleOption>
            <PlacesToPlay>
              {state.musicStyles.map((place: any, index) => {
                return <Places key={index}>{place}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
          <PlacesAndDetails>
            <TitleOption>Lugares para Show</TitleOption>
            <PlacesToPlay>
              {state.placesToPlay.map((place: any, index) => {
                return <Places key={index}>{place}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
          <PlacesAndDetails>
            <TitleOption>Repertório:</TitleOption>
            <BandsToPlay>
              {bandNames.map((place: any, index) => {
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
          <Title>Proposta para Evento:</Title>
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
                  <FormTitle>Lugar do evento:</FormTitle>
                  <Select
                    placeholder="Clique e selecione o local"
                    name="location"
                    options={locationOptions}
                    styles={customStyles}
                    value={values.location}
                    onChange={(selectedOption) =>
                      setFieldValue("location", selectedOption)
                    }
                  />
                  {
                    <div style={{ color: "red", marginTop: 5 }}>
                      <ErrorMessage name="location" />
                    </div>
                  }
                  <AddressContainer>
                    <LineContainer>
                      <OptionContainer>
                        <FormTitle>Rua:</FormTitle>
                        <AdressField
                          name="streetAddress"
                          label="Rua:"
                          type="text"
                        />
                        <div style={{ color: "red", marginTop: 5 }}>
                          <ErrorMessage name="streetAddress" />
                        </div>
                      </OptionContainer>
                      <OptionContainer>
                        <FormTitle>Número:</FormTitle>
                        <AdressField
                          name="numberAddress"
                          label="Número:"
                          type="text"
                        />
                        <div style={{ color: "red", marginTop: 5 }}>
                          <ErrorMessage name="numberAddress" />
                        </div>
                      </OptionContainer>
                    </LineContainer>
                    <LineContainer>
                      <OptionContainer>
                        <FormTitle>Bairro:</FormTitle>
                        <AdressField
                          name="districtName"
                          label="Bairro:"
                          type="text"
                        />
                        <div style={{ color: "red", marginTop: 5 }}>
                          <ErrorMessage name="districtName" />
                        </div>
                      </OptionContainer>
                      <OptionContainer>
                        <FormTitle>Cidade:</FormTitle>
                        <AdressField name="city" label="Cidade:" type="text" />
                        <div style={{ color: "red", marginTop: 5 }}>
                          <ErrorMessage name="city" />
                        </div>
                      </OptionContainer>
                    </LineContainer>
                  </AddressContainer>
                  <FormTitle>Data do compromisso:</FormTitle>
                  <SelectionDate
                    id="date"
                    name="date"
                    selected={values.dateOfEvent}
                    onChange={(date) => setFieldValue("dateOfEvent", date)}
                    dateFormat="dd/MM/yyyy"
                    locale="pt-BR"
                    minDate={tomorrow}
                  />

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
                  <FormTitle>Expectativa de público:</FormTitle>
                  <AmountOfPeople
                    name="amountOfPeople"
                    label="Expectativa de Público:"
                    type="number"
                  />
                  <div style={{ color: "red", marginTop: 5 }}>
                    <ErrorMessage name="amountOfPeople" />
                  </div>

                  <FormTitle>Tempo de Show:</FormTitle>
                  <AmountOfTime
                    name="amountTimeEvent"
                    id="amountTimeEvent"
                    // as={InputMask}
                    // mask="99:99"
                    type="text"
                  />
                  <div style={{ color: "red", marginTop: 5 }}>
                    <ErrorMessage name="amountTimeEvent" />
                  </div>
                </LocationContainer>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <pre style={{ marginBottom: 16 }}>
                    Tem equipamento para disponibilizar? {"\n"}
                    (cabo de som, caixa de som, microfone.. etc)
                  </pre>
                  <StyledCheckbox
                    type="checkbox"
                    name="equipmentNeed"
                    onChange={handleChange}
                  />
                </div>
                {values.equipmentNeed === true && (
                  <DescriptionEvent
                    as="textarea"
                    name="equipamentDescription"
                    id="equipamentDescription"
                    placeholder="Descreva os equipamentos disponiveis..."
                    onChange={handleChange}
                  />
                )}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <pre style={{ marginBottom: 16 }}>
                    Deseja incluir músicas no repertório? {"\n"}
                  </pre>
                  <StyledCheckbox
                    type="checkbox"
                    name="repertoireSuggestion"
                    onChange={handleChange}
                  />
                </div>
                {values.repertoireSuggestion === true && (
                  <DescriptionEvent
                    as="textarea"
                    name="repertoireSuggestionList"
                    id="repertoireSuggestionList"
                    placeholder="Exemplo:
Wind of Change - Scorpions"
                    onChange={handleChange}
                  />
                )}

                <FormTitle>Descreva o evento:</FormTitle>
                <DescriptionEvent
                  as="textarea"
                  name="eventDescription"
                  id="eventDescription"
                  placeholder="Descreva como será o evento e os detalhes do serviço..."
                  onChange={handleChange}
                />
                <div style={{ color: "red", marginTop: 5 }}>
                  <ErrorMessage name="eventDescription" />
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
