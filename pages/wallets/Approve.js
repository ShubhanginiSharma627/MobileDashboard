import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import {
    ApBg,
    BottomBg,
    folder,
    internet,
    paint,
    pencil,
    play,
    store,
} from "../../assets";
const Approve = () => {
    const icons = [
        { name: "EMI", icon: folder },
        { name: "Subscription", icon: pencil },
        { name: "Group", icon: paint },
        { name: "Internet", icon: internet },
        { name: "Banking", icon: play },
        { name: "Store", icon: store },
    ];
    return (
        <View style={styles.container}>
            <Image
                source={ApBg}
                style={{ width: 390, height: 450, marginLeft: 10 }}
            />
            <View style={styles.content}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 10,
                        marginBottom: 10,
                    }}
                >
                    <Text style={styles.sectionTitle}>Recents</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="dots-grid"
                            size={24}
                            color="#909AFF"
                        />
                        <MaterialCommunityIcons
                            name="dots-grid"
                            size={24}
                            color="#909AFF"
                        />
                    </View>
                </View>
                <View style={styles.grid}>
                    {icons.map((item, index) => (
                        <View key={index} style={styles.gridItem}>
                            <Image source={item.icon} style={styles.icon} />
                            <Text style={styles.iconLabel}>{item.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <ImageBackground
                source={BottomBg}
                resizeMode="contain"
                style={{
                    width: 390,
                    height: 300,
                    position: "relative",
                    top: -470,
                    marginLeft: 15,
                }}
            >
                <View style={{ position: "relative", top: 150 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginHorizontal: 50,
                        }}
                    >
                        {[15, 14, 13, 12, 11].map((day, index) => (
                            <View key={index}>
                                <View style={{ height: 20 }}>
                                    <View style={styles.triangleCorner} />
                                </View>

                                <LinearGradient
                                    colors={["#282A51", "#8485FB"]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={[
                                        styles.dateBox,
                                        styles.shadow,
                                        {
                                            height: 130 - index * 10,
                                            justifyContent: "flex-end",
                                        },
                                    ]}
                                >
                                    <Text style={styles.dateText}>{day}</Text>
                                    {day === 15 && (
                                        <Text style={styles.monthText}>
                                            May
                                        </Text>
                                    )}
                                </LinearGradient>
                            </View>
                        ))}
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Approve;

const styles = StyleSheet.create({
    dateBox: {
        width: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 50,
        alignItems: "center",
        paddingVertical: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "#262450",
    },
    svgContainer: {
        backgroundColor: "#262450",
        height: 100,
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 100,
        borderTopWidth: 100,
        borderRightColor: "transparent",
        borderTopColor: "red",
        transform: [{ rotate: "180deg" }],
    },
    content: {
        padding: 20,
        marginLeft: 10,
        position: "relative",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        top: -400,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#7B78AA",
        marginBottom: 10,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    dateText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
    monthText: {
        fontSize: 14,
        color: "white",
    },
    gridItem: {
        width: "28%",
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        paddingVertical: 20,
        alignItems: "center",
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    shadow: {
        shadowColor: "#88BAFF",
        shadowOffset: { width: 30, height: 30 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 20,
    },
    icon: {
        width: 80,
        height: 40,
    },
    iconLabel: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000000",
    },
});
