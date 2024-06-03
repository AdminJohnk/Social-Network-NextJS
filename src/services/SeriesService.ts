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

  increaseViewSeries = async (id: string): Promise<AxiosResponse<IResponse<ISeries | true>>> => {
    return await this.put(`/series/increase-view/${id}`);
  };

  createSeries = async (data: ICreateSeries): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.post(`/series/create`, data);
  };

  getAllSeriesByUserID = async (
    profileID: string,
    pageParam: number
  ): Promise<AxiosResponse<IResponse<ISeries[]>>> => {
    return await this.get(`/series/all/${profileID}?page=${pageParam}`);
  };

  getAllSeries = async (pageParam: number): Promise<AxiosResponse<IResponse<ISeries[]>>> => {
    return await this.get(`/series/all?page=${pageParam}`);
  };

  getSeriesByID = async (id: string): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.get(`/series/find/${id}`);
  };

  updateSeries = async (data: IUpdateSeries): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/update/${data.id}`, data);
  };

  addPostToSeries = async (post: ICreateSeriesPost): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.post(`/series/create-post/${post.series_id}`, post);
  };

  updatePostToSeries = async (post: ICreateSeriesPost): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/update-post/${post.series_id}`, post);
  };

  deletePostToSeries = async (post: IDeleteSeriesPost): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.delete(`/series/delete-post/${post.series_id}/${post.id}`);
  };

  deleteSeries = async (id: string): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.delete(`/series/delete/${id}`);
  };

  reviewSeries = async (data: ICreateReviewSeries): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/review`, data);
  };

  deleteReviewSeries = async (data: IDeleteReviewSeries): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.delete(`/series/delete-review`, data);
  };

  commentPostSeries = async (data: ICreateCommentSeriesPost): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/comment-post`, data);
  };

  updateCommentPostSeries = async (
    data: ICreateCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/update-comment-post`, data);
  };

  deleteCommentPostSeries = async (
    data: IDeleteCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.delete(`/series/delete-comment-post`, data);
  };

  replyCommentPostSeries = async (
    data: ICreateReplyCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/reply-comment-post`, data);
  };

  updateReplyCommentPostSeries = async (
    data: ICreateReplyCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/update-reply-comment-post`, data);
  };

  deleteReplyCommentPostSeries = async (
    data: IDeleteCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.delete(`/series/delete-reply-comment-post`, data);
  };

  likePostSeries = async (data: ILikeSeriesPost): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/like-post`, data);
  };

  likeCommentSeriesPost = async (
    data: ILikeCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/like-comment-post`, data);
  };

  likeReplyCommentSeriesPost = async (
    data: ILikeReplyCommentSeriesPost
  ): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/like-reply-comment-post`, data);
  };

  savePostSeries = async (data: ISaveSeriesPost): Promise<AxiosResponse<IResponse<ISeries>>> => {
    return await this.put(`/series/save-post`, data);
  };
}

export const seriesService = new SeriesService();
