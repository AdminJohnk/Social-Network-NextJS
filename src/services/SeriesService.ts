import { AxiosResponse } from 'axios';

import {
  ICreateSeries,
  ICreateSeriesPost,
  IDeleteSeriesPost,
  IResponse,
  ISeries,
  IUpdateSeries
} from '@/types';
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
    profileID: string,
    pageParam: number
  ): Promise<AxiosResponse<IResponse<ISeries[]>>> => {
    return this.get(`/series/all/${profileID}?page=${pageParam}`);
  };

  getSeriesByID = (id: string): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.get(`/series/find/${id}`);
  };

  updateSeries = (
    data: IUpdateSeries
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/update/${data.id}`, data);
  };

  addPostToSeries = (
    post: ICreateSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.post(`/series/create-post/${post.series_id}`, post);
  };

  updatePostToSeries = (
    post: ICreateSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/update-post/${post.series_id}`, post);
  };

  deletePostToSeries = (
    post: IDeleteSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.delete(`/series/delete-post/${post.series_id}/${post.id}`);
  };

  deleteSeries = (id: string): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.delete(`/series/delete/${id}`);
  };
}

export const seriesService = new SeriesService();
