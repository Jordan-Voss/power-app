import axios from "axios";
import authHeader from "./auth";

const API_URL = "http://188.141.36.19:8080/api/sheet/";
const API_SAVE_REPORT_URL = "http://188.141.36.19:8080/api/report/";

export const getExerciseList = async () => {
    console.log("getting Exercise List");
    //   console.log(authHeader());
    //   const a = await authHeader();
    //   console.log('AUTH HEADER' + a.Authorization);
    return axios
      .get(API_URL + "get-exercise", { headers: await authHeader() })
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error.message);
      });
  };