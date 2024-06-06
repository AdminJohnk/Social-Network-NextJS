import { AxiosResponse } from 'axios';

import { IResponse, IUserUpdate, IUserInfo, ICreateRepository, IReputation } from '@/types';
import { BaseService } from './BaseService';

class UserService extends BaseService {
  constructor() {
    super();
  }

  getAllUsers = async (userID: string): Promise<AxiosResponse<IResponse<IUserInfo[]>>> => {
    return await this.get(`/users/all/${userID}`);
  };
  updateUser = async (userUpdate: IUserUpdate): Promise<AxiosResponse<IResponse<IUserInfo>>> => {
    return await this.put(`/users/update`, userUpdate);
  };
  getFriends = async (userID: string): Promise<AxiosResponse<IResponse<IUserInfo[]>>> => {
    return await this.get(`/users/friend_list/${userID}`);
  };
  getRequestSent = async (userID: string): Promise<AxiosResponse<IResponse<string[]>>> => {
    return await this.get(`/users/request_sent`, userID);
  };
  getRequestReceived = async (userID: string): Promise<AxiosResponse<IResponse<string[]>>> => {
    return await this.get(`/users/request_received`, userID);
  };
  sendFriendRequest = async (userID: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.post(`/users/send_friend_request/${userID}`, '');
  };
  acceptFriendRequest = async (userID: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.post(`/users/accept_friend_request/${userID}`, '');
  };
  cancelFriendRequest = async (userID: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.post(`/users/cancel_friend_request/${userID}`);
  };
  declineFriendRequest = async (userID: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.post(`/users/decline_friend_request/${userID}`);
  };
  deleteFriend = async (userID: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.post(`/users/delete_friend/${userID}`);
  };

  getShouldAddFriend = async (): Promise<AxiosResponse<IResponse<IUserInfo[]>>> => {
    return await this.get(`/users/should-add-friend`);
  };
  getUserInfo = async (): Promise<AxiosResponse<IResponse<IUserInfo>>> => {
    return await this.get(`/users/me`);
  };
  getUserInfoByID = async (userID: string): Promise<AxiosResponse<IResponse<IUserInfo>>> => {
    return await this.get(`/users/find/${userID}`);
  };
  searchUsersByName = async (
    keyword: string,
    page: number
  ): Promise<AxiosResponse<IResponse<IUserInfo[]>>> => {
    return await this.get(`/users/search/top/?search=${keyword}&page=${page}`);
  };

  getRepository = async (link: string): Promise<AxiosResponse<ICreateRepository[]>> => {
    return await this.getGithub(link);
  };

  getReputation = async (userID: string): Promise<AxiosResponse<IResponse<IReputation>>> => {
    return await this.get(`/users/reputation`);
  };
}

export const userService = new UserService();
