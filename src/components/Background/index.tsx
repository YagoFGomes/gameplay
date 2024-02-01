import { ReactNode } from "react";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
    children: ReactNode;
}

export function Background({ children }: Props) {
    const { secondary80, secondary100 } = theme.colors;
    return (
        <LinearGradient
            colors={[secondary80, secondary100]}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    );
}
