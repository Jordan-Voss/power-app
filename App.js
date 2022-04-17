import React, { useState, useEffect} from 'react'
import AppContainer from './Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthNav from './Navigation/AuthNav'
import AppNav from './Navigation/AppNav'
import {getCurrentUser, isCurrentUser, lgn} from './Services/auth_service'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loading, setloading] = useState(true);
  const getusr = async () => {
      AsyncStorage.getItem("user")
      .then((result)=> {
          const l = result
          if (l.token !== undefined) {
            setCurrentUser(true);
            return true;
          }else {
            setCurrentUser(false);
            return false;
          }
        })
      };
  
  useEffect(() => {
    const fetchData2 = async () => {
      async function loginuser() {
          lgn('ff', 'password')
      }
      const lgn =await loginuser();
    }
    // declare the async data fetching function
    const fetchData = async () => {
      async function getUser() {
        const resp = getusr();
        return resp;
      }
      const user = await getUser();
      return user;
    };
  
    const result = fetchData()
      // make sure to catch any error
      .catch(console.error);;
  
    // what will be logged to the console?
    console.log(result);
  }, [])

  return (
    <NavigationContainer>
      {currentUser ? <AppNav/> : <AuthNav/>}
    </NavigationContainer>
  );
}