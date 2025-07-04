import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Image } from "react-native";
import { Button } from "../../components";
import { service } from "../../services";
import { useApp } from "../../store/zustend";

import emptyImg from "../../assets/image/empty_img.png";
import img from "../../assets/image/img1.png";
import refreshImg from "../../assets/image/refresh.png";

import * as ImagePicker from "expo-image-picker";
import * as S from "./styles";

export default function VerifyScreen() {
  const { verifyProps: params } = useApp();

  const router = useRouter();

  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({
    isEqual: null,
    percentage: null,
  });

  const pickImage = async () => {
    // Solicita permissão de acesso à galeria
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permissão para acessar a galeria é necessária.");
      return;
    }

    // Abre a galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      base64: true,
      quality: 1,
    });

    if (!result.canceled && result?.assets && result?.assets?.length > 0) {
      const asset = result.assets[0];

      setImageData({
        uri: asset.uri,
        tmpPath: asset.uri, // No Expo, tmpPath == uri (sem acesso ao FS diretamente)
        base64: asset.base64,
      });
    }
  };

  const handleVerify = async () => {
    if (!params?.img) {
      return Alert.alert("Atenção", "Não passou a imagem original!");
    }

    if (!imageData?.base64) {
      return Alert.alert("Atenção", "Não passou a imagem para comparar!");
    }

    setIsLoading(true);

    const response = await service.api.user.compareSignatures({
      data: {
        img1Base64: params?.img,
        img2Base64: imageData?.base64,
      },
    });

    if (response?.status == 201) {
      console.log("response?.data   ", response?.data);
      setResult({
        isEqual: response?.data?.same_signature,
        percentage: Number(response?.data?.similarity).toFixed(2) * 100,
      });
    } else {
      setResult({
        isEqual: null,
        percentage: null,
      });
    }

    setIsLoading(false);
  };

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
          <S.Title style={{ marginBottom: 0 }}>Assinatura original</S.Title>
          <S.Title style={{ marginBottom: 0 }}>
            Nome: <S.TitleBold>{params?.name}</S.TitleBold>
          </S.Title>
          <S.Title>
            BI: <S.TitleBold>{params?.bi}</S.TitleBold>
          </S.Title>
          <S.UploadButton
            style={{
              marginBottom: 25,
            }}
            disabled={true}
          >
            <Image
              source={{ uri: `data:image/jpeg;base64,${params?.img}` }}
              style={{
                width: 80,
                height: 80,
              }}
              resizeMode="contain"
            />
          </S.UploadButton>
          <S.Title>Carregar Assinatura</S.Title>
          <S.UploadButton onPress={() => pickImage()}>
            <Image
              source={imageData?.uri ? { uri: imageData?.uri } : emptyImg}
              style={{
                width: 80,
                height: 80,
              }}
              resizeMode="contain"
            />
            {!imageData?.uri ? (
              <S.TitleUploadButton>Carregar Imagem</S.TitleUploadButton>
            ) : (
              ""
            )}
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
                    Aproximação {result?.percentage}%
                  </S.TextSucess>
                </>
              )}
            </S.ContainerResult>
          ) : null}
        </S.ContentContainerWhite>
      </S.ContentContainer>
      <S.Footer>
        <Button
          disabled={isLoading}
          title="Verificar"
          onPress={() => handleVerify()}
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
