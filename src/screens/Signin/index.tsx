import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import Illustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function Signin() {
    return (
        <View style={styles.container}>
            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent
            />
            <Image
                source={Illustration}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    fácilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon title="Entrar com discord" activeOpacity={0.7} />
            </View>
        </View>
    );
}
