import { useRouter } from "expo-router";
import { useState } from "react";
import { Image } from "react-native";
import { Button, TextInput } from "../../components";

import emptyImg from "../../assets/image/empty_img.png";
import img from "../../assets/image/img1.png";
import img2 from "../../assets/image/img5.png";

import * as S from "./styles";

export default function HomeScreen() {
  const router = useRouter();

  const [data, setData] = useState([]);

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onPress={() => router.back()}>
          <S.BackButtonTitle>{"<"}</S.BackButtonTitle>
        </S.BackButton>
        <S.HeaderRow>
          <S.HeaderTitle1>Comparador xi53</S.HeaderTitle1>
          <Image
            style={{
              width: 60,
              height: 50,
              marginTop: -18,
            }}
            source={img}
            resizeMode="contain"
          />
        </S.HeaderRow>
        <S.HeaderTitle2>Criar Assinatura</S.HeaderTitle2>
      </S.Header>
      <S.ContentContainer>
        <S.ContentContainerWhite>
          <TextInput
            marginBottom={20}
            title="Nome do Assinante"
            placeholder="ex.: Renato Manuel"
            placeholderTextColor="#acacac"
          />
          <TextInput
            marginBottom={20}
            title="Nº BI"
            placeholder="ex.: 007914682LA043"
            placeholderTextColor="#acacac"
          />
          <S.Title>Foto da Assinatura</S.Title>
          <S.UploadButton>
            <Image
              source={emptyImg}
              style={{
                width: 80,
                height: 80,
              }}
            />
            <S.TitleUploadButton>Carregar Imagem</S.TitleUploadButton>
          </S.UploadButton>
        </S.ContentContainerWhite>
      </S.ContentContainer>
      <S.Footer>
        <Button
          title="Adicionar"
          icon={
            <Image
              resizeMode="contain"
              source={img2}
              style={{
                width: 49,
                height: 35,
              }}
            />
          }
        />
      </S.Footer>
    </S.Container>
  );
}
