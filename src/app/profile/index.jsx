import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image } from "react-native";
import { Button, TextInput } from "../../components";
import { service } from "../../services";
import { useApp } from "../../store/zustend";
import { isValidEmail } from "../singup/util";

import img from "../../assets/image/img1.png";
import img2 from "../../assets/image/save.png";

import * as S from "./styles";

export default function ProfileScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUser, user } = useApp();

  const handleAdd = async () => {
    if (name?.length < 5) {
      return Alert.alert("Atenção!", "O nome precisa ter mais de 4 letras!");
    }

    if (!isValidEmail(email)) {
      return Alert.alert("Atenção!", "O email é inválido!");
    }

    if (password)
      if (password?.length < 4) {
        return Alert.alert(
          "Atenção!",
          "A senha precisa ter mais de 4 carcateres!"
        );
      }

    setIsLoading(true);

    const response = await service.api.user.update({
      data: {
        name,
        email,
        password,
        id: user?.user?.id,
      },
    });

    setIsLoading(false);

    if (response?.status == 200) {
      setUser({ ...user, user: response?.data });

      Alert.alert("Sucesso!", "Atualizado com sucesso!", [
        {
          text: "Sim",
          onPress: () => router.back(),
        },
      ]);
    } else {
      Alert.alert("Erro!", "Tente novamente mais tarde!");
    }
  };

  useFocusEffect(
    useCallback(() => {
      setName(user?.user?.name);
      setEmail(user?.user?.email);
    }, [user])
  );

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
        <S.HeaderTitle2>Perfil</S.HeaderTitle2>
      </S.Header>
      <S.ContentContainer>
        <S.ContentContainerWhite>
          <TextInput
            value={name}
            onChangeText={setName}
            marginBottom={20}
            title="Nome*"
            placeholder="ex.: Renato Manuel"
            placeholderTextColor="#acacac"
          />
          <TextInput
            value={email}
            marginBottom={20}
            onChangeText={setEmail}
            title="Email*"
            placeholder="ex.: antonio@gmail.com"
            placeholderTextColor="#acacac"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            title="Digite uma nova senha para alterar!"
            placeholderTextColor="#acacac"
            secure={true}
          />
        </S.ContentContainerWhite>
      </S.ContentContainer>
      <S.Footer>
        <Button
          disabled={isLoading}
          title="Salvar"
          onPress={() => {
            handleAdd();
          }}
          icon={
            <Image
              resizeMode="contain"
              source={img2}
              style={{
                width: 25,
                height: 25,
                marginRight: 10,
              }}
            />
          }
        />
      </S.Footer>
    </S.Container>
  );
}
