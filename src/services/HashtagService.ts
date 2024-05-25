import { AxiosResponse } from 'axios';

import { BaseService } from './BaseService';
import { IHashtag, IResponse } from '@/types';

class HashtagService extends BaseService {
  constructor() {
    super();
  }
  getAllHashtags = (): Promise<AxiosResponse<IResponse<IHashtag[]>>> => {
    return this.get(`/hashtags/all`);
  };
}

export const hashtagService = new HashtagService();
