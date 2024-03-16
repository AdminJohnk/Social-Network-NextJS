import { AxiosResponse } from 'axios';

import {  IImageResponse, IResponse } from '@/types';
import { BaseService } from './BaseService';

class ImageService extends BaseService {
  constructor() {
    super();
  }
  uploadImage = (data: FormData): Promise<AxiosResponse<IResponse<IImageResponse>>> => {
    return this.post(`/images/upload-one`, data);
  };

  uploadImages = (data: FormData): Promise<AxiosResponse<IResponse<string[]>>> => {
    return this.post(`/images/upload-multiple`, data);
  };
}

export const imageService = new ImageService();
