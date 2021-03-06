import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#133E7C",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  drawerHeader: {
    height: 100,
    backgroundColor: "#f1f1f1",
    margin: 10,
    marginTop: 0,
    marginBottom: 8,
    borderRadius: 8,
  },
  // Login Screen
  image: {
    // height: 150,
    // width: 150,
    // marginLeft: '40%',
    // marginTop: '20%',
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
    alignSelf: "center",
  },
});
