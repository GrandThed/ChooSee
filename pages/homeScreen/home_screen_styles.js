import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR } from "../../constants/colorsConstants";

const container = {
  flex: 1,
  backgroundColor: BACKGROUND_COLOR,
  alignItems: "center",
  justifyContent: "space-around",
};

const logo = {
  width: 150,
  height: 150,
};

export default StyleSheet.create({
  container,
  logo,
});
