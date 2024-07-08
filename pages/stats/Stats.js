import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Bell, profile, style } from "../../assets";
import ModalAlt from "../../components/Modal";
const window = Dimensions.get("window");
const { width, height } = window;
const Stats = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(true);

    const closeModal = () => {
        setModalVisible(false);
    };
    const data = [
        {
            id: 1,
            icon: <AntDesign name="apple1" size={24} color="black" />,
            title: "Apple",
            date: "May 8 , 2022",
            amount: "- $1,000.97",
        },
        {
            id: 2,
            icon: <AntDesign name="apple1" size={24} color="black" />,
            title: "Apple",
            date: "May 8 , 2022",
            amount: "- $1,000.97",
        },
        {
            id: 3,
            icon: <AntDesign name="apple1" size={24} color="black" />,
            title: "Apple",
            date: "May 8 , 2022",
            amount: "- $1,000.97",
        },
        {
            id: 4,
            icon: <AntDesign name="apple1" size={24} color="black" />,
            title: "Apple",
            date: "May 8 , 2022",
            amount: "- $1,000.97",
        },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subcontainer}>
                    <Image source={profile} style={styles.appIcon} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 18,

                                fontWeight: "bold",
                            }}
                        >
                            Welcome back!
                        </Text>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                            }}
                        >
                            Sandy Chungus
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Image
                        source={Bell}
                        style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                    <Entypo
                        name="dots-three-vertical"
                        size={20}
                        color="white"
                    />
                </View>
            </View>
            <ImageBackground source={style} style={styles.background}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.circleContainer}>
                        {/* Top Left Gradient */}
                        <LinearGradient
                            colors={["#2D2E53", "#201F3F"]}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={[styles.circleSegment, styles.topLeft]}
                        />

                        <LinearGradient
                            colors={["#0DA6C2", "#61DE70"]}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={[styles.circleSegment, styles.topRight]}
                        />

                        <LinearGradient
                            colors={["#9327F0", "#320DAF"]}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={[styles.circleSegment, styles.bottom]}
                        />
                        <View style={styles.innerCircle}>
                            <Text
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: 26,
                                    top: "35%",
                                    left: "25%",
                                }}
                            >
                                $5,643.50
                            </Text>
                            <Text
                                style={{
                                    color: "#7B78AA",

                                    fontSize: 16,
                                    top: "35%",
                                    left: "25%",
                                }}
                            >
                                Available Balance
                            </Text>
                        </View>
                    </View>
                </View>

                <Text
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 24,
                        marginHorizontal: 20,
                        marginVertical: 5,
                        textAlign: "left",
                        position: "relative",
                        top: -100,
                    }}
                >
                    My transaction
                </Text>

                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Wallet")}
                            style={[
                                styles.listItem,
                                {
                                    justifyContent: "space-between",
                                    padding: 20,
                                    marginVertical: 8,
                                    marginHorizontal: 8,
                                    borderRadius: 50,
                                },
                            ]}
                        >
                            <View style={styles.listItem}>
                                <View
                                    style={{
                                        backgroundColor: "white",
                                        borderRadius: 50,
                                        padding: 10,
                                        marginRight: 20,
                                    }}
                                >
                                    {item.icon}
                                </View>
                                <View>
                                    <Text style={styles.itemTitle}>
                                        {item.title}
                                    </Text>
                                    <Text style={{ color: "#7B78AA" }}>
                                        {item.date}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderColor: "white",
                                    borderRadius: 50,
                                    padding: 10,
                                }}
                            >
                                <Text style={{ color: "white" }}>
                                    {item.amount}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.list}
                    style={{ position: "relative", top: -100, minHeight: 300 }}
                />
            </ImageBackground>
            <ModalAlt
                modalVisible={modalVisible}
                closeModal={closeModal}
                handleSubmit={closeModal}
            />
        </SafeAreaView>
    );
};

export default Stats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#19173D",
    },
    subcontainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    innerCircle: {
        position: "absolute",
        top: "10%", // Adjust as needed
        left: "10%",
        width: "80%",
        height: "80%",
        borderRadius: 180,
        backgroundColor: "#19173D",
    },

    appIcon: {
        height: 50,
        width: 50,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginBottom: 140,
    },
    background: {
        flex: 1,
        width: width,
        height: height,
    },

    list: {
        width: width,
    },
    listItem: {
        backgroundColor: "#19173D",
        flexDirection: "row",

        alignItems: "center",
    },
    itemTitle: {
        fontSize: 20,
        color: "white",
        fontWeight: "600",
    },
    circleContainer: {
        position: "relative",
        top: -140, // Adjust as needed
        width: 300,
        height: 300,
        borderRadius: 150,
    },
    circleSegment: {
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    topLeft: {
        width: "60%",
        height: "50%",
        borderTopLeftRadius: 150,
        left: 0,
        top: 0,
    },
    topRight: {
        width: "50%",
        height: "50%",
        borderTopRightRadius: 150,
        right: 0,
        top: 0,
    },
    bottom: {
        width: "100%",
        height: "50%",
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        bottom: 2,
        left: 0,
    },
});
