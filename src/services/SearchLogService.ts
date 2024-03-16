import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import { ICreateSearchLog, ISearchLog, IResponse } from '@/types';

class SearchLogService extends BaseService {
  constructor() {
    super();
  }

  getAllSearchLog = (): Promise<AxiosResponse<IResponse<ISearchLog>>> => {
    return this.get(`/searchlog`);
  };

  createSearchLog = (searchLog: ICreateSearchLog): Promise<AxiosResponse<IResponse<ISearchLog>>> => {
    return this.post(`/searchlog`, searchLog);
  };

  deleteSearchLog = (searchLog: ICreateSearchLog): Promise<AxiosResponse<IResponse<ISearchLog>>> => {
    return this.put(`/searchlog`, searchLog);
  };
}

export const searchLogService = new SearchLogService();
