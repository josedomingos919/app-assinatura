import { useRouter } from "expo-router";
import { useState } from "react";
import { Image } from "react-native";
import { Button, TextInput } from "../../components";

import img from "../../assets/image/img1.png";
import imgOK from "../../assets/image/ok.png";

import * as S from "./styles";

export default function HomeScreen() {
  const router = useRouter();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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
