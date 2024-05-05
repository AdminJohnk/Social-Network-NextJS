import { AxiosResponse } from 'axios';

import { ICreateSeries, IResponse, ISeries } from '@/types';
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
}

export const seriesService = new SeriesService();
