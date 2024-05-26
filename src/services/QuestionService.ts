import { AxiosResponse } from 'axios';

import {
  ICreateQuestion,
  ICreateVoteQuestion,
  IQuestion,
  IResponse,
  IUpdateQuestion
} from '@/types';
import { BaseService } from './BaseService';

class QuestionService extends BaseService {
  constructor() {
    super();
  }

  createQuestion = (
    data: ICreateQuestion
  ): Promise<AxiosResponse<IResponse<IQuestion>>> => {
    return this.post(`/questions/create`, data);
  };

  updateQuestion = (
    data: IUpdateQuestion
  ): Promise<AxiosResponse<IResponse<IQuestion>>> => {
    return this.put(`/questions/update/${data.id}`, data);
  };

  deleteQuestion = (id: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.delete(`/questions/delete/${id}`);
  };

  getQuestionByID = (
    id: string
  ): Promise<AxiosResponse<IResponse<IQuestion>>> => {
    return this.get(`/questions/find/${id}`);
  };

  viewQuestion = (id: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/view/${id}`);
  };

  voteQuestion = (
    data: ICreateVoteQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/vote/${data.question_id}?type=${data.type}`);
  };
}

export const questionService = new QuestionService();
