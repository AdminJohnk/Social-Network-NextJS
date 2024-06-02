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

  commentQuestion = (
    data: ICreateCommentQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/comment/${data.question_id}`, data);
  };

  updateCommentQuestion = (
    data: ICreateCommentQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/comment/update/${data.question_id}`, data);
  };

  deleteCommentQuestion = (
    data: IDeleteCommentQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.delete(`/questions/comment/delete/${data.question_id}`, data);
  };

  voteCommentQuestion = (
    data: ICommentVoteQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/comment/vote/${data.question_id}`, data);
  };

  answerQuestion = (
    data: ICreateAnswerQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/answer/${data.question_id}`, data);
  };
  updateAnswer = (
    data: IUpdateAnswer
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/answer/update/${data.question_id}`, data);
  };

  deleteAnswer = (
    data: IDeleteAnswer
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.delete(`/questions/answer/delete/${data.question_id}`, data);
  };

  commentAnswer = (
    data: ICreateCommentAnswer
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/answer/comment/${data.question_id}`, data);
  };

  updateCommentAnswer = (
    data: IUpdateCommentQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(
      `/questions/answer/comment/update/${data.question_id}`,
      data
    );
  };

  voteCommentAnswer = (
    data: ICommentVoteQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/answer/comment/vote/${data.question_id}`, data);
  };

  deleteCommentAnswer = (
    data: IDeleteCommentQuestion
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.delete(
      `/questions/answer/comment/delete/${data.question_id}`,
      data
    );
  };

  voteAnswer = (
    data: ICreateVoteAnswer
  ): Promise<AxiosResponse<IResponse<boolean>>> => {
    return this.put(`/questions/answer/vote/${data.question_id}`, data);
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
