import { styled } from "styled-components/native";

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  color: #acacac;
  margin-left: 10px;
  padding-right: 10px;
`;

export const Container = styled.View`
  height: 48px;
  display: flex;
  border-width: 1px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  border-color: #e8e8e8;
  background-color: #f6f6f6;
`;

export const Title = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

export const ContainerPrincipal = styled.View`
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
`;
