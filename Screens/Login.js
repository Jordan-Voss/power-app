import React, {useRef} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableNativeFeedback, TextInput, Image, TouchableOpacity, Animated, Easing } from 'react-native'
import {login} from '../Services/auth_service';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../Styles/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const initialState = {

};

export default class Login extends React.Component {
    state = {
        username: "",
        pass: "",
        animation: new Animated.Value(0)
};

    lighten = () => {
        Animated.spring(this.state.animation, {
            toValue : 0,
            useNativeDriver: false,
        }).start();
      } 
    setUsername = username => {
        this.setState({ username });
    };

    setPass = pass => {
        this.setState({ pass });
    };

    signUp() {
        this.props.navigation.navigate('Signup');
    }
    
    async handleLogin() {
        console.log("logging in")
        const { username, pass } = this.state;
        const resp = await login(username, pass);
        if (resp !== undefined) {
            this.props.navigation.navigate('App');
        }

        this.lighten();
        console.log("RESp");
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
            {/* <Icon name="weight-lifter" size={100} style={{justifyContent: "center", alignSelf: 'center'}} color={'#22A0B6'} /> */}
            <Text style={{
        alignSelf: 'center',
        fontSize: 30,
        marginBottom: 50,
        color: '#22A0B6',
        fontWeight: '600',
}}>Login</Text>
            <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
              <Ionicons name="person-circle-sharp" size={30} color={'#9BE6DE'} />
              <TextInput 
                onChangeText={this.setUsername.bind(this)} 
                value={this.state.username}
                clearButtonMode={'while-editing'}
                returnKeyLabel={'next'}
                returnKeyType={'next'}
                underlineColorAndroid={'#FF0000'}
                placeholder={'Username'}
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
            <Icon name="lock" size={30} color={'#9BE6DE'} />
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
              justifyContent:"center"
            }}>
              <TouchableHighlight
               activeOpacity={0.8}
               underlayColor="#ffffff"
               onPressIn={this.darken}
               onPress={this.handleLogin.bind(this)}
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
}}>Login</Animated.Text>
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
                  onPress={this.signUp.bind(this)}
                  style={{
                    color: '#9BE6DE',
                  }}>Don't have an account? Sign Up</Text>
                </View>
              </TouchableHighlight>
            </View>
          </Animated.View>
)
}
}