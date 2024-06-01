import { AxiosResponse } from 'axios';

import { INotification, IResponse } from '@/types';
import { BaseService } from './BaseService';

class NotificationService extends BaseService {
  constructor() {
    super();
  }

  getNoti = async (userID: number, page: number): Promise<AxiosResponse<IResponse<INotification[]>>> => {
    return await this.get(`/notifications/newnoti/${userID}?page=${page}`);
  };
}

export const notiService = new NotificationService();
