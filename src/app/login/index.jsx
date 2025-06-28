import { useRouter } from "expo-router";
import { useState } from "react";
import { Image } from "react-native";
import { Button, TextInput } from "../../components";

import img from "../../assets/image/img1.png";
import loginImg from "../../assets/image/login.png";

import * as ImagePicker from "expo-image-picker";
import * as S from "./styles";

export default function HomeScreen() {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState(null);

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

  return (
    <S.Container>
      <S.Header>
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
        <S.HeaderTitle2>Login</S.HeaderTitle2>
      </S.Header>
      <S.ContentContainer>
        <S.ContentContainerWhite>
          <TextInput
            marginBottom={20}
            title="Email da Empresa"
            placeholder="ex.: unitel@gmail.com"
            placeholderTextColor="#acacac"
          />
          <TextInput
            title="Senha"
            marginBottom={30}
            secureTextEntry={true}
            placeholder="ex.: tesreh3773!."
            placeholderTextColor="#acacac"
          />
          <Button
            title="Entrar"
            icon={
              <Image
                resizeMode="contain"
                source={loginImg}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 10,
                }}
              />
            }
          />
        </S.ContentContainerWhite>
      </S.ContentContainer>
      <S.Footer>
        <S.LabelButton onPress={() => router.navigate("singup/")}>
          <S.LabelButtonText>Criar Conta {">"}</S.LabelButtonText>
        </S.LabelButton>
      </S.Footer>
    </S.Container>
  );
}
