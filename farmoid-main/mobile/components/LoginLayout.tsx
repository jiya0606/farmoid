import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import { StatusBar as StatusBarExpo } from "expo-status-bar";

export const LoginLayout = ({ children }: any) => {
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: "#0d9f61",
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarExpo style="light" />

      {/* <ImageBackground */}
      {/* // source={require("../assets/plant.jpg")} */}
      {/* // style={styles.image} */}
      {/* // > */}
      {children}
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};
