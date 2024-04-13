import axios, { type Method } from 'axios';
import { getSession } from 'next-auth/react';
import {
  API_KEY,
  CLIENT_ID,
  DOMAIN_NAME,
  GITHUB_TOKEN
} from '@/lib/constants/SettingSystem';

class BaseService {
  private async request(
    method: Method,
    url: string,
    data?: object | string,
    customHeaders?: object
  ) {
    const session = await getSession();
    const headers = {
      'x-api-key': API_KEY,
      [CLIENT_ID]: session?.id || '',
      AUTHORIZATION: session?.access_token
    };
    const requestHeaders = customHeaders
      ? { ...headers, ...customHeaders }
      : headers;
    const requestConfig = { headers: requestHeaders, data };
    const requestUrl = `${DOMAIN_NAME}${url}`;
    return axios.request({
      method,
      url: requestUrl,
      ...requestConfig,
      withCredentials: true
    });
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

  // getRepositoryByLink = (link: string): Promise<AxiosResponse<IResponse<IRepository[]>>> => {
  //   return this.getGithub(link);
  // };

  getGithub = (link: string) => {
    return axios.get(link);
  };
}

export { BaseService };
