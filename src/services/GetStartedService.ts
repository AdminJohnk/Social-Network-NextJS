import { BaseService } from './BaseService';

class GetStartedService extends BaseService {
  constructor() {
    super();
  }
  chooseGetStarted = (number: Number) => {
    return this.post(`/getstarted`, number);
  };
  chooseInterest = (interest: any) => {
    return this.post(`/users/expertise`, interest);
  };
  getShouldAddFriend = () => {
    return this.get(`/user/shouldAddFriend`);
  };
  chooseShouldFriendPeople = (arrPeople: any) => {
    return this.post(`/interest`, arrPeople);
  };
}

export const getStartedService = new GetStartedService();
