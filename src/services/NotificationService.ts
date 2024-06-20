import { AxiosResponse } from 'axios';

import { INotification, IResponse } from '@/types';
import { BaseService } from './BaseService';

class NotificationService extends BaseService {
  constructor() {
    super();
  }

  getAllNotifications = async (page: number): Promise<AxiosResponse<IResponse<INotification[]>>> => {
    return await this.get(`/notifications/all?page=${page}`);
  };

  readAllNotifications = async (): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/notifications/read-all`);
  };

  getUnRedNotiNumber = async (): Promise<AxiosResponse<IResponse<number>>> => {
    return await this.get(`/notifications/unread-number`);
  };

  markIsReadNotify = async (id: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/notifications/mark-read/${id}`);
  };

  setSubUnRedNotiNumber = async (): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/notifications/sub-unread-number`);
  };

  markAllAsReadNotify = async (): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/notifications/mark-all-read`);
  };

  deleteNotify = async (id: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.delete(`/notifications/${id}`);
  };
}

export const notiService = new NotificationService();
