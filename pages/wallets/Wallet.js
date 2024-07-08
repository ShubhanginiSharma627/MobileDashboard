import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomTopTabNavigator from "../../components/Tabs";
import Access from "./Access";
import Approve from "./Approve";
const AccessScreen = () => <Access />;
const ConsentScreen = () => (
    <View style={styles.screen}>
        <Text>Consent Screen</Text>
    </View>
);
const ApproveScreen = () => <Approve />;

const tabs = [
    { name: "Access", label: "Access", component: AccessScreen },
    { name: "Consent", label: "Consent", component: ConsentScreen },
    { name: "Approve", label: "Approve", component: ApproveScreen },
];
const Wallet = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subcontainer}>
                <AntDesign name="left" size={20} color="white" />
                <Text
                    style={{
                        color: "white",
                        fontSize: 24,
                        paddingLeft: 10,
                        fontWeight: "bold",
                    }}
                >
                    Statistics
                </Text>
            </View>

            <CustomTopTabNavigator
                tabs={tabs}
                tabBarStyle={{
                    backgroundColor: "#0C0C22",
                }}
                activeTabStyle={{ backgroundColor: "#131225" }}
                inactiveTabStyle={{ backgroundColor: "#131225" }}
                activeLabelStyle={{ color: "#FFF" }}
                inactiveLabelStyle={{ color: "#2CDDF5" }}
            />
        </SafeAreaView>
    );
};

export default Wallet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262450",
    },
    subcontainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginBottom: 140,
    },
});
