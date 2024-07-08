// ReusableButton.js
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const ReusableButton = ({ onPress, src }) => {
    return (
        <TouchableOpacity
            style={[styles.button, styles.elevation]}
            onPress={onPress}
        >
            <Image source={src} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    elevation: {
        elevation: 25,
        shadowColor: "white",
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 0.4,
        shadowRadius: 30,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
});

export default ReusableButton;
