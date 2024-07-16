import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import { ICommunity, IResponse, IUserRecommended } from '@/types';

class RecommendService extends BaseService {
  constructor() {
    super();
  }

  getRecommendUsers = async (userID: string): Promise<AxiosResponse<IResponse<IUserRecommended[]>>> => {
    return await this.getRecommend(`/users/${userID}`);
  };

  getRecommendCommunities = async (userID: string): Promise<AxiosResponse<IResponse<ICommunity[]>>> => {
    return await this.getRecommend(`/communities/${userID}`);
  }
}

export const recommendService = new RecommendService();
