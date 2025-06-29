import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, Alert, Image } from "react-native";
import { Button, ConfirmationModal, TextInput } from "../../components";
import { service } from "../../services";
import { useApp } from "../../store/zustend";
import { compararStringsLimpa } from "./util";

import verifyImg from "../../assets/image/comparar.png";
import removeImg from "../../assets/image/remover.png";
import settingImg from "../../assets/image/setting.png";

import img from "../../assets/image/img1.png";
import img3 from "../../assets/image/img2.png";
import img1 from "../../assets/image/img3.png";
import img2 from "../../assets/image/img5.png";

import * as S from "./styles";

export default function HomeScreen() {
  const router = useRouter();

  const { setUser, user } = useApp();

  const [search, setSearch] = useState("");
  const [signature, setSignature] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    setModalVisible(false);
    handleConfirmDelete();
  };

  const getFilteredData = () => {
    if (search) {
      return data.filter(({ name }) => compararStringsLimpa(search, name));
    } else return data;
  };

  const handleDelete = () => {
    setModalVisible(true);
  };

  const handleLogout = async () => {
    setUser(null);
    await service.cache.secureStorage.remove("user");

    router.replace("/login");

    console.log("terminou");
  };

  const getSignatures = async () => {
    setIsLoading(true);

    const response = await service.api.user.getSignature({
      param: { userId: user?.user?.id },
    });

    console.log("Assinaturas..............: ", response, user?.user?.id);

    setIsLoading(false);

    if (response?.status == 200) {
      setData(response?.data);
    } else {
      setData([]);
    }
  };

  const handleConfirmDelete = async () => {
    setIsLoading(true);

    const response = await service.api.user.deleteSignature({
      param: { id: signature?.id },
    });

    if (response?.status == 200) {
      Alert.alert("Sucesso", "Assinatura eliminada com sucesso!");
    } else {
      Alert.alert("Erro", "Falha ao eliminar assinatura, tente mais tarde!");
    }

    getSignatures();
  };

  useFocusEffect(
    useCallback(() => {
      getSignatures();
    }, [])
  );

  return (
    <S.Container>
      <S.Header>
        <S.HeaderLeft>
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
        </S.HeaderLeft>
        <S.HeaderRight>
          <S.SettingButton>
            <Image
              style={{
                width: 35,
                height: 35,
              }}
              resizeMode="contain"
              source={settingImg}
            />
          </S.SettingButton>
        </S.HeaderRight>
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
            value={search}
            key="teste7383"
            onChangeText={setSearch}
            placeholder="Buscar assinatura"
            placeholderTextColor="#acacac"
          />
          {isLoading ? (
            <S.LoaderContainer>
              <ActivityIndicator color="#fec130" size="large" />
            </S.LoaderContainer>
          ) : getFilteredData()?.length > 0 ? (
            <S.ListAssings
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {getFilteredData().map((item, index, data) => {
                const isLast = data?.length - 1 == 0;

                return (
                  <S.ContainerAssing key={"te" + index}>
                    <Image
                      resizeMode="contain"
                      source={{ uri: `data:image/jpeg;base64,${item?.img}` }}
                      style={{
                        flex: 1,
                        height: 100,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        backgroundColor: "transparent",
                      }}
                    />
                    <S.InfoList>
                      <S.LabelName style={{ marginBottom: 0 }}>
                        {item?.name}
                      </S.LabelName>
                      <S.LabelName style={{ fontWeight: "bold" }}>
                        {item?.bi}
                      </S.LabelName>
                      <Button
                        title="Verificar"
                        style={{
                          marginBottom: 10,
                        }}
                        onPress={() => {
                          router.navigate("/verify");
                        }}
                        icon={
                          <Image
                            resizeMode="contain"
                            source={verifyImg}
                            style={{
                              width: 20,
                              height: 20,
                              marginRight: 5,
                            }}
                          />
                        }
                      />
                      <Button
                        icon={
                          <Image
                            resizeMode="contain"
                            source={removeImg}
                            style={{
                              width: 20,
                              height: 20,
                              marginRight: 5,
                            }}
                          />
                        }
                        style={{
                          backgroundColor: "#ff000094",
                          marginBottom: 10,
                        }}
                        title="Remover"
                        onPress={() => {
                          setSignature(item);
                          handleDelete();
                        }}
                      />
                    </S.InfoList>
                  </S.ContainerAssing>
                );
              })}
            </S.ListAssings>
          ) : (
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
        <S.LabelButton onPress={() => handleLogout()}>
          <S.LabelButtonText>{"<"} Terminar Sessão </S.LabelButtonText>
        </S.LabelButton>
      </S.Footer>
      <ConfirmationModal
        visible={modalVisible}
        message="Tem certeza que deseja eliminar?"
        onCancel={() => setModalVisible(false)}
        onConfirm={handleConfirm}
      />
    </S.Container>
  );
}
