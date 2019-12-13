import axios from "axios";

const apiService = axios.create({
  baseURL: "/post"
});

export const getRandomQuestion = async () => {
  try {
    const response = await apiService.get(`/random`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getQuestion = async id => {
  try {
    const response = await apiService.get(`/postId=${id}`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAnswer = async (option, id) => {
  try {
    const response = await apiService.post(`/postId=${id}`, option, id);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
