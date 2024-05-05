import { create } from 'zustand';
import { ICreateComment } from '@/types';

interface CommentState {
  comment?: ICreateComment;
  setComment: (comment?: ICreateComment) => void;
}

export const useCommentStore = create<CommentState>()((set) => ({
  comment: undefined,
  setComment: (comment?: ICreateComment) => set({ comment })
}));
