// import { Signin } from "./src/screens/Signin";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
    Rajdhani_500Medium,
    Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import React, { useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";

import { Signin } from "./src/screens/Signin";
import { StatusBar } from "expo-status-bar";
import { Background } from "./src/components/Background";

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

    return (
        <Background>
            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent
            />
            <Signin />
        </Background>
    );
}
