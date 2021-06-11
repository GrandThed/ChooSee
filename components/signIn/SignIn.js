import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import logoGoogle from "../../assets/google.png";
import styles from "./sign_in_styles";

// Firebase
import { auth } from "../../firebase/firebaseInit";
import firebase from "firebase/app";

const SignIn = () => {
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    console.log(firebase.auth().currentUser)
  };

  return (
    <TouchableOpacity onPress={handleSignIn} style={styles.button}>
      <Image style={styles.logoGoogle} source={logoGoogle} />
      <Text style={styles.text}>Iniciar sesion con google</Text>
    </TouchableOpacity>
  );
};

export default SignIn;
