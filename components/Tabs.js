import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({
    state,
    descriptors,
    navigation,
    tabBarStyle,
    activeTabStyle,
    inactiveTabStyle,
    activeLabelStyle,
    inactiveLabelStyle,
}) => {
    return (
        <View style={[styles.tabContainer, tabBarStyle]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={[
                            styles.topTabs,
                            isFocused ? [styles.focusedTab] : inactiveTabStyle,
                        ]}
                    >
                        <LinearGradient
                            colors={
                                isFocused
                                    ? ["#0DA6C2", "#0E39C6"]
                                    : ["#131225", "#131225"]
                            }
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[
                                styles.tabGradient,
                                isFocused
                                    ? styles.focusedTabGradient
                                    : inactiveTabStyle,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.tabLabel,
                                    isFocused
                                        ? styles.focusedTabLabel
                                        : inactiveLabelStyle,
                                ]}
                            >
                                {label}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const CustomTopTabNavigator = ({
    tabs,
    tabBarStyle,
    activeTabStyle,
    inactiveTabStyle,
    activeLabelStyle,
    inactiveLabelStyle,
}) => {
    return (
        <Tab.Navigator
            tabBar={(props) => (
                <CustomTabBar
                    {...props}
                    tabBarStyle={tabBarStyle}
                    activeTabStyle={activeTabStyle}
                    inactiveTabStyle={inactiveTabStyle}
                    activeLabelStyle={activeLabelStyle}
                    inactiveLabelStyle={inactiveLabelStyle}
                />
            )}
        >
            {tabs.map((tab, index) => (
                <Tab.Screen
                    key={index}
                    name={tab.name}
                    component={tab.component}
                    options={{ tabBarLabel: tab.label }}
                />
            ))}
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        backgroundColor: "#131225",
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
    },

    topTabs: {
        flex: 1,
        borderRadius: 10,
        alignItems: "center",
    },
    tabLabel: {
        fontSize: 16,
        color: "#2CDDF5",
        fontWeight: "bold",
    },
    focusedTabLabel: {
        color: "#FFFFFF",
    },
    tabGradient: {
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    focusedTabGradient: {
        borderRadius: 10,
    },
});

export default CustomTopTabNavigator;
