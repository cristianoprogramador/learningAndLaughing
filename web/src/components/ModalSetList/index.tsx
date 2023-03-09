import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Link, useNavigation } from "react-router-dom";
import {
  Button,
  ButtonInside,
  Buttons,
  MessageContainer,
  MusicGrid,
  Panel,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { IoIosListBox } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "fixed",
  },
};

interface SongsProps {
  bandName: string;
  songName: string;
}
[];

interface MiniModalProps {
  title: string;
  state: SongsProps[];
}

export function ModalSetList({ state, title }: MiniModalProps) {
  const navigate = useNavigate();
  // console.log(state);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function handleNavigation() {
    setIsOpen(false);
  }

  function closeModal(address: any) {
    console.log(address);
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={openModal}>
        <IoIosListBox size={20} />
        {title}
      </Button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Panel>
          <MessageContainer>
            <MusicGrid>
              <h3>Banda</h3>
              <h3>Musica</h3>
            </MusicGrid>
            {state.slice(0, 25).map((music, index) => {
              return (
                <MusicGrid key={index}>
                  <div>{music.bandName}</div>
                  <div>{music.songName}</div>
                </MusicGrid>
              );
            })}
          </MessageContainer>
          {state.length > 25 && (
            <MessageContainer>
              <MusicGrid>
                <h3>Banda</h3>
                <h3>Musica</h3>
              </MusicGrid>
              {state.slice(25, 50).map((music, index) => {
                return (
                  <MusicGrid key={index}>
                    <div>{music.bandName}</div>
                    <div>{music.songName}</div>
                  </MusicGrid>
                );
              })}
            </MessageContainer>
          )}
          {state.length > 50 && (
            <MessageContainer>
              <MusicGrid>
                <h3>Banda</h3>
                <h3>Musica</h3>
              </MusicGrid>
              {state.slice(50, 75).map((music, index) => {
                return (
                  <MusicGrid key={index}>
                    <div>{music.bandName}</div>
                    <div>{music.songName}</div>
                  </MusicGrid>
                );
              })}
            </MessageContainer>
          )}
          {state.length > 75 && (
            <MessageContainer>
              <MusicGrid>
                <h3>Banda</h3>
                <h3>Musica</h3>
              </MusicGrid>
              {state.slice(75, 100).map((music, index) => {
                return (
                  <MusicGrid key={index}>
                    <div>{music.bandName}</div>
                    <div>{music.songName}</div>
                  </MusicGrid>
                );
              })}
            </MessageContainer>
          )}

          <Buttons>
            <ButtonInside onClick={() => handleNavigation()}>
              Baixa a Lista Completa
            </ButtonInside>
            <ButtonInside onClick={() => handleNavigation()}>
              Fechar
            </ButtonInside>
          </Buttons>
        </Panel>
      </Modal>
    </>
  );
}
