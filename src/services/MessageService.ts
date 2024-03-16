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

  getConversations = (): Promise<AxiosResponse<IResponse<IConversation[]>>> => {
    return this.get(`/chat/conversations`);
  };

  createConversation = (
    conversation: ICreateConversation
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return this.post(`/chat/conversations/create`, conversation);
  };

  getConversation = (conversationID: string): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return this.get(`/chat/conversations/find/${conversationID}`);
  };

  getCalled = (): Promise<AxiosResponse<IResponse<ICalled[]>>> => {
    return this.get(`/chat/conversations/called`);
  };

  getMessages = (
    conversationID: string,
    page: number,
    extend?: number
  ): Promise<AxiosResponse<IResponse<IMessage[]>>> => {
    return this.get(`/chat/conversations/${conversationID}/messages?page=${page}&extend=${extend}`);
  };

  getMessagesWithImage = (
    conversationID: string,
    page: number,
    extend?: number
  ): Promise<AxiosResponse<IResponse<IMessage[]>>> => {
    return this.get(`/chat/conversations/${conversationID}/images?page=${page}&extend=${extend}`);
  };

  getAllUsersUsedToChatWith = (): Promise<AxiosResponse<IResponse<IUserInfo[]>>> => {
    return this.get(`/chat/users`);
  };

  seenMessage = (conversationID: string) => {
    return this.post(`/chat/conversations/${conversationID}/seen`, {});
  };

  sendMessage = (message: ICreateMessage) => {
    return this.post(`/chat/messages`, message);
  };

  getToken = (
    conversationID: string | undefined,
    type: string
  ): Promise<AxiosResponse<IResponse<ISocketCall>>> => {
    return this.get(`/chat/token/?conversation_id=${conversationID}&type=${type}`);
  };

  dissolveGroup = (conversationID: string): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return this.delete(`/chat/conversations/${conversationID}`);
  };

  leaveGroup = (conversationID: string): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return this.put(`/chat/conversations/${conversationID}/leave`);
  };

  changeConversationImage = (
    conversationID: string,
    image: File
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    const formData = new FormData();
    formData.append('image', image);
    return this.put(`/chat/conversations/${conversationID}/image`, formData);
  };

  changeConversationName = (
    conversationID: string,
    name: string
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return this.put(`/chat/conversations/${conversationID}/name`, { name });
  };

  addMember = (
    conversationID: string,
    members: string[]
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return this.put(`/chat/conversations/${conversationID}/members`, members);
  };

  removeMember = (
    conversationID: string,
    memberID: string
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return this.delete(`/chat/conversations/${conversationID}/members/delete`, [memberID]);
  };

  commissionAdmin = (
    conversationID: string,
    adminID: string
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return this.put(`/chat/conversations/${conversationID}/admins`, [adminID]);
  };

  removeAdmin = (
    conversationID: string,
    adminID: string
  ): Promise<AxiosResponse<IResponse<IConversation>>> => {
    return this.put(`/chat/conversations/${conversationID}/admins/remove`, [adminID]);
  };
}

export const messageService = new MessageService();
