import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authHeader from "./auth";
// import { getCurrentRole } from './user_service';
// 188.141.36.19
const API_URL = "http://188.141.36.19:8080/api/auth/";
const API_SAVE_REPORT_URL = "http://188.141.36.19:8080/api/report/"

export const login = async (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then(async response => {
            if (response.data.accessToken) {
                await AsyncStorage.setItem(
                    "user",
                    JSON.stringify(response.data),
                );
            }
            console.log("DATA" + response.data);
            // this.props.navigation.navigate('App');
            return response.data;
        })
        .catch(function (error) {
            console.log(
                "There has been a problem with your fetch operation: " +
                    error.message + error,
            );
        });
};

export const isCurrentUser = async () => {
    const isCurrent = await AsyncStorage.getItem("user");
    // console.log(isCurrent + 'iscurrent');
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
        .then(resp => console.log("LOGGED OUT??>>??" + resp))
        .catch(function (error) {
            console.log(
                "There has been a problem with your fetch operation: " +
                    error.message,
            );
            // ADD THIS THROW error
            throw error;
        });
};
export const updateReport = async (reportName, prNumber,
    contractorName, contractorAddress,
    contractorRegNumber,
    installationAge,
    occupantName,
    occupantAddress,
    occupantInAttendance,
    installationCategory,
    installationCategoryComment,
    inspectionReason,
    inspectionReasonComment,
    isFullExtent,
    earthingType,
    installationVoltage) => {
    console.log("getting user board");
    return axios({
        method: "POST",
        url: API_SAVE_REPORT_URL + "update",
        headers: await authHeader(),
        data: {
            reportName: reportName,
            prNo: prNumber,
            contractorName: contractorName,
            contractorAddress: contractorAddress,
            contractorRegNo: contractorRegNumber,
            installationAge: installationAge,
            occupantName: occupantName,
            occupantAddress: occupantAddress,
            occupantInAttendance: occupantInAttendance,
            installationCategory: installationCategory,
            installationCategoryComment: installationCategoryComment,
            inspectionReason: inspectionReason,
            inspectionReasonComment: inspectionReasonComment,
            installationExtentCoveredByReport: isFullExtent,
            earthingType: earthingType,
            installationVoltage: installationVoltage,

        },
    }).then(response => 
            response.data
        ).catch(function (error) {
            console.log("Nope" + error);
            // ADD THIS THROW error
            return "";
        });
};


export const saveReport = async (reportName, prNumber,
    contractorName, contractorAddress,
    contractorRegNumber,
    installationAge,
    occupantName,
    occupantAddress,
    occupantInAttendance,
    installationCategory,
    installationCategoryComment,
    inspectionReason,
    inspectionReasonComment,
    isFullExtent,
    earthingType,
    installationVoltage) => {
    console.log("getting user board");
    return axios({
        method: "POST",
        url: API_SAVE_REPORT_URL + "insert",
        headers: await authHeader(),
        data: {
            reportName: reportName,
            prNo: prNumber,
            contractorName: contractorName,
            contractorAddress: contractorAddress,
            contractorRegNo: contractorRegNumber,
            installationAge: installationAge,
            occupantName: occupantName,
            occupantAddress: occupantAddress,
            occupantInAttendance: occupantInAttendance,
            installationCategory: installationCategory,
            installationCategoryComment: installationCategoryComment,
            inspectionReason: inspectionReason,
            inspectionReasonComment: inspectionReasonComment,
            installationExtentCoveredByReport: isFullExtent,
            earthingType: earthingType,
            installationVoltage: installationVoltage,

        },
    }).then(response => 
            response.data
        ).catch(function (error) {
            console.log("Nope" + error);
            // ADD THIS THROW error
            return "";
        });
};