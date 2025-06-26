import { useRouter } from "expo-router";
import { useState } from "react";
import { Image } from "react-native";
import { Button, TextInput } from "../../components";

import img4 from "../../assets/image/assinatura.jpeg";
import verifyImg from "../../assets/image/comparar.png";
import removeImg from "../../assets/image/remover.png";

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
          {!data?.length ? (
            <S.ListAssings>
              {[
                {
                  bi: "938399LA83939",
                  name: "Antonio Miguel",
                  signature: "ksjdkskjdkksjd",
                },
                {
                  bi: "938399LA83d939",
                  name: "Antonio Hunday",
                  signature: "ksjdkskjdkksjd",
                },
                {
                  bi: "938399LA83939",
                  name: "Antonio Tucson",
                  signature: "ksjdkskjdkksjd",
                },
              ].map((item, index, data) => {
                const isLast = data?.length - 1 == 0;

                return (
                  <S.ContainerAssing key={"te" + index}>
                    <Image
                      resizeMode="contain"
                      source={img4}
                      style={{
                        width: 100,
                        height: 100,
                        marginLeft: -10,
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
                          router.navigate("/create");
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
                          router.navigate("/create");
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
      </S.Footer>
    </S.Container>
  );
}
