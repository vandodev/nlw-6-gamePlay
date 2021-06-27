import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

export function AppointmentCreate() {
  return (
    <Background>
      <Header title={"Agendar partida"} />

      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginTop: 36, marginBottom: 18 },
        ]}
      >
        Categoria
      </Text>
    </Background>
  );
}