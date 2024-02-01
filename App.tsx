// import { Signin } from "./src/screens/Signin";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
    Rajdhani_500Medium,
    Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
// import AppLoading from "expo-app-loading";

// export default function App() {
//     const [fontsLoaded] = useFonts({
//         Inter_400Regular,
//         Inter_500Medium,
//         Rajdhani_500Medium,
//         Rajdhani_700Bold,
//     });

//     if (!fontsLoaded) {
//         return <AppLoading />;
//     }
//     return <Signin />;
// }

import React, { useCallback, useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";

import { Signin } from "./src/screens/Signin";

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_500Medium,
        Rajdhani_700Bold,
    });

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return <Signin />;
}
