import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Image } from "react-native";
import { Button, TextInput } from "../../components";
import { service } from "../../services";
import { useApp } from "../../store/zustend";
import { isValidEmail } from "../singup/util";

import img from "../../assets/image/img1.png";
import loginImg from "../../assets/image/login.png";

import * as S from "./styles";

export default function HomeScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkData, setCheckData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser, user } = useApp();

  const handleLogin = async () => {
    if (!isValidEmail(email)) {
      return Alert.alert("Atenção!", "Email inválido!");
    }

    if (password?.length < 5) {
      return Alert.alert("Atenção!", "A senha precisa ter mais de 4 letras!");
    }

    setIsLoading(true);

    const response = await service.api.auth.singIn({
      data: {
        email: email,
        password: password,
      },
    });

    setIsLoading(false);

    if (response?.status == 200) {
      setUser(response?.data);
      await service.cache.secureStorage.set("user", response?.data);

      router.replace("/home");
    } else {
      Alert.alert(
        "Atenção!",
        "Falha ao fazer login, tente novamente mais tarde!"
      );
    }

    console.log("login-in-app>>>>>>    ", response);
  };

  const checkSession = async () => {
    const result = await service.cache.secureStorage.get("user");
    console.log("result     ", result);
    if (result?.user?.id) {
      setUser(result);
      router.replace("/home");
    } else {
      setCheckData(true);
    }
  };

  if (checkData == null) {
    checkSession();

    return (
      <S.Container>
        <S.LoadingContainer>
          <ActivityIndicator color="#4ce5b1" size="large" />
        </S.LoadingContainer>
      </S.Container>
    );
  }

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
            value={email}
            onChangeText={setEmail}
            marginBottom={20}
            keyboardType="email-address"
            title="Email da Empresa"
            placeholder="ex.: unitel@gmail.com"
            placeholderTextColor="#acacac"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            title="Senha"
            marginBottom={30}
            secureTextEntry={true}
            placeholder="ex.: tesreh3773!."
            placeholderTextColor="#acacac"
          />
          <Button
            onPress={() => {
              handleLogin();
            }}
            disabled={isLoading}
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
