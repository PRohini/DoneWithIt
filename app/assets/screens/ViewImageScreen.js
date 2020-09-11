import { Image, StyleSheet, View } from "react-native";
import React from 'react';

import colors from '../config/colors';

function ViewImageScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image source={require("../../assets/chair.jpeg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,

    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        left: 30
    },
    image: {
        flex: 1,
        width: 100,
        height: 100,
        position: "relative",

    }
})
export default ViewImageScreen;