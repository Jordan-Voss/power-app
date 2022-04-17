import React from "react";
import { View, AsyncStorage, ActivityIndicator, StatusBar } from "react-native";
import Login from "../Screens/Login";

export default class LogoutScreen extends React.Component {
  async componentDidMount() {
    this.props.navigation.navigate("Auth");
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
