import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import {} from '@/types';

class RecommendService extends BaseService {
  constructor() {
    super();
  }
}

export const recommendService = new RecommendService();
