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
    const response = await apiService.get(`/${id}`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAnswer = async (option, id) => {
  const data = {
    option,
    id
  };
  console.log("OPTION ON SERVICE", option);
  try {
    const response = await apiService.post(`/${id}`, data);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAuthorQuestions = async (authorID) => {
  try {
    const retrievedQuestions = await apiService.get("/byauthor/" + authorID);
    return retrievedQuestions.data;

  } catch (error) {
    throw error;
  }
}