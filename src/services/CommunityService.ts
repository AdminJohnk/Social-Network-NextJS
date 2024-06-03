import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import { ICommunity, ICreateCommunity, IPost, IResponse, IUpdateCommunity } from '@/types';

class CommunityService extends BaseService {
  constructor() {
    super();
  }
  getAllCommunities = async (): Promise<AxiosResponse<IResponse<ICommunity[]>>> => {
    return await this.get(`/communities`);
  };
  getCommunityByID = async (id: String): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.get(`/communities/${id}`);
  };
  getCommunitiesByUserID = async (id: String): Promise<AxiosResponse<IResponse<ICommunity[]>>> => {
    return await this.get(`/communities/user/${id}`);
  };
  createCommunity = async (data: ICreateCommunity): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.post('/communities/create', data);
  };
  updateCommunity = async (data: IUpdateCommunity): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/update/${data.id}`, data);
  };
  cedeCreator = async (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/cede-creator/${id}`, { user_id });
  };
  joinCommunity = async (id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/join/${id}`);
  };
  cancelJoinCommunity = async (id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/cancel-join/${id}`);
  };
  leaveCommunity = async (id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/leave/${id}`);
  };
  acceptPostRequest = async (id: string, post_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/accept-post/${id}`, { post_id });
  };
  rejectPostRequest = async (id: string, post_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/reject-post/${id}`, { post_id });
  };
  acceptJoinRequest = async (
    id: string,
    user_ids: string[]
  ): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/accept/${id}`, { user_ids });
  };
  rejectJoinRequest = async (
    id: string,
    user_ids: string[]
  ): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/reject/${id}`, { user_ids });
  };
  addMembers = async (id: string, member_ids: string[]): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/add-members/${id}`, { member_ids });
  };
  deleteMember = async (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/delete-members/${id}`, { user_id });
  };
  promoteAdmin = async (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/promote-admin/${id}`, { user_id });
  };
  revokeAdmin = async (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return await this.put(`/communities/revoke-admin/${id}`, { user_id });
  };
  getAllCommunityImages = async (id: string): Promise<AxiosResponse<IResponse<string[]>>> => {
    return await this.get(`/communities/images/${id}`);
  };
  getAllCommunitiesYouManage = async (pageParam: number): Promise<AxiosResponse<IResponse<ICommunity[]>>> => {
    return await this.get(`/communities/manage?page=${pageParam}`);
  };
  getCommunityPostByID = async (
    communityID: string,
    postID: string
  ): Promise<AxiosResponse<IResponse<IPost>>> => {
    return await this.get(`/communities/${communityID}/post/${postID}`);
  };
  getPostsByCommunityID = async (
    communityID: string,
    pageParam: number
  ): Promise<AxiosResponse<IResponse<IPost[]>>> => {
    return await this.get(`/communities/${communityID}/posts?page=${pageParam}`);
  };
}

export const communityService = new CommunityService();
