import Axios from 'axios';
import { toast } from 'react-toastify';

export const axios = Axios.create();

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    toast.error('Error');
    return Promise.reject(error);
  }
);
