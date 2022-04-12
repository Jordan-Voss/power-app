import React from 'react'
import { CheckBox, Button, Image, TextInput, Text, TouchableOpacity, View } from 'react-native'
import { getReports } from '../Services/user_service';
import { styles } from '../Styles/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { logout } from '../Services/user_service';

export default class Home extends React.Component {
  state={};

  newReport() {
      this.props.navigation.navigate('NewReport');
  }

  logouts = () => {
    logout();
    this.props.navigation.navigate('Login');

  }



  async reports() {
    console.log('getting reports');
    const resp = await getReports();
    this.props.navigation.navigate('Reports', {reportsArray: resp });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
        <TouchableOpacity
        onPress={this.logouts}
        style={styles.roundButton1}>
        <MaterialCommunityIcons name="logout" size={24} color="black" />
        <Text>Logout</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons name="weight-lifter" size={50} color="#9BE6DE"/>
      </View>
      </View>
    )
}
}