import React, {useRef} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableNativeFeedback, TextInput, Image, TouchableOpacity, Animated, Easing } from 'react-native'
import {register} from '../Services/user_service';
import * as Animatable from 'react-native-animatable';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../Styles/styles';
const initialState = {

};

export default class Signup extends React.Component {
    state = {
        email: "",
        pass: "",
        username: "",
        firstname:"",
        lastname: "",
        isValidUsername: true,
        isValidPassword: true,
        animation: new Animated.Value(0)
};

login() {
  this.props.navigation.navigate('Login');
}

    lighten = () => {
        Animated.spring(this.state.animation, {
            toValue : 0,
            useNativeDriver: false,
        }).start();
      } 
    setEmail = email => {
        this.setState({ email });
    };
    setFirstname = firstname => {
      this.setState({ firstname });
  };
  setLastName = lastname => {
    this.setState({ lastname });
};
setUsername = username => {
  this.setState({ username });
  this.handleValidUsername(username)
};

    setPass = pass => {
        this.setState({ pass });
        this.handleValidPassword(pass)
    };

    handleValidUsername = username => {
      if (username.trim().length >= 4 || username.trim().length < 1) {
        this.setState({isValidUsername: true})
      }else {
        console.log("short");
        this.setState({isValidUsername:false})
      }

    }
    handleValidPassword = pass => {
      console.log("WEFWE");
      if (pass.trim().length >= 6) {
        this.setState({isValidPassword: true})
      }else {
        console.log("short");
        this.setState({isValidPassword:false})
      }

    }
    
    async handleSignup() {
        console.log("Signing Up")
        const { email, pass, username, firstname, lastname } = this.state;
        const resp = await register(username, email, pass, firstname, lastname);
        if (resp !== undefined) {
            this.props.navigation.navigate('App');
        }

        this.lighten();
        console.log("resp");
        console.log(resp);
        
    }

    darken = () => {
        Animated.spring(this.state.animation, {
            toValue : 1,
            useNativeDriver: false,
        }).start();
      }
    render() {
        return (
            <Animated.View
            style={{
              padding: 20,
              backgroundColor: this.state.animation.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: ['#133E7C', '#0D2534'],
                                  extrapolate: 'clamp',
                                }),
              flex: 1,
              justifyContent: 'center',
            }}>
                        {/* <Image
            source={require('../images/powerapp.png')}

            style={{ flex: 1,alignSelf:"center", size: 40, height: 50, width: 50 }}
          /> */}
            {/* <Ionicons name="weight-lifter" size={100} style={{justifyContent: "center", alignSelf: 'center'}} color={'#22A0B6'} /> */}
            <Text style={{
        alignSelf: 'center',
        fontSize: 30,
        marginBottom: 50,
        color: '#22A0B6',
        fontWeight: '600',
}}>Sign Up</Text>
{this.state.isValidUsername ? null :
<Animatable.View animation="fadeInLeft" duration={500}>
<Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
</Animatable.View>
    }
{this.state.isValidPassword ? null :
<Animatable.View animation="fadeInLeft" duration={500}>
<Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
</Animatable.View>
    }
            <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
              <Ionicons name="person-circle-outline" size={30} color={'#9BE6DE'} />
              <TextInput 
                onChangeText={this.setFirstname.bind(this)} 
                value={this.state.firstname}
                clearButtonMode={'while-editing'}
                returnKeyLabel={'next'}
                returnKeyType={'next'}
                underlineColorAndroid={'#FF0000'}
                placeholder={'First Name'}
                style={{
                    flex: 1,
                    paddingLeft: 20,
                    borderBottomColor: '#9BE6DE',
                    borderBottomWidth: 1,
                  }}
                />
            </View>
            <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
              <Ionicons name="person-circle-outline" size={30} color={'#9BE6DE'} />
              <TextInput 
                onChangeText={this.setLastName.bind(this)} 
                value={this.state.lastname}
                clearButtonMode={'while-editing'}
                returnKeyLabel={'next'}
                returnKeyType={'next'}
                underlineColorAndroid={'#FF0000'}
                placeholder={'Last Name'}
                style={{
                    flex: 1,
                    paddingLeft: 20,
                    borderBottomColor: '#9BE6DE',
                    borderBottomWidth: 1,
                  }}
                />
            </View>
            <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
              <Ionicons name="person-circle-outline" size={30} color={'#9BE6DE'} />
              <TextInput 
                onChangeText={this.setUsername.bind(this)} 
                value={this.state.username}
                clearButtonMode={'while-editing'}
                returnKeyLabel={'next'}
                returnKeyType={'next'}
                underlineColorAndroid={'#FF0000'}
                placeholder={'Username'}
                onSubmitEditing={this.onEnd}
                // onEndEditing={this.handleValidUsername}
                style={{
                    flex: 1,
                    paddingLeft: 20,
                    borderBottomColor: '#9BE6DE',
                    borderBottomWidth: 1,
                  }}
                />
            </View>
            <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
              <MaterialIcons name="alternate-email" size={30} color={'#9BE6DE'} />
              <TextInput 
                onChangeText={this.setEmail.bind(this)} 
                value={this.state.email} 
                textContentType={'emailAddress'} 
                autoCompleteType={'email'}
                clearButtonMode={'while-editing'}
                keyboardType={'email-address'}
                returnKeyLabel={'next'}
                returnKeyType={'next'}
                underlineColorAndroid={'#FF0000'}
                placeholder={'Email Address'}
                style={{
                    flex: 1,
                    paddingLeft: 20,
                    borderBottomColor: '#9BE6DE',
                    borderBottomWidth: 1,
                  }}
                />
            </View>
            <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
            <Ionicons name="key" size={30} color={'#9BE6DE'} />
              <TextInput 
                onChangeText={this.setPass.bind(this)} 
                value={this.state.pass} 
                textContentType={'password'} 
                autoCompleteType={'password'}
                clearButtonMode={'while-editing'}
                returnKeyLabel={'done'}
                returnKeyType={'done'}
                placeholder={'Password'}
                secureTextEntry={true}
                style={{
                  flex: 1,
                  paddingLeft: 20,
                  borderBottomColor: '#9BE6DE',
                  borderBottomWidth: 1,
                }}
              />
            </View>
            <View style={{
              alignSelf: 'center',
              marginTop: 30,
            }}>
              <TouchableHighlight
               activeOpacity={0.8}
               underlayColor="#ffffff"
               onPressIn={this.darken}
               onPress={this.handleSignup.bind(this)}
              >
                <Animated.View style={{
                      width: this.state.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [120, 60],
                        extrapolate: 'clamp',
                      }),
        height: this.state.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [40, 60],
                        extrapolate: 'clamp',
                      }),
        borderRadius: this.state.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [8, 60],
                        extrapolate: 'clamp',
                      }),
        elevation: 8,
        shadowColor: '#0047BB',
        shadowRadius: 8,
        backgroundColor: this.state.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['#0D2534', '#652EC7'],
                        extrapolate: 'clamp',
                      }),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
                  <Animated.Text style={{
	  color: '#9BE6DE',
	  position: 'absolute',
	  opacity: this.state.animation.interpolate({
					inputRange: [0, 1],
					outputRange: [1, 0],
					extrapolate: 'clamp',
				}),
}}>Register</Animated.Text>
<Animated.View style={{
	  position: 'absolute',
	  opacity: this.state.animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1],
					extrapolate: 'clamp',
				}),
	}}>
  <Icon name="lock" size={30} color={'#9BE6DE'} />
</Animated.View>
                </Animated.View>
              </TouchableHighlight>
              <TouchableHighlight
               activeOpacity={0.8}
               underlayColor="#ffffff"
               onPress={this.lighten}
              >
                <View style={{
                //   paddingHorizontal: 50,
                  paddingVertical: 10,
                }}>
                  <Text
                  onPress={this.login.bind(this)}
                   style={{
                    color: '#9BE6DE',
                  }}>Already have an account? Log In</Text>
                </View>
              </TouchableHighlight>
            </View>
          </Animated.View>
)
}
}