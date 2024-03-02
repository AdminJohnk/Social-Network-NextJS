import Axios from 'axios';
import { configure } from 'axios-hooks';
import { LRUCache } from 'lru-cache';
import { AppConfig } from './app.config';
import { getSession } from 'next-auth/react';

const axios = Axios.create({
  baseURL: AppConfig.apiBase
});

const cache = new LRUCache({ max: 10 });

// request interceptor to add token to request headers
axios.interceptors.request.use(
  async config => {
    // Get session from NextAuth
    const session = await getSession();
    if (session && session.access_token) {
      config.headers.Authorization = `Bearer ${session.access_token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// response interceptor intercepting 401 responses, refreshing token and retrying the request
axios.interceptors.response.use(
  response => response,
  async error => {
    // Implement logic here

    return Promise.reject(error);
  }
);

configure({ axios, cache });
