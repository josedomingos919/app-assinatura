import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #efeff4;
`;

export const Footer = styled.View`
  padding: 15px;
  padding-top: 0px;
  margin-bottom: 20px;
`;

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
`;

export const EmptyInformationTitle1 = styled.Text`
  color: #c9c9c9;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const EmptyInformationTitle2 = styled.Text`
  color: #c9c9c9;
`;

export const EmptyInformationTitle3 = styled.Text`
  color: #c9c9c9;
  margin-bottom: 5px;
`;

export const HeaderTitle1 = styled.Text`
  color: white;
  margin-top: 20px;
  font-size: 25px;
  color: white;
`;

export const HeaderTitle2 = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const Header = styled.View`
  height: 268px;
  padding: 20px;
  padding-top: 45px;
  background-color: #4ce5b1;
`;

export const HeaderRow = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ContentContainer = styled.View`
  padding: 20px;
`;

export const ContentContainerWhite = styled.View`
  padding: 20px;
  margin-top: -125px;
  border-radius: 10px;
  background-color: white;
`;

export const EmptyInformation = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LabelButtonText = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
  text-decoration: underline;
`;

export const LabelButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
