import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import Avatar from "../Avatar";

function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/yagofgomes.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Olá,</Text>
                    <Text style={styles.username}>Yagod</Text>
                </View>
                <Text style={styles.message}>hoje é dia de vitória</Text>
            </View>
        </View>
    );
}

export default Profile;
