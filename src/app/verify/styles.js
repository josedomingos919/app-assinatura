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
  margin-top: -100px;
  border-radius: 10px;
  background-color: white;
`;

export const EmptyInformation = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  display: flex;
  border-radius: 5px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const BackButtonTitle = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 25px;
  display: flex;
  margin-top: -5px;
`;

export const Title = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

export const UploadButton = styled.TouchableOpacity`
  padding: 15px;
  display: flex;
  border: 2px dashed rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const TitleUploadButton = styled.Text`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.3);
`;

export const ContainerResult = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const TextSucess = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${({ isEqual = false }) => (isEqual ? "green" : "red")};
`;
