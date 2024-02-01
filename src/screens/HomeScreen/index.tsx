import { View } from "react-native";
import { styles } from "./styles";
import Profile from "../../components/Profile";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
            </View>
        </View>
    );
};

export default HomeScreen;
