import { AxiosResponse } from 'axios';

import { ICreateQuestion, IQuestion, IResponse } from '@/types';
import { BaseService } from './BaseService';

class QuestionService extends BaseService {
  constructor() {
    super();
  }

  //   createSeries = (
  //     data: ICreateSeries
  //   ): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.post(`/series/create`, data);
  //   };

  //   getAllSeries = (
  //     profileID: string,
  //     pageParam: number
  //   ): Promise<AxiosResponse<IResponse<ISeries[]>>> => {
  //     return this.get(`/series/all/${profileID}?page=${pageParam}`);
  //   };

  //   getSeriesByID = (id: string): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.get(`/series/find/${id}`);
  //   };

  //   updateSeries = (
  //     data: IUpdateSeries
  //   ): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.put(`/series/update/${data.id}`, data);
  //   };

  //   addPostToSeries = (
  //     post: ICreateSeriesPost
  //   ): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.post(`/series/create-post/${post.series_id}`, post);
  //   };

  //   updatePostToSeries = (
  //     post: ICreateSeriesPost
  //   ): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.put(`/series/update-post/${post.series_id}`, post);
  //   };

  //   deletePostToSeries = (
  //     post: IDeleteSeriesPost
  //   ): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.delete(`/series/delete-post/${post.series_id}/${post.id}`);
  //   };

  //   deleteSeries = (id: string): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.delete(`/series/delete/${id}`);
  //   };

  //   reviewSeries = (
  //     data: ICreateReviewSeries
  //   ): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.put(`/series/review`, data);
  //   };
  //   likeCommentSeriesPost = (
  //     data: ILikeCommentSeriesPost
  //   ): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.put(`/series/like-comment-post`, data);
  //   };

  //   likeReplyCommentSeriesPost = (
  //     data: ILikeReplyCommentSeriesPost
  //   ): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.put(`/series/like-reply-comment-post`, data);
  //   };

  //   savePostSeries = (
  //     data: ISaveSeriesPost
  //   ): Promise<AxiosResponse<IResponse<ISeries>>> => {
  //     return this.put(`/series/save-post`, data);
  //   };

  createQuestion = (
    data: ICreateQuestion
  ): Promise<AxiosResponse<IResponse<IQuestion>>> => {
    return this.post(`/questions/create`, data);
  };
}

export const questionService = new QuestionService();
