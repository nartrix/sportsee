import axios from "axios";
import MainDataModel from "./mainModel";
import ActivityModel from "./activityModel";
import SessionsModel from "./sessionModel";
import PerformanceModel from "./perfomanceModel";

export const getMainData = async (user) => {
  let mainDataUrl = `http://localhost:3000/user/${user}`;

  try {
    const userMain = await axios.get(mainDataUrl);
    const userMainData = new MainDataModel(userMain.data.data);
    return { data: userMainData };
  } catch (error) {
    console.log(error);
  }
};

export const getActivityData = async (user) => {
  let activityDataUrl = `http://localhost:3000/user/${user}/activity`;

  try {
    const userActivity = await axios.get(activityDataUrl);
    const userActivityData = new ActivityModel(userActivity.data.data);
    return userActivityData;
  } catch (error) {
    console.log(error);
  }
};

export const getSessionsData = async (user) => {
  let sessionsDataUrl = `http://localhost:3000/user/${user}/average-sessions`;

  try {
    const userSessions = await axios.get(sessionsDataUrl);
    const userSessionsData = new SessionsModel(userSessions.data.data);
    return userSessionsData;
  } catch (error) {
    console.log(error);
  }
};

export const getPerformanceData = async (user) => {
  let performanceDataUrl = `http://localhost:3000/user/${user}/performance`;

  try {
    const userPerformance = await axios.get(performanceDataUrl);

    const userPerformanceData = new PerformanceModel(userPerformance.data.data);
    return userPerformanceData;
  } catch (error) {
    console.log(error);
  }
};
