import { create } from 'zustand';
import { Socket, io } from 'socket.io-client';

interface member {
  _id: string;
  last_online: string;
  first_online: boolean;
  is_online: boolean;
}

interface SocketState {
  activeMembers: member[];
  presenceSocket: Socket;
  chatSocket: Socket;
  setActiveMembers: (members: member[]) => void;
}

const chatServer = process.env.NEXT_PUBLIC_CHAT_SERVER;

export const useSocketStore = create<SocketState>()((set) => ({
  activeMembers: [],
  setActiveMembers: (members: member[]) => set({ activeMembers: members }),
  presenceSocket: io(chatServer + '/presence-service', { transports: ['websocket'] }),
  chatSocket: io(chatServer + '/chat-service', { transports: ['websocket'] })
}));
