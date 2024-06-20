import { INotification } from '@/types';
import { create } from 'zustand';

interface NotifyState {
  unReadNotifyNumber: number;
  setUnReadNotifyNumber: (notifyNumber: number) => void;
  allNotifyState: INotification[];
  setAllNotifyState: (allNotifyState: INotification[]) => void;
}

export const useNotificationStore = create<NotifyState>()((set) => ({
  unReadNotifyNumber: 0,
  setUnReadNotifyNumber: (unReadNotifyNumber: number) => set({ unReadNotifyNumber }),
  allNotifyState: [],
  setAllNotifyState: (allNotifyState: INotification[]) => set({ allNotifyState })
}));
