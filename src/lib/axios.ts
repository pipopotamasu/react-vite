import Axios, { type AxiosError } from 'axios';

export const axios = Axios.create();

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
