import Axios, { type AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const axios = Axios.create();

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    switch (status) {
      case 404:
        toast.error('404 Not Found.');
        break;
      case 500:
        toast.error('Internal Server Error.');
        break;
      case undefined:
        toast.error('Network Error.');
        break;
    }

    return Promise.reject(error);
  }
);
