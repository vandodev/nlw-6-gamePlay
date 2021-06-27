import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { CategorySelect } from "../../components/CategorySelect";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
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

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />
    </Background>
  );
}
