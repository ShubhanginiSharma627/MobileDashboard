import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { cup } from "../../assets";
import ModalAlt from "../../components/Modal";

const Access = () => {
    const [activeTab, setActiveTab] = useState("Sat");
    const [modalVisible, setModalVisible] = useState(true);

    const closeModal = () => {
        setModalVisible(false);
    };
    const tabs = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const handlePress = (index, icon) => {
        console.log(`Icon ${index + 1} Pressed!`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                {[15, 14, 13, 12, 11].map((day, index) => (
                    <LinearGradient
                        key={index}
                        colors={["#282A51", "#8485FB"]}
                        start={[0, 0]}
                        end={[1, 1]}
                        style={[
                            styles.dateBox,
                            styles.shadow,
                            { height: 130 - index * 10 },
                        ]}
                    >
                        <Text style={styles.dateText}>{day}</Text>
                        {day === 15 && (
                            <Text style={styles.monthText}>May</Text>
                        )}
                    </LinearGradient>
                ))}
            </View>
            <View style={styles.periodContainer}>
                <View style={[styles.periodBox, styles.elevation]}>
                    <Text style={styles.periodText}>Period:</Text>
                    <Text style={styles.periodText}>Last 30 days</Text>
                    <View style={styles.arrowContainer}>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={{ position: "relative", top: -25 }}>
                    {[1, 2, 3].map((item, index) => (
                        <View
                            key={index}
                            style={[styles.card, styles.elevation]}
                        >
                            <View style={styles.cardContent}>
                                <View style={styles.cardLeft}>
                                    <Image
                                        source={cup}
                                        style={styles.cardImage}
                                    />
                                    <Text style={styles.cardCategory}>
                                        Restaurants
                                    </Text>
                                </View>
                                <View style={styles.cardRight}>
                                    <Text style={styles.cardPercentage}>
                                        25%
                                    </Text>
                                    <Text style={styles.cardAmount}>
                                        $ 1593,58
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={styles.tabContainer}>
                    {tabs.map((tab, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    tab === activeTab && styles.activeTab,
                                ]}
                            >
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <ModalAlt
                modalVisible={modalVisible}
                closeModal={closeModal}
                handleSubmit={closeModal}
            />
        </View>
    );
};

export default Access;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262450",
    },
    dateContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "flex-end",
        marginHorizontal: 50,
        marginTop: 30,
    },
    dateBox: {
        width: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 50,
        alignItems: "center",
        paddingVertical: 20,
    },
    shadow: {
        shadowColor: "#88BAFF",
        shadowOffset: { width: 30, height: 30 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 20,
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
    periodContainer: {
        position: "relative",
        top: -30,
    },
    periodBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#A1F3F9",
        padding: 20,
        marginHorizontal: 40,
        borderRadius: 16,
    },
    periodText: {
        color: "#31456A",
        fontSize: 18,
        fontStyle: "italic",
    },
    arrowContainer: {
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
    },
    cardContainer: {
        backgroundColor: "#19173D",
        flex: 1,
        paddingBottom: 10,
    },
    elevation: {
        elevation: 25,
        shadowColor: "white",
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 0.4,
        shadowRadius: 30,
    },
    card: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardLeft: {},
    cardImage: {
        width: 30,
        height: 20,
        marginBottom: 10,
    },
    cardCategory: {
        color: "#31456A",
        fontSize: 14,
        fontStyle: "italic",
    },
    cardRight: {},
    cardPercentage: {
        color: "#31456A",
        fontSize: 16,
        fontStyle: "italic",
        marginBottom: 10,
        textAlign: "right",
    },
    cardAmount: {
        color: "#31456A",
        fontSize: 18,
        fontStyle: "italic",
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40,
    },
    tabText: {
        color: "#7B78AA",
        fontWeight: "400",
    },
    activeTab: {
        color: "#00D7FF",
        fontWeight: "700",
    },
});
