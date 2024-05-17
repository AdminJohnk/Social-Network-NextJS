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
  createCommunity = (data: ICreateCommunity): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.post('/communities/create', data);
  };
  updateCommunity = (id: string, data: ICreateCommunity): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.put(`/communities/update/${id}`, data);
  };
}

export const communityService = new CommunityService();
