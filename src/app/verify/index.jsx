import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Image } from "react-native";
import { Button } from "../../components";

import emptyImg from "../../assets/image/empty_img.png";
import img from "../../assets/image/img1.png";
import refreshImg from "../../assets/image/refresh.png";

import * as S from "./styles";

export default function VerifyScreen() {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({
    isEqual: true,
    percentage: 10,
  });

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
        <S.HeaderTitle2>Verificar Assinatura</S.HeaderTitle2>
      </S.Header>
      <S.ContentContainer>
        <S.ContentContainerWhite>
          <S.Title>Assinatura Original</S.Title>
          <S.UploadButton
            style={{
              marginBottom: 25,
            }}
            disabled={true}
          >
            <Image
              source={emptyImg}
              style={{
                width: 80,
                height: 80,
              }}
            />
          </S.UploadButton>
          <S.Title>Carregar Assinatura</S.Title>
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
          {isLoading || result?.percentage ? (
            <S.ContainerResult>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <>
                  <S.TextSucess isEqual={result?.isEqual}>
                    {result.isEqual
                      ? "A assinatura é verdadeira"
                      : "A assinatura é falsa"}
                  </S.TextSucess>
                  <S.TextSucess
                    isEqual={result?.isEqual}
                    style={{ fontSize: 15 }}
                  >
                    Aproximação 90%
                  </S.TextSucess>
                </>
              )}
            </S.ContainerResult>
          ) : null}
        </S.ContentContainerWhite>
      </S.ContentContainer>
      <S.Footer>
        <Button
          title="Verificar"
          icon={
            <Image
              resizeMode="contain"
              source={refreshImg}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          }
        />
      </S.Footer>
    </S.Container>
  );
}
