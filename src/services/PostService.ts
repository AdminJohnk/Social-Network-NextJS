import { AxiosResponse } from 'axios';

import {
  IAllImage,
  ICommentPost,
  ICreateComment,
  ICreatePost,
  IGetChildComments,
  ILikeComment,
  IPost,
  IResponse,
  ISharePost,
  TypeOfLink
} from '@/types';
import { BaseService } from './BaseService';

class PostService extends BaseService {
  constructor() {
    super();
  }

  getAllPostByUserID = async (id: string, pageParam: number): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return await this.get(`/posts/user/${id}?page=${pageParam}`);
  };
  getAllPost = async (): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return await this.get(`/posts/all`);
  };
  getAllPostNewsFeed = async (pageParam: number): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return await this.get(`/posts/newsfeed?page=${pageParam}`);
  };
  getAllPopularPost = async (sort: string): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return await this.get(`/posts/popular/?sortBy=${sort}`);
  };
  createPost = async (post: ICreatePost): Promise<AxiosResponse<IResponse<IPost>>> => {
    return await this.post(`/posts`, post);
  };
  updatePost = async (id: string, post: ICreatePost): Promise<AxiosResponse<IResponse<IPost>>> => {
    return await this.put(`/posts/update/${id}`, post);
  };
  deletePost = async (id: string) => {
    return await this.delete(`/posts/delete/${id}`);
  };
  sharePost = async (sharepost: ISharePost) => {
    return await this.post(`/posts/share`, sharepost);
  };
  deleteSharedPost = async (sharepost: ISharePost) => {
    return await this.delete(`/posts/shared/delete`, sharepost);
  };
  likePost = async (post: ISharePost) => {
    return await this.put(`/users/likepost`, post);
  };
  savePost = async (id: string) => {
    return await this.put(`/users/savepost/${id}`);
  };
  getParentComments = async (id: string, page: number): Promise<AxiosResponse<IResponse<ICommentPost[]>>> => {
    return await this.get(`/comments/parents/${id}?page=${page}`);
  };
  getChildComments = async (
    comment: IGetChildComments,
    page: number
  ): Promise<AxiosResponse<IResponse<ICommentPost[]>>> => {
    return await this.get(`/comments/${comment.parent}/children/${comment.post}?page=${page}`);
  };
  createComment = async (comment: ICreateComment) => {
    return await this.post(`/comments/create`, comment);
  };
  getPostByID = async (id: string): Promise<AxiosResponse<IResponse<IPost>>> => {
    return await this.get(`/posts/find/${id}`);
  };
  viewPost = async (id: string) => {
    return await this.put(`/posts/view/${id}`);
  };
  likeComment = async (id: string, payload: ILikeComment) => {
    return await this.put(`/comments/like/${id}`, payload);
  };
  dislikeComment = async (id: string, payload: ILikeComment) => {
    return await this.put(`/comments/dislike/${id}`, payload);
  };
  getSavedPosts = async (): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return await this.get(`/posts/saved`);
  };

  getPostsBySearchKey = async (keyword: string, page: number): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return await this.get(`/posts/search/top?search=${keyword}&page=${page}`);
  };

  getAllPostImages = async (userID: string): Promise<AxiosResponse<IResponse<IAllImage[]>>> => {
    return await this.get(`/posts/images/${userID}`);
  };

  getLinkPreview = async (url: string): Promise<AxiosResponse<IResponse<TypeOfLink>>> => {
    return await this.get(`/posts/link-preview?url=${url}`);
  };

  getPostByHashtag = async (hashtag: string, page: number): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return await this.get(`/posts/hashtag/normal/${hashtag}?page=${page}`);
  };
}

export const postService = new PostService();
