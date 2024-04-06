import axios, { type Method } from 'axios';
import { API_KEY, CLIENT_ID, DOMAIN_NAME, AUTHORIZATION, GITHUB_TOKEN } from '@/lib/constants/SettingSystem';

let headers = {};

if (typeof window !== 'undefined') {
  headers = {
    Authorization: localStorage.getItem(AUTHORIZATION),
    'x-api-key': localStorage.getItem(API_KEY),
    'x-client-id': localStorage.getItem(CLIENT_ID)
  };
}

class BaseService {
  private request(method: Method, url: string, data?: object | string, customHeaders?: object) {
    const requestHeaders = customHeaders ? { ...headers, ...customHeaders } : headers;
    const requestConfig = { headers: requestHeaders, data };
    const requestUrl = `${DOMAIN_NAME}${url}`;
    return axios.request({ method, url: requestUrl, ...requestConfig, withCredentials: true });
  }

  put(url: string, data?: object | string) {
    return this.request('put', url, data);
  }

  post(url: string, data?: object | string) {
    return this.request('post', url, data);
  }

  get(url: string, data?: object | string) {
    return this.request('get', url, data);
  }

  delete(url: string, data?: object | string) {
    return this.request('delete', url, data);
  }

  getGithub(url: string) {
    return this.request('get', url, undefined, {
      ...headers,
      'x-github-token': window !== undefined ? localStorage.getItem(GITHUB_TOKEN) : null
    });
  }
}

export { BaseService };
