import axios from "axios";
// Define your default base URL
const BASE_URL = 'https://birdr.taylorgooge.repl.co/';
// Create an API instance with the default base URL
const api = axios.create({
  baseURL: BASE_URL,
});
// Function to make API calls
const makeApiCall = async (url, method, data) => {
  try {
    const response = await api.request({
      url: url,
      method: method,
      data: data,
    });
    return response;
  } catch (error) {
    console.error(error);
    // Handle error
    throw error;
  }
};
export { makeApiCall };