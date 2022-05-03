import React, { Component, useState} from "react";
// import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import {getExerciseList} from '../Services/exercise_service';
import GestureRecognizer from 'react-native-swipe-gestures';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  TextInput
} from "react-native";

export default class NewSession extends Component {
  constructor(props) {
    super(props);
this.state = {
  open: false,
  pickerExercises: [],
  own: ["Select an Exercise", "Add New"],
  exercise:null,
    deviceType: 'none',
    country: undefined,
    isVisible: false,
  };
  this.setExercise = this.setExercise.bind(this);
}

setExercise(value) {
  this.setState({exercise: value});
}

handleCreateList() {
  console.log('aa' + this.state.own.concat(this.state.pickerExercises)
  )
  this.setState({pickerExercises: this.state.own.concat(this.state.pickerExercises)});
};


async gg() {
  const r = await getExerciseList()
  console.log(r)
  this.setState({pickerExercises: r})
  this.handleCreateList();

  console.log(this.state.pickerExercises);
}


  setOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  setValue(callback) {
    this.setState(state => ({
      value: callback(state.value)
    }));
  }

  setItems(callback) {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }

  componentDidMount() {
    this.gg();
    this.displayModal();
  }
  // hide show modal
  displayModal(show) {
    this.setState({ isVisible: show });
  }
  render() {
    const pickerItems = this.state.pickerExercises.map(i => (
      <Picker.Item label={i.toString()} value={i} key={ Math.random().toString(36).substr(2, 9) } />
  ));
  const createExercise = <TextInput style={{borderRadius:"50px",borderColor:"black", borderWidth:"1px", marginTop:"1vh"}} placeholder="What Exercise are you doing?"></TextInput>
    return (
      <ScrollView>
      <View style={{alignItems: "center", justifyContent: "center" }}>
          {/* <Image source={require("../images/logo.png")} style={styles.image} /> */}
          <Text style={styles.text}>Choose Exercise: </Text>
              </View>
              <View>
              <GestureRecognizer
              style={{flex: 1}}
      onSwipeDown={ () => this.displayModal(!this.state.isVisible) }
     >
              <Modal
          presentationStyle="formSheet"
          animationType={"slide"}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {
            Alert.alert("Modal has now been closed.");
          }}
        >
          <View>
            <Image source={require("../images/logo.png")} style={styles.image} />
          <Text style={styles.text}>Choose Exercise: </Text>
          <Text
            style={styles.closeText}
            onPress={() => {
              this.displayModal(!this.state.isVisible);
            }}
          >Close Modal
          </Text>
            </View>
        </Modal>
        </GestureRecognizer>
              </View>
                {/* <View style={{
                  // flex:1,
                  justifyContent:'center',
                  alignItems: 'center'
}}>
  <Picker
  style={{width:"50vw"}}
  selectedValue={this.state.exercise}
  onValueChange={(value) =>
    this.setExercise(value)
  }>
  {pickerItems}
</Picker>
{this.state.exercise === 'Add New' ? createExercise : null}

      </View> */}
      </ScrollView>

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
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
      backgroundColor: "#FF3974",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,},
  //   display: "flex",
  //   height: 60,
  //   borderRadius: 6,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#FF3974",
  //   shadowColor: "#2AC062",
  //   shadowOpacity: 0.5,
  //   shadowOffset: {
  //     height: 10,
  //     width: 0,
  //   },
  //   shadowRadius: 25,
  // },
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
