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
  joinCommunity = (id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/join/${id}`);
  };
  acceptJoinRequest = (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/accept/${id}`, { user_id });
  };
  rejectJoinRequest = (id: string, user_id: string): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/reject/${id}`, { user_id });
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
