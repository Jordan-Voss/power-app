import axios from "axios";
import authHeader from "./auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://188.141.36.19:8080/api/auth/";
const API_SAVE_REPORT_URL = "http://188.141.36.19:8080/api/report/";

export const lgn = async (username, password) => {
  const a = await loginrequest("ff", "password");
  console.log("aaaa" + a);
  AsyncStorage.setItem("user", a).then(() =>
    AsyncStorage.getItem("user").then((result) => {
      const l = JSON.parse(result);
      console.log(l.token);
      return l;
    })
  );
};

const loginrequest = async (username, password) => {
  return await axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      return JSON.stringify(response.data);
    });
};

export const login = async (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then(async (response) => {
      if (response.data.accessToken) {
        await AsyncStorage.clear();
        await AsyncStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log("Login response data: " + response.data);
      // this.props.navigation.navigate('App');
      return response.data;
    })
    .catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " +
          error.message +
          error
      );
    });
};
export async function checkUserSignedIn() {
  console.log("sfdg");
  try {
    console.log("wrg");
    const value = await AsyncStorage.getItem("user");
    console.log("weeeeee");
    if (value != null) {
      console.log("value" + value);
      return JSON.parse(value);
      // do something
    }
  } catch (error) {
    // Error retrieving data
    console.log(
      "There has been a problem with your fetch operation: " +
        error.message +
        error
    );
  }
}

export const getCurrentUser = async () => {
  await AsyncStorage.getItem("user")
    .then(async (resp) => {
      const val = await resp;
      return JSON.parse(val);
    })
    .catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " +
          error.message +
          error
      );
    });
};

export const isCurrentUser = async () => {
  const isCurrent = await AsyncStorage.getItem("user");
  // console.log(JSON.stringify(isCurrent) + 'iscurrent');
  if (isCurrent !== null) {
    return Promise.resolve(isCurrent);
  } else {
    return Promise.resolve(isCurrent);
  }
};

export const logout = async () => {
  console.log("out");
  await AsyncStorage.clear();
  await AsyncStorage.getItem("user")
    .then((resp) => console.log("LOGGED OUT??>>??" + resp))
    .catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
      // ADD THIS THROW error
      throw error;
    });
};
