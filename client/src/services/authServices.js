import axios from "axios";

const apiAuthenticationService = axios.create({
  baseURL: "/auth"
});

/// MISSING EDIT SERVICE

export const edit = async data => {
  try {
    const response = await apiAuthenticationService.post("/edituser", data);
    console.log(response);
  } catch (error) {
    throw error;
  }
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
  console.log(data);
  const uploadData = new FormData();
  uploadData.append("picture", data.picture);
  uploadData.append("name", data.name);
  uploadData.append("password", data.password);
  uploadData.append("email", data.email);
  try {
    const response = await apiAuthenticationService.post(`/signup`, uploadData);
    console.log("asdasd", response.data.newUser);
    return response.data.newUser;
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
