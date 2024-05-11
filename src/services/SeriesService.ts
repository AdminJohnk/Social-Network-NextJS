import { AxiosResponse } from 'axios';

import { ICreateSeries, IResponse, ISeries, IUpdateSeries } from '@/types';
import { BaseService } from './BaseService';

class SeriesService extends BaseService {
  constructor() {
    super();
  }

  createSeries = (
    data: ICreateSeries
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.post(`/series/create`, data);
  };

  getAllSeries = (
    pageParam: number
  ): Promise<AxiosResponse<IResponse<ISeries[]>>> => {
    return this.get(`/series/all?page=${pageParam}`);
  };

  getSeriesByID = (id: string): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.get(`/series/find/${id}`);
  };

  updateSeries = (
    data: IUpdateSeries
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/update/${data.id}`, data);
  };
}

export const seriesService = new SeriesService();
