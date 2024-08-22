import axios from 'axios';

const exampleUrl = import.meta.env.VITE_EXAMPLE_URL;
const baseUrl = import.meta.env.VITE_BASE_URL;

// Create a basic axios instance for non-authenticated requests
const axiosInstance = axios.create({
  baseURL: baseUrl
});

// Function to create an authenticated axios instance
const axiosWithAuth = ()=> {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: baseUrl
  });
}

// Function to handle sleep/delay
const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));

// Fetch example data using the basic axios instance
const getExampleData = async () => {
  try {
    const response = await axiosInstance.get(exampleUrl);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch example data:', error);
    throw error; // Propagate the error
  }
};

// Function to fetch profile data using authenticated axios instance
const getProfileData = async () => {
  try {
    const response = await axiosWithAuth().get('/profiles');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch profile data:', error);
    throw error; // Propagate the error
  }
};

export { sleep, axiosWithAuth, getExampleData, getProfileData };
