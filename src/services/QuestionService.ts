import { AxiosResponse } from 'axios';

import {
  IAllQuestionItem,
  ICommentVoteQuestion,
  ICreateAnswerQuestion,
  ICreateCommentAnswer,
  ICreateCommentQuestion,
  ICreateQuestion,
  ICreateVoteAnswer,
  ICreateVoteQuestion,
  IDeleteAnswer,
  IDeleteCommentQuestion,
  IQuestion,
  IResponse,
  IUpdateAnswer,
  IUpdateCommentQuestion,
  IUpdateQuestion
} from '@/types';
import { BaseService } from './BaseService';

class QuestionService extends BaseService {
  constructor() {
    super();
  }

  createQuestion = async (data: ICreateQuestion): Promise<AxiosResponse<IResponse<IQuestion>>> => {
    return await this.post(`/questions/create`, data);
  };

  updateQuestion = async (data: IUpdateQuestion): Promise<AxiosResponse<IResponse<IQuestion>>> => {
    return await this.put(`/questions/update/${data.id}`, data);
  };

  deleteQuestion = async (id: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.delete(`/questions/delete/${id}`);
  };

  getQuestionByID = async (id: string): Promise<AxiosResponse<IResponse<IQuestion>>> => {
    return await this.get(`/questions/find/${id}`);
  };

  viewQuestion = async (id: string): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/view/${id}`);
  };

  voteQuestion = async (data: ICreateVoteQuestion): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/vote/${data.question_id}?type=${data.type}`);
  };

  commentQuestion = async (data: ICreateCommentQuestion): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/comment/${data.question_id}`, data);
  };

  updateCommentQuestion = async (
    data: ICreateCommentQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/comment/update/${data.question_id}`, data);
  };

  deleteCommentQuestion = async (
    data: IDeleteCommentQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.delete(`/questions/comment/delete/${data.question_id}`, data);
  };

  voteCommentQuestion = async (data: ICommentVoteQuestion): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/comment/vote/${data.question_id}`, data);
  };

  answerQuestion = async (data: ICreateAnswerQuestion): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/answer/${data.question_id}`, data);
  };
  updateAnswer = async (data: IUpdateAnswer): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/answer/update/${data.question_id}`, data);
  };

  deleteAnswer = async (data: IDeleteAnswer): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.delete(`/questions/answer/delete/${data.question_id}`, data);
  };

  commentAnswer = async (data: ICreateCommentAnswer): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/answer/comment/${data.question_id}`, data);
  };

  updateCommentAnswer = async (data: IUpdateCommentQuestion): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/answer/comment/update/${data.question_id}`, data);
  };

  voteCommentAnswer = async (data: ICommentVoteQuestion): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/answer/comment/vote/${data.question_id}`, data);
  };

  deleteCommentAnswer = async (data: IDeleteCommentQuestion): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.delete(`/questions/answer/comment/delete/${data.question_id}`, data);
  };

  voteAnswer = async (data: ICreateVoteAnswer): Promise<AxiosResponse<IResponse<boolean>>> => {
    return await this.put(`/questions/answer/vote/${data.question_id}`, data);
  };

  saveQuestion = (
    questionID: string
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/save/${questionID}`);
  };

  getAllQuestions = (
    pageParam: number
  ): Promise<AxiosResponse<IResponse<IAllQuestionItem[]>>> => {
    return this.get(`/questions/all?page=${pageParam}`);
  };

  getNumberQuestions = (): Promise<AxiosResponse<IResponse<number>>> => {
    return this.get(`/questions/number`);
  };

  getAllTagQuestions = (
    pageParam: number
  ): Promise<AxiosResponse<IResponse<IAllQuestionItem[]>>> => {
    return this.get(`/questions/tags/all?page=${pageParam}`);
  };
}

export const questionService = new QuestionService();
