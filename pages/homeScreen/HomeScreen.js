import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./home_screen_styles";
import SignIn from "../../components/signIn/SignIn";
import logo from "../../assets/logo.png";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <SignIn />
    </View>
  );
};

export default HomeScreen;
