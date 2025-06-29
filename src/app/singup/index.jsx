import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image } from "react-native";
import { Button, TextInput } from "../../components";
import { service } from "../../services";
import { isValidEmail } from "./util";

import img from "../../assets/image/img1.png";
import imgOK from "../../assets/image/ok.png";

import * as S from "./styles";

export default function HomeScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    if (name?.length < 5) {
      return Alert.alert("Atenção!", "O nome precisa ter mais de 4 letras!");
    }

    if (!isValidEmail(email)) {
      return Alert.alert("Atenção!", "Email inválido!");
    }

    if (password?.length < 5) {
      return Alert.alert("Atenção!", "A senha precisa ter mais de 4 letras!");
    }

    setIsLoading(true);

    const response = await service.api.auth.singUp({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    setIsLoading(false);

    console.log("rest-full-api>>>>>>    ", response);

    if (response?.status == 201) {
      Alert.alert(
        "Sucesso!",
        "Conta criada, volte ao login para inciar sessão!",
        [
          {
            text: "Sim",
            onPress: () => router.back(),
          },
        ]
      );
    } else {
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
        <S.HeaderTitle2>Criar Conta</S.HeaderTitle2>
      </S.Header>
      <S.ContentContainer>
        <S.ContentContainerWhite>
          <TextInput
            value={name}
            marginBottom={20}
            onChangeText={setName}
            title="Nome da Empresa*"
            placeholder="ex.: Banco BAI"
            placeholderTextColor="#acacac"
          />
          <TextInput
            value={email}
            title="Email*"
            marginBottom={20}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#acacac"
            placeholder="ex.: unitel@gmail.com"
          />
          <TextInput
            title="Senha*"
            value={password}
            marginBottom={25}
            secureTextEntry={true}
            onChangeText={setPassword}
            placeholder="ex.: tesreh3773!."
            placeholderTextColor="#acacac"
          />
          <Button
            title="Criar"
            onPress={() => {
              handleCreate();
            }}
            icon={
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 5,
                }}
                source={imgOK}
                resizeMode="contain"
              />
            }
            disabled={isLoading}
          />
        </S.ContentContainerWhite>
      </S.ContentContainer>
      <S.Footer>
        <S.LabelButton onPress={() => router.back()}>
          <S.LabelButtonText>{"<"} Voltar ao Login </S.LabelButtonText>
        </S.LabelButton>
      </S.Footer>
    </S.Container>
  );
}
