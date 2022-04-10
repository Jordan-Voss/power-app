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
        </View>
                <View>
            <Image style={styles.homeImage} source={require('../images/logo.png')}
            />
        </View>
        <View>
        <TouchableOpacity
            style={styles.newReportBtn} onPress={this.newReport.bind(this)}>
            <Text style={styles.newReportText}>New Report</Text>
        </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.newReportBtn}
              onPress={this.reports.bind(this)}>
              <Text style={styles.newReportText}>See Reports</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}
}