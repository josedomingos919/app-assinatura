import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image } from "react-native";
import { Button, TextInput } from "../../components";
import { service } from "../../services";
import { useApp } from "../../store/zustend";

import emptyImg from "../../assets/image/empty_img.png";
import img from "../../assets/image/img1.png";
import img2 from "../../assets/image/img5.png";

import * as ImagePicker from "expo-image-picker";
import * as S from "./styles";

export default function HomeScreen() {
  const router = useRouter();

  const [bi, setBi] = useState("");
  const [name, setName] = useState("");
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, user } = useApp();

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

  const handleAdd = async () => {
    if (name?.length < 5) {
      return Alert.alert("Atenção!", "O nome precisa ter mais de 4 letras!");
    }

    if (bi?.length < 14) {
      return Alert.alert("Atenção!", "O BI precisa ter mais de 14 letras!");
    }

    if (!imageData?.uri) {
      return Alert.alert("Atenção!", "Imagem não pode ser nula!");
    }

    setIsLoading(true);

    const response = await service.api.user.createSignature({
      data: {
        bi,
        name,
        userId: user?.user?.id,
        img: imageData?.base64,
      },
    });

    setIsLoading(false);

    if (response?.status == 201) {
      Alert.alert("Sucesso!", "Assinatura criada com sucesso!", [
        {
          text: "Sim",
          onPress: () => router.back(),
        },
      ]);
    } else if (response?.data?.error?.meta?.target?.includes("bi")) {
      Alert.alert(
        "Atenção!",
        "Assinante já existe, o campo BI está duplicado!"
      );
    } else {
      console.log("lllllllllllllll     ", response);
      Alert.alert("Erro!", "Tente novamente mais tarde!");
    }
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
        <S.HeaderTitle2>Criar Assinatura</S.HeaderTitle2>
      </S.Header>
      <S.ContentContainer>
        <S.ContentContainerWhite>
          <TextInput
            value={name}
            onChangeText={setName}
            marginBottom={20}
            title="Nome do Assinante"
            placeholder="ex.: Renato Manuel"
            placeholderTextColor="#acacac"
          />
          <TextInput
            value={bi}
            onChangeText={setBi}
            marginBottom={20}
            title="Nº BI"
            placeholder="ex.: 007914682LA043"
            placeholderTextColor="#acacac"
          />
          <S.Title>Foto da Assinatura</S.Title>
          <S.UploadButton onPress={() => pickImage()}>
            <Image
              resizeMode="contain"
              source={imageData?.uri ? { uri: imageData?.uri } : emptyImg}
              style={{
                width: 80,
                height: 80,
              }}
            />
            {!imageData?.uri ? (
              <S.TitleUploadButton>Carregar Imagem</S.TitleUploadButton>
            ) : (
              ""
            )}
          </S.UploadButton>
        </S.ContentContainerWhite>
      </S.ContentContainer>
      <S.Footer>
        <Button
          disabled={isLoading}
          title="Adicionar"
          onPress={() => {
            handleAdd();
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
