import { BaseService } from './BaseService';

class HashtagService extends BaseService {
  constructor() {
    super();
  }
  getAllHashtags = () => {
    return this.get(`/hashtags/all`);
  };
}

export const hashtagService = new HashtagService();
