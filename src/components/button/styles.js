import { styled } from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  display: flex;
  border-width: 1px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  border-color: #e6e6e6;
  justify-content: center;
  background-color: #4ce5b1;
  ${({ disabled }) => (disabled ? "opacity: 0.7;" : "")}
`;

export const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
