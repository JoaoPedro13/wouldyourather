import axios from "axios";

const apiService = axios.create({
  baseURL: "/post"
});

export const getRandomQuestion = async () => {
  try {
    const response = await apiService.get(`/random`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createQuestion = async data => {
  try {
    const response = await apiService.post("/create", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editQuestion = async data => {
  try {
    const response = await apiService.post(`/edit/${data.id}`, data);
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

export const sendAnswer = async (option, id) => {
  const data = {
    option,
    id
  };
  console.log(data);
  try {
    const response = await apiService.post(`/${id}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAuthorQuestions = async authorID => {
  try {
    const retrievedQuestions = await apiService.get("/byauthor/" + authorID);
    return retrievedQuestions.data;
  } catch (error) {
    throw error;
  }
};
export const getTopQuestions = async () => {
  try {
    const retrievedQuestions = await apiService.get("/top");

    return retrievedQuestions;
  } catch (error) {
    throw error;
  }
};

