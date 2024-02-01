import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import { SigninScreen } from "../screens/SigninScreen";
import { theme } from "../global/styles/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.secondary100,
                },
            }}
        >
            <Stack.Screen name="SignIn" component={SigninScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}
