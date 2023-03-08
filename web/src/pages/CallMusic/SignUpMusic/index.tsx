import {
  AddNameBandSong,
  AddressContainer,
  ButtonAdd,
  ButtonModal,
  ButtonRemove,
  Container,
  ContainerMusic,
  ContainerMusicClose,
  ContainerMusicInsert,
  DescriptionEvent,
  ImageSoloBand,
  Information,
  InputContainer,
  InputOption,
  InputRadio,
  InputView,
  InsertPlayListContainer,
  MainMenu,
  ModalContainer,
  NumericFormatInput,
  OptionModal,
  PriceByHour,
  SelectionAndImage,
  StyledCheckbox,
  Title,
  TitleMinor,
} from "./styles";

import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import Modal from "react-modal";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/InputFormik";
import { useCart } from "../../../hooks/useCart";

import solo from "../../../assets/images/solo.jpg";
import band2 from "../../../assets/images/band2.jpg";
import { HeaderCallMusic } from "../../../components/HeaderCallMusic";
import { FooterCallMusic } from "../../../components/FooterCallMusic";
import { IoIosListBox } from "react-icons/io";
import { toast } from "react-toastify";

const options: Option[] = [
  { value: "Festa de Casamento", label: "Festa de Casamento" },
  { value: "Cerimônia de Casamento", label: "Cerimônia de Casamento" },
  { value: "Bar", label: "Bar" },
  { value: "Chácara", label: "Chácara" },
  { value: "Evento de Empresa", label: "Evento de Empresa" },
  { value: "Evento Social", label: "Evento Social" },
  { value: "Casa de Show", label: "Casa de Show" },
  { value: "Sarau", label: "Sarau" },
  { value: "Balada", label: "Balada" },
  { value: "Rave", label: "Rave" },
  { value: "Concerto em teatro", label: "Concerto em teatro" },
  { value: "Concerto ao ar livre", label: "Concerto ao ar livre" },
];

const musicOptions: Option[] = [
  { value: "rock", label: "Rock" },
  { value: "pop", label: "Pop" },
  { value: "jazz", label: "Jazz" },
  { value: "gospel", label: "Gospel" },
  { value: "eletronica", label: "Eletronica" },
  { value: "pagode", label: "Pagode" },
  { value: "blues", label: "Blues" },
  { value: "nacional", label: "Nacional" },
  { value: "internacional", label: "Internacional" },
  { value: "Clássica", label: "Clássica" },
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

const mainCities: Option[] = [
  { value: "Ribeirão Preto", label: "Ribeirão Preto" },
  { value: "Campinas", label: "Campinas" },
  { value: "São Paulo", label: "São Paulo" },
];

const typeOfMusicianData: Option[] = [
  { value: "Banda-Cover", label: "Banda-Cover" },
  { value: "Orquestra", label: "Orquestra" },
  { value: "Cover", label: "Cover" },
  { value: "Solista", label: "Solista" },
  { value: "Quarteto", label: "Quarteto" },
  { value: "Banda-Autoral", label: "Banda-Autoral" },
  { value: "Dupla", label: "Dupla" },
  { value: "Trio", label: "Trio" },
  { value: "DJ", label: "DJ" },
  { value: "Cantor-Compositor", label: "Cantor-Compositor" },
  { value: "Músico de sessão", label: "Músico de sessão" },
];

type Option = {
  value: string;
  label: string;
};

type PlayListProps = {
  bandName: string;
  songName: string;
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
  typeOfMusician: [];
  offerInstrumentals: boolean;
  description: string;
  playlistItems: PlayListProps[];
  mainCity: string;
}

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: "black",
  }),
};

const customStylesModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "fixed",
    zIndex: 9999,
    overflow: "auto",
    maxHeight: "calc(100vh - 250px)",
  },
};

const animatedComponents = makeAnimated();

export function SignUpMusic() {
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function handleNavigation() {
    setIsOpen(false);
  }

  function closeModal(address: any) {
    setIsOpen(false);
  }

  const initialValuesMusic: MusicianFormProps = {
    sizeOfTheGroup: "group",
    teach: false,
    teachWhat: [],
    nameOfTheGroup: "",
    placesToPlay: [],
    howFarToPlay: 0,
    priceByHour: 0,
    musicStyles: [],
    typeOfMusician: [],
    offerInstrumentals: false,
    description: "",
    playlistItems: [],
    mainCity: "",
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
    typeOfMusician: Yup.array()
      .min(1, "Por favor, selecione pelo menos dos formatos apresentados")
      .of(Yup.string()),
    offerInstrumentals: Yup.boolean(),
    description: Yup.string()
      .min(10, "O campo deve ter no mínimo 10 caracteres")
      .required("Favor detalhar o perfil"),
    playlistItems: Yup.array().of(
      Yup.object().shape({
        bandName: Yup.string().required("O nome da banda é obrigatório"),
        songName: Yup.string().required("O nome da música é obrigatório"),
      })
    ),
    mainCity: Yup.object()
      .nullable()
      .required("Favor informar a cidade principal de atuação"),
  });

  return (
    <Container>
      <HeaderCallMusic />
      <MainMenu>
        <Formik
          initialValues={initialValuesMusic}
          validationSchema={validationSchemaMusic}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            actions.setSubmitting(false);
            navigate("/CallMusic/MainPage");
            toast.success("Cadastro finalizado!");
          }}
        >
          {({
            values,
            handleChange,
            setFieldValue,
            isSubmitting,
            touched,
            errors,
          }) => (
            <Information>
              <AddressContainer>
                <Title>Perfil Músical</Title>
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
                        components={animatedComponents}
                        closeMenuOnSelect={false}
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
                    components={animatedComponents}
                    closeMenuOnSelect={false}
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
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="typeOfMusician">Formação</label>
                  <Select
                    placeholder="Selecionar..."
                    name="typeOfMusician"
                    options={typeOfMusicianData}
                    components={animatedComponents}
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={(selectedOptions) =>
                      setFieldValue(
                        "typeOfMusician",
                        selectedOptions
                          ? selectedOptions.map((option) => option.value)
                          : []
                      )
                    }
                    value={typeOfMusicianData.filter((option) =>
                      values.typeOfMusician.includes(option.value)
                    )}
                    styles={customStyles}
                  />
                  <div style={{ color: "red", marginTop: 5 }}>
                    <ErrorMessage name="typeOfMusician" />
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: 15,
                    gap: 10,
                  }}
                >
                  <label htmlFor="mainCity">Cidade Principal</label>
                  <Select
                    placeholder="Clique e selecione o local"
                    name="mainCity"
                    options={mainCities}
                    styles={customStyles}
                    value={values.mainCity}
                    onChange={(selectedOption) =>
                      setFieldValue("mainCity", selectedOption)
                    }
                  />
                  {
                    <div style={{ color: "red", marginTop: 5 }}>
                      <ErrorMessage name="mainCity" />
                    </div>
                  }
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
                        components={animatedComponents}
                        closeMenuOnSelect={false}
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
                <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <label htmlFor="description">Descrição do Perfil</label>
                  <DescriptionEvent
                    as="textarea"
                    name="description"
                    id="description"
                    placeholder="Exemplo:
                    Nós somos uma banda cover que adora tocar as músicas que as pessoas amam! Com anos de experiência, nos orgulhamos de nossa habilidade em reproduzir o som e a energia dos artistas originais que amamos.
                    Desde os clássicos dos anos 80 até os hits mais recentes, temos um  repertório variado que agrada a todos. Em nossos shows, adoramos ver a reação das pessoas quando reconhecem a música que estamos tocando e começam a dançar e cantar junto conosco. Nós nos divertimos muito tocando e adoramos ver que as pessoas se divertem junto conosco!"
                    onChange={handleChange}
                  />
                  <div style={{ color: "red", marginTop: 5 }}>
                    <ErrorMessage name="description" />
                  </div>
                </div>
                <ModalContainer>
                  <ButtonModal onClick={openModal}>
                    <IoIosListBox size={20} />
                    Preencher Repertório
                  </ButtonModal>
                  <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStylesModal}
                  >
                    <InsertPlayListContainer>
                      <FieldArray name="playlistItems">
                        {({ push, remove }) => (
                          <ContainerMusic>
                            {values.playlistItems.map((item, index) => (
                              <ContainerMusicInsert key={index}>
                                <OptionModal>
                                  <AddNameBandSong
                                    name={`playlistItems.${index}.bandName`}
                                    placeholder="Insira o nome da banda"
                                  />
                                  {touched.playlistItems?.[index]?.bandName &&
                                    errors.playlistItems?.[index]?.bandName && (
                                      <div
                                        style={{ fontSize: 12, color: "red" }}
                                      >
                                        {errors.playlistItems[index].bandName}
                                      </div>
                                    )}
                                </OptionModal>
                                <OptionModal>
                                  <AddNameBandSong
                                    name={`playlistItems.${index}.songName`}
                                    placeholder="Insira o nome da música"
                                  />
                                  {touched.playlistItems?.[index]?.songName &&
                                    errors.playlistItems?.[index]?.songName && (
                                      <div
                                        style={{ fontSize: 12, color: "red" }}
                                      >
                                        {errors.playlistItems[index].songName}
                                      </div>
                                    )}
                                </OptionModal>
                                <ButtonRemove
                                  type="button"
                                  onClick={() => remove(index)}
                                  disabled={isSubmitting}
                                >
                                  Remover
                                </ButtonRemove>
                              </ContainerMusicInsert>
                            ))}
                            <ButtonAdd
                              type="button"
                              onClick={() =>
                                push({ bandName: "", songName: "" })
                              }
                              disabled={isSubmitting}
                            >
                              Adicionar Música
                            </ButtonAdd>
                          </ContainerMusic>
                        )}
                      </FieldArray>
                    </InsertPlayListContainer>
                    <ContainerMusicClose>
                      <ButtonModal onClick={() => handleNavigation()}>
                        Fechar
                      </ButtonModal>
                    </ContainerMusicClose>
                  </Modal>
                </ModalContainer>

                <Button
                  type="submit"
                  text="Salvar Cadastro"
                  disabled={isSubmitting}
                />
              </AddressContainer>
            </Information>
          )}
        </Formik>
      </MainMenu>
      <FooterCallMusic />
    </Container>
  );
}
