import React from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import AddSvg from "../../assets/svg/AddSvg";
import { useFonts } from "expo-font";
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerkb}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/images/bgimg.png")}
            style={styles.bg_wrp}
          >
            <View style={styles.form_wrapper}>
              <View style={styles.avatar_wrapper}>
                <View style={styles.avatar}></View>
                <AddSvg style={styles.add_svg}></AddSvg>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <RegistrationForm />
              <Text>
                Вже є акаунт?
                {/* <LoginRediraction onPress={() => navigation.navigate("Login")}> */}
                <Text>Увійти</Text>
                {/* </LoginRediraction> */}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: " 100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerkb: {
    flex: 1,
  },
  bg_wrp: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  form_wrapper: {
    alignItems: "center",
    width: "100%",
    height: "65%",

    backgroundColor: "#fff",
    borderRadius: 25,
  },

  avatar_wrapper: {
    position: "relative",
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    marginTop: -60,
    marginBottom: 32,
  },
  add_svg: {
    position: "absolute",
    top: "10%",

    transform: [{ translateX: 108 }, { translateY: 10 }],
  },
  title: {
    color: "#212121",
    marginBottom: 32,
    // fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
  },
});