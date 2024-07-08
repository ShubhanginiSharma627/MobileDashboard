import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg, { Circle, G, Path } from "react-native-svg";

const { width } = Dimensions.get("window");
const outerRadius = width / 2.5;
const innerRadius = outerRadius / 4; // Define the radius of the central circle
const center = width / 2;

const borderColor = "#D3F2F9"; // Border color
const borderWidth = 7; // Border width

const strokeWidth = 12; // Increased stroke width for dividing lines

const segments = [
    { label: "Business Card", startAngle: 270, endAngle: 90, color: "white" },
    { label: "Bills", startAngle: 90, endAngle: 123, color: "white" },
    { label: "Email", startAngle: 123, endAngle: 184, color: "white" },
    { label: "Consent", startAngle: 184, endAngle: 270, color: "#F8AC75" },
];

const CircularMenu = ({ handlePress }) => {
    const createPath = (startAngle, endAngle) => {
        const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

        const outerStartX =
            center + outerRadius * Math.cos((Math.PI / 180) * startAngle);
        const outerStartY =
            center - outerRadius * Math.sin((Math.PI / 180) * startAngle);
        const outerEndX =
            center + outerRadius * Math.cos((Math.PI / 180) * endAngle);
        const outerEndY =
            center - outerRadius * Math.sin((Math.PI / 180) * endAngle);

        const innerStartX =
            center + innerRadius * Math.cos((Math.PI / 180) * startAngle);
        const innerStartY =
            center - innerRadius * Math.sin((Math.PI / 180) * startAngle);
        const innerEndX =
            center + innerRadius * Math.cos((Math.PI / 180) * endAngle);
        const innerEndY =
            center - innerRadius * Math.sin((Math.PI / 180) * endAngle);

        return `
      M ${innerStartX} ${innerStartY}
      A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerEndX} ${innerEndY}
      L ${outerEndX} ${outerEndY}
      A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerStartX} ${outerStartY}
      L ${innerStartX} ${innerStartY}
    `;
    };

    const getTextPosition = (startAngle, endAngle, radius) => {
        const angle = (startAngle + endAngle) / 2;
        const x = center + (radius - 20) * Math.cos((Math.PI / 180) * angle); // Adjusted radius to keep text inside
        const y = center - (radius - 20) * Math.sin((Math.PI / 180) * angle); // Adjusted radius to keep text inside
        return { x, y };
    };

    return (
        <View style={styles.container}>
            <Svg height={width} width={width}>
                {/* Outer Border */}
                <Circle
                    cx={center}
                    cy={center}
                    r={outerRadius}
                    stroke={borderColor}
                    strokeWidth={borderWidth}
                    fill="none"
                />

                {/* Central Circle */}
                <Circle
                    cx={center}
                    cy={center}
                    r={innerRadius}
                    fill="#fff"
                    stroke={borderColor}
                    strokeWidth={borderWidth}
                />

                {/* Segments */}
                {segments.map((segment, index) => {
                    const { startAngle, endAngle, color, label } = segment;
                    const path = createPath(startAngle, endAngle);
                    const { x, y } = getTextPosition(
                        startAngle,
                        endAngle,
                        outerRadius
                    );

                    return (
                        <G key={index} onPress={() => handlePress(label)}>
                            <Path
                                d={path}
                                fill={color}
                                stroke="#D3F2F9"
                                strokeWidth={strokeWidth}
                                style={styles.segmentShadow}
                            />
                        </G>
                    );
                })}
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    segmentShadow: {
        shadowColor: "#88A5BF",
        shadowOffset: {
            width: 100,
            height: 100,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 20,
    },
});

export default CircularMenu;
