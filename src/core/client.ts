import axios from 'axios';
import { config } from './config';

let token: string | null = null;

export const getClient = () => {
  const client = axios.create({
    baseURL: 'https://smsapi.flexpay.cd',
    timeout: config.timeout || 15000,
  });

  client.interceptors.request.use((req) => {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

  return client;
};

export const setToken = (t: string) => {
  token = t;
};
