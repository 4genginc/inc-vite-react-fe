
import axios from 'axios';

// Environment variables for API URLs
const apiUrl = import.meta.env.VITE_EXAMPLE_URL;
const exampleUrl = import.meta.env.VITE_EXAMPLE_URL;
const baseUrl = import.meta.env.VITE_BASE_URL;

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

// Fetch example data using the base URL
const getExampleData = () => axios.get(exampleUrl).then(response => response.data);

const getExampleProfileData = () => axios.get(exampleUrl).then(response => response.data);


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

// Generate auth headers based on auth state
const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

// Make authenticated API request using custom headers
const apiAuthGet = authHeader => axios.get(apiUrl, { headers: authHeader });

// Fetch profile data using auth state to get headers
const getProfileData = async authState => {
  try {
    const authHeader = getAuthHeader(authState);
    const response = await apiAuthGet(authHeader);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch profile data:', error);
    throw error; // Properly propagate the error
  }
};

export {
  sleep,
  axiosWithAuth,
  getExampleData,
  getProfileData,
  getExampleProfileData
};
