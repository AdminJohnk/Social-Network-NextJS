import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import { ICreateSearchLog, ISearchLog, IResponse } from '@/types';

class SearchLogService extends BaseService {
  constructor() {
    super();
  }

  getAllSearchLog = async (): Promise<AxiosResponse<IResponse<ISearchLog>>> => {
    return await this.get(`/searchlog`);
  };

  createSearchLog = async (searchLog: ICreateSearchLog): Promise<AxiosResponse<IResponse<ISearchLog>>> => {
    return await this.post(`/searchlog`, searchLog);
  };

  deleteSearchLog = async (searchLog: ICreateSearchLog): Promise<AxiosResponse<IResponse<ISearchLog>>> => {
    return await this.put(`/searchlog`, searchLog);
  };
}

export const searchLogService = new SearchLogService();
