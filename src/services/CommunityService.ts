import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import { ICommunity, IResponse } from '@/types';

class CommunityService extends BaseService {
  constructor() {
    super();
  }
  getCommunityByID = (id: String): Promise<AxiosResponse<IResponse<ICommunity>>> => {
    return this.get(`/communities/${id}`);
  };
}

export const communityService = new CommunityService();
