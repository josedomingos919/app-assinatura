import styled from "styled-components/native";

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

export const IconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: #4ce5b1;
  padding: 10px 20px;
  border-radius: 5px;
  width: 48%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 10px 20px;
  border-radius: 5px;
  width: 48%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancelText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const ConfirmText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
