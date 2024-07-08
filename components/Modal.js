import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
    Image,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { Bg, shield } from "../assets";

const ModalAlt = ({ modalVisible, closeModal, handleSubmit }) => {
    const [accessed, setAccessed] = useState(false);
    const [gettingOTP, setGettingOTP] = useState(false);
    const [otp, setOTP] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [apiError, setApiError] = useState(null);

    const TWILIO_ACCOUNT_SID = "AC9d2e4ca5c3d9f9f14298dbae9de271e2";
    const TWILIO_AUTH_TOKEN = "5f2ca5191946ddfa0b447df0c562eea8";
    const TWILIO_SERVICE_SID = "VA3615587f8cc70a5060812928a686e53b";

    const handleAccess = () => {
        setAccessed(true);
    };

    const handleGetOTP = () => {
        const apiUrl = `https://verify.twilio.com/v2/Services/${TWILIO_SERVICE_SID}/Verifications`;

        const requestBody = new URLSearchParams();
        requestBody.append("To", `+91${mobileNumber}`);
        requestBody.append("Channel", "sms");

        axios
            .post(apiUrl, requestBody, {
                auth: {
                    username: TWILIO_ACCOUNT_SID,
                    password: TWILIO_AUTH_TOKEN,
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            .then((response) => {
                console.log("OTP request successful:", response.data);
                setGettingOTP(true); // Update state to show OTP input field
            })
            .catch((error) => {
                console.error("Error requesting OTP:", error);
                setApiError("Failed to request OTP. Please try again."); // Set error state
            });
    };

    const handleSubmitOTP = () => {
        const apiUrl = `https://verify.twilio.com/v2/Services/${TWILIO_SERVICE_SID}/VerificationCheck`;

        const requestBody = new URLSearchParams();
        requestBody.append("To", `+91${mobileNumber}`);
        requestBody.append("Code", otp);

        axios
            .post(apiUrl, requestBody, {
                auth: {
                    username: TWILIO_ACCOUNT_SID,
                    password: TWILIO_AUTH_TOKEN,
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            .then((response) => {
                console.log("OTP verification successful:", response.data);
                // Handle verification success here (e.g., navigate to next screen)
                closeModal(); // Close modal after successful verification
            })
            .catch((error) => {
                console.error("Error verifying OTP:", error);
                setApiError("Failed to verify OTP. Please try again."); // Set error state
            });
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <KeyboardAvoidingView
                style={styles.modalBackdrop}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={styles.scrollViewContent}
                    >
                        <ImageBackground source={Bg} style={styles.modalView}>
                            <Image
                                source={shield} // Replace with your image URL
                                style={styles.image}
                            />
                            {gettingOTP ? (
                                <View style={styles.accessedContent}>
                                    <Text style={styles.label}>Enter OTP</Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter OTP"
                                            onChangeText={(text) =>
                                                setOTP(text)
                                            }
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={handleSubmitOTP}
                                    >
                                        <Text style={styles.buttonText}>
                                            Submit OTP
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            ) : accessed ? (
                                <View style={styles.accessedContent}>
                                    <Text style={styles.label}>
                                        Enter Mobile Number
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.mobileAdornment}>
                                            +91
                                        </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="9876543210"
                                            onChangeText={(text) =>
                                                setMobileNumber(text)
                                            }
                                            keyboardType="phone-pad"
                                        />
                                    </View>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={handleGetOTP}
                                    >
                                        <Text style={styles.buttonText}>
                                            Get OTP
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <LinearGradient
                                    colors={["#8D8BFF", "#585EE6"]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={{
                                        borderRadius: 15,
                                        paddingHorizontal: 20,
                                    }}
                                >
                                    <TouchableOpacity
                                        style={styles.closeButton}
                                        onPress={handleAccess}
                                    >
                                        <Text style={styles.closeButtonText}>
                                            Access
                                        </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            )}
                            {apiError && (
                                <Text style={styles.errorText}>{apiError}</Text>
                            )}
                        </ImageBackground>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default ModalAlt;

const styles = StyleSheet.create({
    modalBackdrop: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: 300,
        padding: 20,
        minHeight: 300,
        backgroundColor: "#fff",
        borderRadius: 30,
        alignItems: "center",
    },
    image: {
        width: 250,
        height: 200,
        marginBottom: 10,
    },
    closeButton: {
        padding: 10,
        borderRadius: 15,
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 20,
    },
    accessedContent: {
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: "#333",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        width: "100%",
    },
    mobileAdornment: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: "#333",
    },
    input: {
        flex: 1,
        fontSize: 18,
        paddingVertical: 10,
        paddingLeft: 10,
        color: "#333",
    },
    button: {
        backgroundColor: "#585EE6",
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
    },
    errorText: {
        color: "red",
        marginTop: 10,
    },
});
