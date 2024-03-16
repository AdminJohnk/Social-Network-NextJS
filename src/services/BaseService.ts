import axios from 'axios';
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
  private request(method: string, url: string, data?: object | string, customHeaders?: object) {
    const requestHeaders = customHeaders ? { ...headers, ...customHeaders } : headers;
    const requestConfig = { headers: requestHeaders, data };
    const requestUrl = `${DOMAIN_NAME}${url}`;
    return axios.request({ method, url: requestUrl, ...requestConfig, withCredentials: true });
  }

  put(url: string, model?: object | string) {
    return this.request('put', url, model);
  }

  post(url: string, model?: object | string) {
    return this.request('post', url, model);
  }

  get(url: string, model?: object | string) {
    return this.request('get', url, model);
  }

  delete(url: string, model?: object | string) {
    return this.request('delete', url, model);
  }

  getGithub(url: string) {
    return this.request('get', url, undefined, {
      ...headers,
      'x-github-token': window !== undefined ? localStorage.getItem(GITHUB_TOKEN) : null
    });
  }
}

export { BaseService };
