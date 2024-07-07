import axios, { type Method } from 'axios';
import { getSession } from 'next-auth/react';

import { API_KEY, CLIENT_ID, DOMAIN_NAME, RECOMMEND_DOMAIN } from '@/lib/utils/constants/SettingSystem';

const mainAxios = axios.create();

mainAxios.interceptors.request.use(async (config) => {
  const session = await getSession();
  config.headers.Authorization = session?.access_token || '';
  config.headers[CLIENT_ID] = session?.id || '';
  config.headers['x-api-key'] = API_KEY;

  return config;
});

class BaseService {
  private async request(method: Method, url: string, data?: object | string, customHeaders?: object) {
    const requestConfig = { headers: customHeaders, data };
    const requestUrl = `${DOMAIN_NAME}${url}`;
    return await mainAxios.request({
      method,
      url: requestUrl,
      ...requestConfig,
      withCredentials: true
    });
  }

  async put(url: string, data?: object | string) {
    return await this.request('put', url, data);
  }

  async post(url: string, data?: object | string) {
    return await this.request('post', url, data);
  }

  async get(url: string, data?: object | string) {
    return await this.request('get', url, data);
  }

  async delete(url: string, data?: object | string) {
    return await this.request('delete', url, data);
  }

  getGithub = async (url: string) => {
    return await axios.get(url);
  };

  getRecommend = async (url: string) => {
    return await axios.get(`${RECOMMEND_DOMAIN}${url}`);
  };
}

export { BaseService };
