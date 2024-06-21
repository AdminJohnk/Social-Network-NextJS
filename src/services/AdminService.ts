import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import {
  ICommentPost,
  ICommunity,
  ICreatePost,
  IPost,
  IQuestion,
  IResponse,
  ISeries,
  IUpdateCommentPost,
  IUpdatePost,
  IUserInfo,
  IUserRegister,
  IUserUpdate
} from '@/types';

class AdminService extends BaseService {
  constructor() {
    super();
  }

  getAllUsers = async (page: number, pageSize?: number): Promise<AxiosResponse<IResponse<IUserInfo[]>>> => {
    return await this.get(`/admin/users/${page}/${pageSize ?? 10}`);
  };

  getUserByID = async (userID: string): Promise<AxiosResponse<IResponse<IUserInfo>>> => {
    return await this.get(`/admin/users/find/${userID}`);
  };

  getNumberOfUsers = async (): Promise<AxiosResponse<IResponse<number>>> => {
    return await this.get(`/admin/users/number`);
  };

  getAllPosts = async (page: number, pageSize?: number): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return await this.get(`/admin/posts/${page}/${pageSize ?? 10}`);
  };

  getNumberOfPosts = async (): Promise<AxiosResponse<IResponse<number>>> => {
    return await this.get(`/admin/posts/number`);
  };

  getNumberOfSeries = async (): Promise<AxiosResponse<IResponse<number>>> => {
    return await this.get(`/admin/series/number`);
  };

  getAllSeries = async (page: number, pageSize?: number): Promise<AxiosResponse<IResponse<ISeries[]>>> => {
    return await this.get(`/admin/series/${page}/${pageSize ?? 10}`);
  };

  getNumberOfCommunities = async (): Promise<AxiosResponse<IResponse<number>>> => {
    return await this.get(`/admin/communities/number`);
  };

  getAllCommunities = async (
    page: number,
    pageSize?: number
  ): Promise<AxiosResponse<IResponse<ICommunity[]>>> => {
    return await this.get(`/admin/communities/${page}/${pageSize ?? 10}`);
  };

  getNumberOfQuestions = async (): Promise<AxiosResponse<IResponse<number>>> => {
    return await this.get(`/admin/questions/number`);
  };

  getAllQuestions = async (
    page: number,
    pageSize?: number
  ): Promise<AxiosResponse<IResponse<IQuestion[]>>> => {
    return await this.get(`/admin/questions/${page}/${pageSize ?? 10}`);
  };

  getAllParentComments = async (
    postID: string,
    page: number,
    pageSize?: number
  ): Promise<AxiosResponse<IResponse<ICommentPost[]>>> => {
    return await this.get(`/admin/comments/parents/${postID}/${page}/${pageSize ?? 10}`);
  };

  getAllChildComments = async (
    commentID: string,
    page: number,
    pageSize?: number
  ): Promise<AxiosResponse<IResponse<ICommentPost[]>>> => {
    return await this.get(`/admin/comments/children/${commentID}/${page}/${pageSize ?? 10}`);
  };

  createUser = async (data: IUserRegister): Promise<AxiosResponse<IResponse<IUserInfo>>> => {
    return await this.post(`/admin/users/create`, data);
  };

  createPost = async (data: ICreatePost): Promise<AxiosResponse<IResponse<IPost>>> => {
    return await this.post(`/admin/posts/create`, data);
  };

  updateUser = async (userID: string, data: IUserUpdate): Promise<AxiosResponse<IResponse<IUserInfo>>> => {
    return await this.put(`/admin/users/update/${userID}`, data);
  };

  updatePost = async (postID: string, data: IUpdatePost): Promise<AxiosResponse<IResponse<IPost>>> => {
    return await this.put(`/admin/posts/update/${postID}`, data);
  };

  updateComment = async (
    commentID: string,
    data: IUpdateCommentPost
  ): Promise<AxiosResponse<IResponse<ICommentPost>>> => {
    return await this.put(`/admin/comments/update/${commentID}`, data);
  };

  deleteUser = async (userID: string): Promise<AxiosResponse<IResponse<IUserInfo>>> => {
    return await this.delete(`/admin/users/delete/${userID}`);
  };

  deletePost = async (postID: string): Promise<AxiosResponse<IResponse<IPost>>> => {
    return await this.delete(`/admin/posts/delete/${postID}`);
  };

  deleteComment = async (commentID: string): Promise<AxiosResponse<IResponse<ICommentPost>>> => {
    return await this.delete(`/admin/comments/delete/${commentID}`);
  };
}

export const adminService = new AdminService();
