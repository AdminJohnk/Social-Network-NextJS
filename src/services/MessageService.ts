import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import {
  ICalled,
  IConversation,
  ICreateConversation,
  ICreateMessage,
  IMessage,
  IResponse,
  ISocketCall,
  IUserInfo
} from '@/types';

class MessageService extends BaseService {
  constructor() {
    super();
  }

  getConversations = async (): Promise<AxiosResponse<IResponse<IConversation[]>>> => {
    return await this.get(`/chat/conversations`);
  };

  createConversation = async (
    conversation: ICreateConversation
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.post(`/chat/conversations/create`, conversation);
  };

  getConversation = async (conversationID: string): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.get(`/chat/conversations/find/${conversationID}`);
  };

  getCalled = async (): Promise<AxiosResponse<IResponse<ICalled[]>>> => {
    return await this.get(`/chat/conversations/called`);
  };

  getMessages = async (
    conversationID: string,
    page: number,
    extend?: number
  ): Promise<AxiosResponse<IResponse<IMessage[]>>> => {
    return await this.get(`/chat/conversations/${conversationID}/messages?page=${page}&extend=${extend}`);
  };

  getMessagesWithImage = async (
    conversationID: string,
    page: number,
    extend?: number
  ): Promise<AxiosResponse<IResponse<IMessage[]>>> => {
    return await this.get(`/chat/conversations/${conversationID}/images?page=${page}&extend=${extend}`);
  };

  getAllUsersUsedToChatWith = async (): Promise<AxiosResponse<IResponse<IUserInfo[]>>> => {
    return await this.get(`/chat/users`);
  };

  seenMessage = async (conversationID: string) => {
    return await this.post(`/chat/conversations/${conversationID}/seen`, {});
  };

  sendMessage = async (message: ICreateMessage) => {
    return await this.post(`/chat/messages`, message);
  };

  getToken = async (
    conversationID: string | undefined,
    type: string
  ): Promise<AxiosResponse<IResponse<ISocketCall>>> => {
    return await this.get(`/chat/token/?conversation_id=${conversationID}&type=${type}`);
  };

  dissolveGroup = async (conversationID: string): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.delete(`/chat/conversations/${conversationID}`);
  };

  deleteConversation = async (conversationID: string): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.put(`/chat/conversations/${conversationID}/delete`);
  };

  leaveGroup = async (conversationID: string): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.put(`/chat/conversations/${conversationID}/leave`);
  };

  changeConversationImage = async (
    conversationID: string,
    image: File
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    const formData = new FormData();
    formData.append('image', image);
    return await this.put(`/chat/conversations/${conversationID}/image`, formData);
  };

  changeConversationName = async (
    conversationID: string,
    name: string
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.put(`/chat/conversations/${conversationID}/name`, { name });
  };

  addMember = async (
    conversationID: string,
    members: string[]
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.put(`/chat/conversations/${conversationID}/members`, members);
  };

  removeMember = async (
    conversationID: string,
    memberID: string
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.delete(`/chat/conversations/${conversationID}/members/delete`, [memberID]);
  };

  commissionAdmin = async (
    conversationID: string,
    adminID: string
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.put(`/chat/conversations/${conversationID}/admins`, [adminID]);
  };

  removeAdmin = async (
    conversationID: string,
    adminID: string
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return await this.put(`/chat/conversations/${conversationID}/admins/remove`, [adminID]);
  };
}

export const messageService = new MessageService();
