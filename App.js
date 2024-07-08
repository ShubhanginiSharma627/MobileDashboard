import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { logoImg } from "./assets";
import Person from "./pages/Person/Person";
import Stats from "./pages/stats/Stats";
import Wallet from "./pages/wallets/Wallet";

const HomeScreen = () => (
    <View>
        <Text>Home</Text>
    </View>
);
const WalletScreen = () => <Wallet />;
const ProfileScreen = () => <Person />;
const StatsScreen = () => <Stats />;

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "home";
                    } else if (route.name === "Wallet") {
                        iconName = "credit-card";
                    } else if (route.name === "Profile") {
                        iconName = "person";
                    } else if (route.name === "Stats") {
                        iconName = "bar-chart";
                    }
                    return (
                        <MaterialIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
                tabBarActiveTintColor: "cyan",
                tabBarInactiveTintColor: "gray",
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#262450",
                    borderTopWidth: 0,
                    height: 80,
                    paddingVertical: 10,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Wallet" component={WalletScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Stats" component={StatsScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg} style={styles.appIcon} />
            </SafeAreaView>
            <MyTabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#262450",
    },
    appIcon: {
        width: 50,
        height: 50,
        marginTop: 30,
    },
});
