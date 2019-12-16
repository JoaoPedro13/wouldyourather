import axios from "axios";

const apiAuthenticationService = axios.create({
  baseURL: "/auth"
});

/// MISSING EDIT SERVICE

export const edit = async data => {
  try {
    const response = await apiAuthenticationService.post("/edituser", data);
    console.log(response);
  } catch (error) { throw error; }
};

export const login = async data => {
  try {
    const response = await apiAuthenticationService.post(`/login`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const signUp = async data => {
  try {
    const response = await apiAuthenticationService.post(`/signup`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    await apiAuthenticationService.post(`/logout`);
  } catch (error) {
    throw error;
  }
};



export const userInformation = async () => {
  try {
    const response = await apiAuthenticationService.get(`/user-information`);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

