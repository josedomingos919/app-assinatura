import { useRouter } from "expo-router";
import { useState } from "react";

import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import img from "../assets/image/img1.png";
import img3 from "../assets/image/img2.png";
import img1 from "../assets/image/img3.png";
import img2 from "../assets/image/img5.png";

export default function HomeScreen() {
  const router = useRouter();

  const [data, setData] = useState([]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EFEFF4",
      }}
    >
      <View
        style={{
          height: 268,
          padding: 20,
          paddingTop: 75,
          backgroundColor: "#4CE5B1",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "white",
            }}
          >
            Olá, Bem-Vindo!
          </Text>
          <Image
            resizeMode="contain"
            source={img}
            style={{
              height: 50,
              marginTop: -18,
              width: 60,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Comparador xi53
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 20,
            marginTop: -115,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              padding: 10,
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#F6F6F6",
              borderWidth: 1,
              borderColor: "#e8e8e8",
              marginBottom: 20,
            }}
          >
            <Image
              resizeMode="contain"
              source={img3}
              style={{
                height: 30,
                width: 30,
                transform: "rotate(-50deg)",
              }}
            />
            <TextInput
              style={{
                flex: 1,
                marginLeft: 10,
                color: "#acacac",
              }}
              key="teste7383"
              placeholderTextColor="#acacac"
              placeholder="Buscar assinate"
            />
          </View>
          {data?.length ? null : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                resizeMode="contain"
                source={img1}
                style={{ marginBottom: 20 }}
              />
              <Text
                style={{
                  color: "#c9c9c9",
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                Opps!!
              </Text>
              <Text
                style={{
                  color: "#c9c9c9",
                }}
              >
                Nenhuma assinatura encontrada
              </Text>
              <Text
                style={{
                  color: "#c9c9c9",
                  marginBottom: 5,
                }}
              >
                Clique em adicionar.
              </Text>
            </View>
          )}
        </View>
      </View>
      <View
        style={{
          padding: 15,
          paddingTop: 0,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            width: "100%",
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4CE5B1",
            borderWidth: 1,
            borderColor: "#e6e6e6",
          }}
        >
          <Image
            resizeMode="contain"
            source={img2}
            style={{
              width: 49,
              height: 35,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Adicionar Assinatura
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
