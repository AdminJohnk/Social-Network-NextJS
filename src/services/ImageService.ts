import { AxiosResponse } from 'axios';

import { IImageResponse, IResponse } from '@/types';
import { BaseService } from './BaseService';

class ImageService extends BaseService {
  constructor() {
    super();
  }
  uploadImage = async (data: FormData): Promise<AxiosResponse<IResponse<IImageResponse>>> => {
    return await this.post(`/images/upload-one`, data);
  };

  uploadImages = async (data: FormData): Promise<AxiosResponse<IResponse<string[]>>> => {
    return await this.post(`/images/upload-multiple`, data);
  };

  deleteImages = async (data: { images: string[] }): Promise<AxiosResponse<IResponse<string[]>>> => {
    return await this.delete(`/images/delete-multiple`, data);
  };
}

export const imageService = new ImageService();
