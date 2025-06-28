// ConfirmationModal.js
import React from "react";
import { Image, Modal } from "react-native";
import alertImg from "../../assets/image/alert.png";
import {
  ButtonRow,
  CancelButton,
  CancelText,
  ConfirmButton,
  ConfirmText,
  IconContainer,
  Message,
  ModalContainer,
  Overlay,
} from "./styles";

export const ConfirmationModal = ({
  visible,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <Overlay>
        <ModalContainer>
          <IconContainer>
            <Image
              style={{
                width: 100,
                marginBottom: 15,
              }}
              resizeMode="contain"
              source={alertImg}
            />
          </IconContainer>

          <Message>{message}</Message>
          <ButtonRow>
            <CancelButton onPress={onCancel}>
              <CancelText>Cancelar</CancelText>
            </CancelButton>
            <ConfirmButton onPress={onConfirm}>
              <ConfirmText>Confirmar</ConfirmText>
            </ConfirmButton>
          </ButtonRow>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};
