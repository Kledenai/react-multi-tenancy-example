import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_API_URL,
});

const subdomain = window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false;

api.axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    subdomain: subdomain,
  };

  return config;
});

api.addResponseTransform((response) => {
  if (!response.ok) {
    throw response;
  }
});

export default api;
