import { AxiosResponse } from 'axios';

import {
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

  getAllPostByUserID = (id: string, pageParam: number): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return this.get(`/posts/user/${id}?page=${pageParam}`);
  };
  getAllPost = (): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return this.get(`/posts/all`);
  };
  getAllPostNewsFeed = (pageParam: number): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return this.get(`/posts/newsfeed?page=${pageParam}`);
  };
  getAllPopularPost = (sort: string): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return this.get(`/posts/popular/?sortBy=${sort}`);
  };
  createPost = (post: ICreatePost): Promise<AxiosResponse<IResponse<IPost>>> => {
    return this.post(`/posts`, post);
  };
  updatePost = (id: string, post: ICreatePost): Promise<AxiosResponse<IResponse<IPost>>> => {
    return this.put(`/posts/update/${id}`, post);
  };
  deletePost = (id: string) => {
    return this.delete(`/posts/delete/${id}`);
  };
  sharePost = (sharepost: ISharePost) => {
    return this.post(`/posts/share`, sharepost);
  };
  deleteSharedPost = (sharepost: ISharePost) => {
    return this.delete(`/posts/shared/delete`, sharepost);
  };
  likePost = (post: ISharePost) => {
    return this.put(`/users/likepost`, post);
  };
  savePost = (id: string) => {
    return this.put(`/users/savepost/${id}`);
  };
  getParentComments = (id: string, page: number): Promise<AxiosResponse<IResponse<ICommentPost[]>>> => {
    return this.get(`/comments/parents/${id}?page=${page}`);
  };
  getChildComments = (
    comment: IGetChildComments,
    page: number
  ): Promise<AxiosResponse<IResponse<ICommentPost[]>>> => {
    return this.get(`/comments/${comment.parent}/children/${comment.post}?page=${page}`);
  };
  createComment = (comment: ICreateComment) => {
    return this.post(`/comments/create`, comment);
  };
  getPostByID = (id: string): Promise<AxiosResponse<IResponse<IPost>>> => {
    return this.get(`/posts/find/${id}`);
  };
  viewPost = (id: string) => {
    return this.put(`/posts/view/${id}`);
  };
  likeComment = (id: string, payload: ILikeComment) => {
    return this.put(`/comments/like/${id}`, payload);
  };
  dislikeComment = (id: string, payload: ILikeComment) => {
    return this.put(`/comments/dislike/${id}`, payload);
  };
  getSavedPosts = (): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return this.get(`/posts/saved`);
  };

  getPostsBySearchKey = (keyword: string, page: number): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return this.get(`/posts/search/top?search=${keyword}&page=${page}`);
  };

  getAllPostImages = (userID: string): Promise<AxiosResponse<IResponse<string[]>>> => {
    return this.get(`/posts/images/${userID}`);
  };

  getLinkPreview = (url: string): Promise<AxiosResponse<IResponse<TypeOfLink>>> => {
    return this.get(`/posts/link-preview?url=${url}`);
  };

  getPostByHashtag = (hashtag: string, page: number): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return this.get(`/posts/hashtag/${hashtag}?page=${page}`);
  };
}

export const postService = new PostService();
