import React from "react";
import {
  CheckBox,
  Button,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getReports } from "../Services/user_service";
import { styles } from "../Styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { logout } from "../Services/user_service";
import authHeader from "../Services/auth";
import ProfileScreen from "./ProfileScreen";
import {
  getCurrentUser,
  lgn,
  checkUserSignedIn,
  isCurrentUser,
  login,
} from "../Services/auth_service";
import { getUserBoard } from "../Services/user_service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Dashboard extends React.Component {
  // state={currentUser: undefined};

  constructor(props) {
    super(props);

    this.state = {
      isAdmin: "false",
      checked: false,
    };
  }
  getData = async () => {
    try {
      const bb = await lgn();
      console.log("gggg" + bb);
    } catch (e) {
      console.log(e.message);
    }
  };

  getusr = async () => {
    AsyncStorage.getItem("user").then((result) => {
      const l = result;
      if (l.token !== undefined) {
        return true;
      }
    });
  };

  async componentDidMount() {
    console.log("mnt");
    console.log("v" + (await this.getData()));
  }

  newSet = () => {
    this.props.navigation.navigate("NewSession");
  };

  logouts = () => {
    logout();
    this.props.navigation.navigate("Login");
  };

  async reports() {
    console.log("getting reports");
    const resp = await getReports();
    this.props.navigation.navigate("Reports", { reportsArray: resp });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={this.logouts} style={styles.roundButton1}>
            <MaterialCommunityIcons name="logout" size={24} color="black" />
            <Text>Logout</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            name="weight-lifter"
            size={50}
            color="#9BE6DE"
          />
        </View>
        <TouchableOpacity
          onPress={this.newSet}
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 70,
            position: "absolute",
            bottom: 10,
            right: 10,
            height: 70,
            backgroundColor: "#fff",
            borderRadius: 100,
          }}
        >
          <MaterialCommunityIcons name="plus-thick" size={30} color="#01a699" />
        </TouchableOpacity>
      </View>
    );
  }
}
