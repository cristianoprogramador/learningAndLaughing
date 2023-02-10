import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Link, useNavigation } from "react-router-dom";
import { Button, MessageContainer } from "./styles";
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
  message: string;
  address?: string | any;
  goodLooking: boolean;
}

export function MiniModal({
  title,
  message,
  address,
  goodLooking,
}: MiniModalProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(address: any) {
    console.log(address);
    setIsOpen(false);
    navigate(`${address}`);
  }

  return (
    <div>
      {goodLooking === true ? (
        <>
          <Button onClick={openModal}>{title}</Button>
          <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <MessageContainer>
              <h3>{message}</h3>
              <button onClick={() => closeModal(address)}>Vamos!</button>
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
              <button onClick={() => closeModal(address)}>Ta bom né</button>
            </MessageContainer>
          </Modal>
        </>
      )}
    </div>
  );
}
