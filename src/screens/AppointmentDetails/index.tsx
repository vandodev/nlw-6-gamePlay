import React from "react";
import { View } from "react-native";
import { Background } from "../../components/Background";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title={"Detalhes"}
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
    </Background>
  );
}
