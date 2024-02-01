import React from "react";
import { styles } from "./styles";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

interface Props {
    urlImage: string;
}

function Avatar({ urlImage }: Props) {
    const { secondary50, secondary70 } = theme.colors;
    return (
        <LinearGradient
            colors={[secondary50, secondary70]}
            style={styles.container}
        >
            <Image source={{ uri: urlImage }} style={styles.avatar} />
        </LinearGradient>
    );
}

export default Avatar;
