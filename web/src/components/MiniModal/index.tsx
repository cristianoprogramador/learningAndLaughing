import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Link, useNavigation } from "react-router-dom";
import { Button, ButtonInside, MessageContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface MiniModalProps {
  title: string;
  message?: string;
  address?: string | any;
  goodLooking: boolean;
  differentColor?: boolean;
}

export function MiniModal({
  title,
  message,
  address,
  goodLooking,
  differentColor,
}: MiniModalProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function handleNavigation(address: any) {
    console.log(address);
    setIsOpen(false);
    navigate(`${address}`);
  }

  function closeModal(address: any) {
    console.log(address);
    setIsOpen(false);
  }

  return (
    <div>
      {goodLooking === true ? (
        <>
          <Button onClick={openModal} differentColor={differentColor}>
            {title}
          </Button>
          <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <MessageContainer>
              <h3>{message}</h3>
              <ButtonInside onClick={() => handleNavigation(address)}>
                Vamos!
              </ButtonInside>
            </MessageContainer>
          </Modal>
        </>
      ) : (
        <>
          <button onClick={openModal}>{title}</button>
          <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <MessageContainer>
              <h3>{message}</h3>
              <button onClick={() => handleNavigation(address)}>
                Ta bom né
              </button>
            </MessageContainer>
          </Modal>
        </>
      )}
    </div>
  );
}
