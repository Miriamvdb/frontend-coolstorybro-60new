import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/slice";
import { setAllSpaces, setSpaceDetails } from "./slice";

// F1
export const fetchAllSpaces = () => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/spaces`);
    // console.log("Response fetchAllSpaces", response.data);
    dispatch(setAllSpaces(response.data));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
  }
};

// F2
export const fetchSpaceDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/spaces/${id}`);
    // console.log("Response space details with stories", response.data);
    dispatch(setSpaceDetails(response.data));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
  }
};
