import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import { IResponse } from '@/types';

class GetStartedService extends BaseService {
  constructor() {
    super();
  }
  chooseGetStarted = async (number: Number): Promise<AxiosResponse<IResponse<any>>> => {
    return await this.post(`/getstarted`, number);
  };
  chooseInterest = async (interest: any): Promise<AxiosResponse<IResponse<any>>> => {
    return await this.post(`/users/expertise`, interest);
  };
  getShouldAddFriend = async (): Promise<AxiosResponse<IResponse<any>>> => {
    return await this.get(`/user/shouldAddFriend`);
  };
  chooseShouldFriendPeople = async (arrPeople: any): Promise<AxiosResponse<IResponse<any>>> => {
    return await this.post(`/interest`, arrPeople);
  };
}

export const getStartedService = new GetStartedService();
