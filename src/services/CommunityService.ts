import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import { ICommunity, ICreateCommunity, IResponse } from '@/types';

class CommunityService extends BaseService {
  constructor() {
    super();
  }
  getCommunityByID = (id: String): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.get(`/communities/${id}`);
  };
  getCommunitiesByUserID = (id: String): Promise<AxiosResponse<IResponse<ICommunity[]>>> => {
    return this.get(`/communities/user/${id}`);
  };
  createCommunity = (data: ICreateCommunity): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.post('/communities/create', data);
  };
  updateCommunity = (id: string, data: ICreateCommunity): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/update/${id}`, data);
  };
  cedeCreator = (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/cede-creator/${id}`, { user_id });
  };
  joinCommunity = (id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/join/${id}`);
  };
  cancelJoinCommunity = (id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/cancel-join/${id}`);
  };
  leaveCommunity = (id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/leave/${id}`);
  };
  acceptPostRequest = (id: string, post_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/accept-post/${id}`, { post_id });
  };
  rejectPostRequest = (id: string, post_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/reject-post/${id}`, { post_id });
  };
  acceptJoinRequest = (id: string, user_ids: string[]): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/accept/${id}`, { user_ids });
  };
  rejectJoinRequest = (id: string, user_ids: string[]): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/reject/${id}`, { user_ids });
  };
  addMembers = (id: string, member_ids: string[]): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/add-members/${id}`, { member_ids });
  };
  deleteMember = (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/delete-members/${id}`, { user_id });
  };
  promoteAdmin = (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/promote-admin/${id}`, { user_id });
  };
  revokeAdmin = (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/revoke-admin/${id}`, { user_id });
  };
}

export const communityService = new CommunityService();
