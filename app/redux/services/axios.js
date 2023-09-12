// api.js
import axios from 'axios';

// Set your base URL or any other default configurations
// axios.defaults.baseURL = 'https://www.skilliza.com/wscubetech/public/api/user/';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/user/';
axios.defaults.baseURL = 'https://ec2-54-162-112-39.compute-1.amazonaws.com/dashboard/public/api/user/';

export default axios;