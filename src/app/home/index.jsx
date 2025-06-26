import { useRouter } from "expo-router";
import { useState } from "react";
import { Image } from "react-native";
import { Button, TextInput } from "../../components";

import img from "../../assets/image/img1.png";
import img3 from "../../assets/image/img2.png";
import img1 from "../../assets/image/img3.png";
import img2 from "../../assets/image/img5.png";

import * as S from "./styles";

export default function HomeScreen() {
  const router = useRouter();

  const [data, setData] = useState([]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderRow>
          <S.HeaderTitle1>Olá, Bem-Vindo!</S.HeaderTitle1>
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
        <S.HeaderTitle2>Comparador xi53</S.HeaderTitle2>
      </S.Header>
      <S.ContentContainer>
        <S.ContentContainerWhite>
          <TextInput
            icon={
              <Image
                resizeMode="contain"
                source={img3}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                  transform: "rotate(-50deg)",
                }}
              />
            }
            key="teste7383"
            placeholder="Buscar assinatura"
            placeholderTextColor="#acacac"
          />
          {data?.length ? null : (
            <S.EmptyInformation>
              <Image
                resizeMode="contain"
                source={img1}
                style={{ marginBottom: 20 }}
              />
              <S.EmptyInformationTitle1>Opps!!</S.EmptyInformationTitle1>
              <S.EmptyInformationTitle2>
                Nenhuma assinatura encontrada
              </S.EmptyInformationTitle2>
              <S.EmptyInformationTitle3>
                Clique em adicionar.
              </S.EmptyInformationTitle3>
            </S.EmptyInformation>
          )}
        </S.ContentContainerWhite>
      </S.ContentContainer>
      <S.Footer>
        <Button
          onPress={() => {
            router.navigate("/create");
          }}
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
