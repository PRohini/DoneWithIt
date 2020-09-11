import { ImageBackground, StyleSheet, Button, View, Image, Text } from "react-native";
import React, { Component } from 'react';


class WelcomeScreen extends Component {
    render() {
        return (
            <ImageBackground style={styles.background} source={require('../../assets/background.jpeg')}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoImage} source={require('../../assets/logo.jpeg')} />
                    <Text>Sell,what you don't need.</Text>
                </View>
                <Button style={styles.loginButton} title='Login' />
                <Button style={styles.registerButton} title='Register' />
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        backgroundColor: "#fc5c65",
        width: "100%",
        height: 60,
    },
    logoImage: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    registerButton: {
        backgroundColor: "#FF0000",
        width: "100%",
        height: 60,
    }
})
export default WelcomeScreen;