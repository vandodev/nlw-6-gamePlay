import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `https://logosmarcas.net/wp-content/uploads/2020/12/Discord-Logo.png`;

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
