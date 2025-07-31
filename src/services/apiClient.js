import axios from 'axios';
import { API_CONFIG } from '../constants/config';

// Crear instancia de axios con configuración base
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para requests
apiClient.interceptors.request.use(
  (config) => {
    if (__DEV__) {
      console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
    }
    return config;
  },
  (error) => {
    if (__DEV__) {
      console.error('❌ API Request Error:', error);
    }
    return Promise.reject(error);
  }
);

// Interceptor para responses
apiClient.interceptors.response.use(
  (response) => {
    if (__DEV__) {
      console.log('✅ API Response:', response.status, response.config.url);
    }
    return response;
  },
  (error) => {
    if (__DEV__) {
      console.error('❌ API Response Error:', error.response?.status, error.config?.url);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
