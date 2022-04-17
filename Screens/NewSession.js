import React, { Component } from "react";
import {Picker} from '@react-native-picker/picker';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

export default class NewSession extends Component {
  state = {
    isVisible: false,
  };
  componentDidMount() {
    this.displayModal();
  }
  // hide show modal
  displayModal(show) {
    this.setState({ isVisible: show });
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {
            Alert.alert("Modal has now been closed.");
          }}
        >
          <Image source={require("../images/logo.png")} style={styles.image} />
          <Text style={styles.text}>Choose Exercise: </Text>
          <Text
            style={styles.closeText}
            onPress={() => {
              this.displayModal(!this.state.isVisible);
            }}
          >
            <View style={styles.deviceType}>
              <Text>Installation Voltage</Text>
              <Picker
                selectedValue={this.state.deviceType}
                onValueChange={(itemValue) =>
                  this.setState({ deviceType: itemValue })
                }
              >
                <Picker.Item label="None" value="none" />
                <Picker.Item label="Switch Fuse" value="switch-fuse" />
                <Picker.Item label="MCB" value="mcb" />
                <Picker.Item label="MCCB" value="mccb" />
              </Picker>
            </View>{" "}
            Close Modal{" "}
          </Text>
        </Modal>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.displayModal(true);
          }}
        >
          <Text style={styles.buttonText}>Show Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2AC062",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF3974",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: "100%",
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
});
