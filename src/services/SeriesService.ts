import { AxiosResponse } from 'axios';

import {
  ICreateCommentSeriesPost,
  ICreateReplyCommentSeriesPost,
  ICreateReviewSeries,
  ICreateSeries,
  ICreateSeriesPost,
  IDeleteCommentSeriesPost,
  IDeleteReviewSeries,
  IDeleteSeriesPost,
  ILikeCommentSeriesPost,
  ILikeReplyCommentSeriesPost,
  ILikeSeriesPost,
  IResponse,
  ISaveSeriesPost,
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

  reviewSeries = (
    data: ICreateReviewSeries
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/review`, data);
  };

  deleteReviewSeries = (
    data: IDeleteReviewSeries
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.delete(`/series/delete-review`, data);
  };

  commentPostSeries = (
    data: ICreateCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/comment-post`, data);
  };

  updateCommentPostSeries = (
    data: ICreateCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/update-comment-post`, data);
  };

  deleteCommentPostSeries = (
    data: IDeleteCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.delete(`/series/delete-comment-post`, data);
  };

  replyCommentPostSeries = (
    data: ICreateReplyCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/reply-comment-post`, data);
  };

  updateReplyCommentPostSeries = (
    data: ICreateReplyCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/update-reply-comment-post`, data);
  };

  deleteReplyCommentPostSeries = (
    data: IDeleteCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.delete(`/series/delete-reply-comment-post`, data);
  };

  likePostSeries = (
    data: ILikeSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/like-post`, data);
  };

  likeCommentSeriesPost = (
    data: ILikeCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/like-comment-post`, data);
  };

  likeReplyCommentSeriesPost = (
    data: ILikeReplyCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/like-reply-comment-post`, data);
  };

  savePostSeries = (
    data: ISaveSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return this.put(`/series/save-post`, data);
  };
}

export const seriesService = new SeriesService();
