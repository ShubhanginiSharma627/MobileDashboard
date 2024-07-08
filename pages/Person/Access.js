import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { arrow, card, home, plus, set } from "../../assets";
import ReusableButton from "../../components/buttons";
import CircularMenu from "../../components/wheel";
const Access = () => {
    const icons = [home, plus, card, set];
    const navigation = useNavigation();
    const handlePress = (index, icon) => {
        console.log(`Icon ${index + 1} Pressed!`);
    };
    const handleonePress = (label) => {
        if (label === "Email") {
            navigation.navigate("Home");
        } else if (label === "Bills") {
            navigation.navigate("Wallet");
        } else if (label === "Consent") {
            navigation.navigate("Profile");
        } else if (label === "Business Card") {
            navigation.navigate("Stats");
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                {icons.map((icon, index) => (
                    <ReusableButton
                        key={index}
                        src={icon}
                        onPress={() => handlePress(index)}
                    />
                ))}
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#19173D",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 100,
                }}
            >
                <CircularMenu handlePress={handleonePress} />
                <Text
                    style={{
                        position: "relative",
                        top: -340,
                        right: 30,
                        transform: [{ rotate: "-70deg" }],
                        color: "black",
                        fontSize: 20,
                        letterSpacing: 1.35,
                    }}
                >
                    Email
                </Text>
                <Text
                    style={{
                        position: "relative",
                        top: -430,
                        right: 70,
                        transform: [{ rotate: "-103deg" }],
                        color: "black",
                        fontSize: 20,
                        letterSpacing: 1.35,
                    }}
                >
                    Bills
                </Text>
                <Text
                    style={{
                        position: "relative",
                        top: 15,
                        left: 35,
                        transform: [{ rotate: "50deg" }],
                        color: "black",
                        fontSize: 20,
                        letterSpacing: 1.35,
                    }}
                >
                    Consent
                </Text>
                <Text
                    style={{
                        position: "relative",
                        top: -85,
                        left: 85,
                        transform: [{ rotate: "91deg" }],
                        color: "black",
                        fontSize: 20,
                        letterSpacing: 1.35,
                    }}
                >
                    Business Card
                </Text>
                <Image
                    source={arrow}
                    style={{
                        width: 80,
                        height: 80,
                        position: "relative",
                        top: -255,
                        left: 165,
                    }}
                />
            </View>
        </View>
    );
};

export default Access;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262450",
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 50,
        marginVertical: 30,
    },
});
