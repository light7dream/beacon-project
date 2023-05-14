import axios from 'axios';

const API_URL = 'https://example.com/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export default api;