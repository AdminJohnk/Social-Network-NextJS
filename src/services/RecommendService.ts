import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import { IResponse, IUserRecommended } from '@/types';

class RecommendService extends BaseService {
  constructor() {
    super();
  }

  getRecommendUsers = async (userID: string): Promise<AxiosResponse<IResponse<IUserRecommended[]>>> => {
    return await this.getRecommend(`/users/${userID}`);
  };
}

export const recommendService = new RecommendService();
