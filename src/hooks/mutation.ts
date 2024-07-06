'use client';

import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

import { postService } from '@/services/PostService';
import { userService } from '@/services/UserService';
import { adminService } from '@/services/AdminService';
import {
  IConversation,
  ICreateComment,
  ICreateCommunity,
  ICreateCommentSeriesPost,
  ICreateLikeComment,
  ICreatePost,
  ICreateReplyCommentSeriesPost,
  ICreateReviewSeries,
  ICreateSearchLog,
  ICreateSeries,
  ICreateSeriesPost,
  IDeleteCommentSeriesPost,
  IDeleteReplyCommentSeriesPost,
  IDeleteReviewSeries,
  IDeleteSeriesPost,
  ILikeCommentSeriesPost,
  ILikeReplyCommentSeriesPost,
  ILikeSeriesPost,
  IMessage,
  IResetPassword,
  ISaveSeriesPost,
  ISharePost,
  ISocketCall,
  IUpdateCommentSeriesPost,
  IUpdateConversation,
  IUpdatePost,
  IUpdateReplyCommentSeriesPost,
  IUpdateSeries,
  IUpdateSeriesPost,
  IUserInfo,
  IUserUpdate,
  ICreateQuestion,
  IUpdateCommunity,
  ICreateVoteQuestion,
  IUpdateQuestion,
  ICreateCommentQuestion,
  IUpdateCommentQuestion,
  ICommentVoteQuestion,
  IDeleteCommentQuestion,
  ICreateAnswerQuestion,
  IUpdateAnswer,
  IDeleteAnswer,
  ICreateCommentAnswer,
  ICreateVoteAnswer,
  IMoveToListQuestion,
  IRemoveFromListQuestion,
  IUpdateNameListQuestion,
  IVerifyCode,
  IForgotPassword,
  IUserRegister,
  IUpdateCommentPost
} from '@/types';
import { messageService } from '@/services/MessageService';
import { authService } from '@/services/AuthService';
import { searchLogService } from '@/services/SearchLogService';
import { usePathname, useRouter } from '@/navigation';
import { useSocketStore } from '@/store/socket';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { imageService } from '@/services/ImageService';
import { seriesService } from '@/services/SeriesService';
import { communityService } from '@/services/CommunityService';
import { questionService } from '@/services/QuestionService';
import { notiService } from '@/services/NotificationService';
import { aiChatService } from '@/services/AIChatService';

// ----------------------------- MUTATIONS -----------------------------

export const useChangePassword = () => {
  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: async (data: IResetPassword) => {
      const { data: res } = await authService.changePassword(data);
      return res.metadata;
    }
  });
  return {
    mutateChangePassword: mutateAsync,
    isLoadingChangePassword: isPending,
    isErrorChangePassword: isError,
    errorChangePassword: error,
    isSuccessChangePassword: isSuccess
  };
};

export const useForgotPassword = () => {
  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: async (email: string) => {
      const { data: res } = await authService.forgotPassword(email);
      return res.metadata;
    }
  });
  return {
    mutateForgotPassword: mutateAsync,
    isLoadingForgotPassword: isPending,
    isErrorForgotPassword: isError,
    errorForgotPassword: error,
    isSuccessForgotPassword: isSuccess
  };
};

export const useVerifyCode = () => {
  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: async (data: IVerifyCode) => {
      const { data: res } = await authService.verifyCode(data);
      return res.metadata;
    }
  });
  return {
    mutateVerifyCode: mutateAsync,
    isLoadingVerifyCode: isPending,
    isErrorVerifyCode: isError,
    errorVerifyCode: error,
    isSuccessVerifyCode: isSuccess
  };
};

export const useCheckVerifyCode = () => {
  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: async (data: IForgotPassword) => {
      const { data: res } = await authService.checkVerifyCode(data);
      return res.metadata;
    }
  });
  return {
    mutateCheckVerifyCode: mutateAsync,
    isLoadingCheckVerifyCode: isPending,
    isErrorCheckVerifyCode: isError,
    errorCheckVerifyCode: error,
    isSuccessCheckVerifyCode: isSuccess
  };
};

export const useResetPassword = () => {
  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: async (data: IResetPassword) => {
      const { data: res } = await authService.resetPassword(data);
      return res.metadata;
    }
  });
  return {
    mutateResetPassword: mutateAsync,
    isLoadingResetPassword: isPending,
    isErrorResetPassword: isError,
    errorResetPassword: error,
    isSuccessResetPassword: isSuccess
  };
};

export const useCheckResetPassword = () => {
  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: async (data: IForgotPassword) => {
      const { data: res } = await authService.checkResetPassword(data);
      return res.metadata;
    }
  });
  return {
    mutateCheckResetPassword: mutateAsync,
    isLoadingCheckResetPassword: isPending,
    isErrorCheckResetPassword: isError,
    errorCheckResetPassword: error,
    isSuccessCheckResetPassword: isSuccess
  };
};

/**
 * The `useCreatePost` function is a custom hook that handles the creation of a new post, including
 * making an API request and updating the query data for the user's posts and the newsfeed.
 */
export const useCreatePost = (communityID?: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: async (newPost: ICreatePost) => {
      const { data } = await postService.createPost(newPost);
      return data.metadata;
    },
    async onSuccess() {
      const session = await getSession();
      queryClient.invalidateQueries({ queryKey: ['posts', session?.id] });
      queryClient.invalidateQueries({ queryKey: ['allNewsfeedPosts'] });
      if (communityID) {
        queryClient.invalidateQueries({ queryKey: ['community', communityID] });
        queryClient.invalidateQueries({ queryKey: ['communities'] });
      }
    }
  });
  return {
    mutateCreatePost: mutateAsync,
    isLoadingCreatePost: isPending,
    isErrorCreatePost: isError,
    errorCreatePost: error,
    isSuccessCreatePost: isSuccess
  };
};

/**
 * The `useViewPost` function is a custom hook that handles the logic for viewing a post, including
 * making a mutation request to the server and updating the cache.
 */
export const useViewPost = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (postID: string) => {
      await postService.viewPost(postID);
    }
  });
  return {
    mutateViewPost: mutateAsync,
    isLoadingViewPost: isPending,
    isErrorViewPost: isError,
    isSuccessViewPost: isSuccess
  };
};

/**
 * The `useUpdatePost` function is a custom hook that handles the mutation logic for updating a post,
 * including invalidating relevant query caches.
 */
export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (post: IUpdatePost) => {
      const { data } = await postService.updatePost(post.id, post.postUpdate);
      return data.metadata;
    },
    async onSuccess(updatedPost) {
      const session = await getSession();
      queryClient.invalidateQueries({
        queryKey: ['posts', updatedPost.post_attributes.user._id]
      });
      queryClient.invalidateQueries({ queryKey: ['allNewsfeedPosts'] });
      queryClient.invalidateQueries({ queryKey: ['post', updatedPost._id] });
      queryClient.invalidateQueries({ queryKey: ['allImages', session?.id] });
    }
  });
  return {
    mutateUpdatePost: mutateAsync,
    isLoadingUpdatePost: isPending,
    isErrorUpdatePost: isError,
    isSuccessUpdatePost: isSuccess
  };
};

/**
 * The `useDeletePost` function is a custom hook that handles the deletion of a post and invalidates
 * the relevant query caches upon success.
 */
/**
 * The `useDeletePost` function is a custom hook that handles the deletion of a post and invalidates
 * the relevant query caches upon success.
 */
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (postID: string) => {
      await postService.deletePost(postID);
    },
    async onSuccess() {
      const session = await getSession();

      queryClient.invalidateQueries({ queryKey: ['posts', session?.id] });

      queryClient.invalidateQueries({ queryKey: ['allNewsfeedPosts'] });
    }
  });
  return {
    mutateDeletePost: mutateAsync,
    isLoadingDeletePost: isPending,
    isErrorDeletePost: isError,
    isSuccessDeletePost: isSuccess
  };
};

/**
 * The `useLikePost` function is a custom hook that handles the logic for liking a post, including
 * making the API call and updating the cache.
 */
export const useLikePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (post: ISharePost) => {
      await postService.likePost(post);
    },
    onSuccess(_, postLike) {
      queryClient.invalidateQueries({ queryKey: ['post', postLike.post] });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['allNewsfeedPosts'] });
    }
  });
  return {
    mutateLikePost: mutateAsync,
    isLoadingLikePost: isPending,
    isErrorLikePost: isError,
    isSuccessLikePost: isSuccess
  };
};

/**
 * The `useSharePost` function is a custom hook that handles the mutation logic for sharing a post,
 * including invalidating the post query cache on success.
 */
export const useSharePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (post: ISharePost) => {
      await postService.sharePost(post);
    },
    onSuccess(_, postShare) {
      queryClient.invalidateQueries({ queryKey: ['post', postShare.post] });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['allNewsfeedPosts'] });
    }
  });
  return {
    mutateSharePost: mutateAsync,
    isLoadingSharePost: isPending,
    isErrorSharePost: isError,
    isSuccessSharePost: isSuccess
  };
};

/**
 * The `useDeleteSharedPost` function is a custom hook that handles the logic for deleting a shared post,
 * including making the API call and updating the cache.
 */
export const userDeleteSharedPost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (post: ISharePost) => {
      await postService.deleteSharedPost(post);
    },
    async onSuccess() {
      const session = await getSession();

      queryClient.invalidateQueries({ queryKey: ['posts', session?.id] });
      queryClient.invalidateQueries({ queryKey: ['allNewsfeedPosts'] });
    }
  });
  return {
    mutateDeleteSharedPost: mutateAsync,
    isLoadingDeleteSharedPost: isPending,
    isErrorDeleteSharedPost: isError,
    isSuccessDeleteSharedPost: isSuccess
  };
};

/**
 * The `useSavePost` function is a custom hook that handles saving a post, invalidating the post query
 * cache on success.
 */
export const useSavePost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (postID: string) => {
      await postService.savePost(postID);
    },
    onSuccess(_, postID) {
      queryClient.invalidateQueries({ queryKey: ['post', postID] });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['allNewsfeedPosts'] });
      queryClient.invalidateQueries({ queryKey: ['savedPosts'] });
    }
  });
  return {
    mutateSavePost: mutateAsync,
    isLoadingSavePost: isPending,
    isErrorSavePost: isError,
    isSuccessSavePost: isSuccess
  };
};

/**
 * The `useCommentPost` function is a custom hook that handles the creation of a new comment and
 * invalidates the comments query cache upon success.
 */
export const useCommentPost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess, variables } = useMutation({
    mutationFn: async (commentData: ICreateComment) => {
      await postService.createComment(commentData);
    },
    async onSuccess(_, newComment) {
      const session = await getSession();
      queryClient.invalidateQueries({
        queryKey: ['comments', newComment.post]
      });

      queryClient.invalidateQueries({
        queryKey: ['childComments', newComment.parent]
      });

      queryClient.invalidateQueries({ queryKey: ['post', newComment.post] });

      queryClient.invalidateQueries({ queryKey: ['allNewsfeedPosts'] });

      queryClient.invalidateQueries({ queryKey: ['posts', session?.id] });
    }
  });
  return {
    comment: variables,
    mutateCommentPost: mutateAsync,
    isLoadingCommentPost: isPending,
    isErrorCommentPost: isError,
    isSuccessCommentPost: isSuccess
  };
};

/**
 * The `useLikeComment` function is a custom hook that handles the logic for liking a comment and
 * invalidating the cache for the comments associated with the post.
 */
export const useLikeComment = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (payload: ICreateLikeComment) => {
      await postService.likeComment(payload.id, payload.comment);
    },
    onSuccess(_, payload) {
      queryClient.invalidateQueries({
        queryKey: ['comments', payload.comment.post]
      });
      queryClient.invalidateQueries({
        queryKey: ['childComments', payload.id]
      });
    }
  });
  return {
    mutateLikeComment: mutateAsync,
    isLoadingLikeComment: isPending,
    isErrorLikeComment: isError,
    isSuccessLikeComment: isSuccess
  };
};

/**
 * The `useDislikeComment` function is a custom hook that handles the logic for disliking a comment,
 * including making the API request and updating the cache.
 */
export const useDislikeComment = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (payload: ICreateLikeComment) => {
      await postService.dislikeComment(payload.id, payload.comment);
    },
    onSuccess(_, payload) {
      queryClient.invalidateQueries({
        queryKey: ['comments', payload.comment.post]
      });
      queryClient.invalidateQueries({
        queryKey: ['childComments', payload.id]
      });
    }
  });
  return {
    mutateDislikeComment: mutateAsync,
    isLoadingDislikeComment: isPending,
    isErrorDislikeComment: isError,
    isSuccessDislikeComment: isSuccess
  };
};

/**
 * The `useUpdateUser` function is a custom hook that handles updating a user's information and
 * invalidating the 'currentUserInfo' query in the query cache upon success.
 */
/**
 * The `useUpdateUser` function is a custom hook that handles updating a user's information and
 * invalidating the 'currentUserInfo' query in the query cache upon success.
 */
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (user: IUserUpdate) => {
      const { data } = await userService.updateUser(user);
      return data.metadata;
    },
    onSuccess(updatedUser) {
      queryClient.setQueryData<IUserInfo>(['currentUserInfo'], (oldData) => {
        if (!oldData) return;

        return { ...oldData, ...updatedUser };
      });
    }
  });
  return {
    mutateUpdateUser: mutateAsync,
    isLoadingUpdateUser: isPending,
    isErrorUpdateUser: isError,
    isSuccessUpdateUser: isSuccess
  };
};

/**
 * The `useFollowUser` function is a custom hook that handles following a user, including making the
 * API call, handling loading and error states, and invalidating relevant queries in the query cache.
 */
export const useAddFriendUser = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (userID: string) => {
      await userService.sendFriendRequest(userID);
    },
    onSuccess(_, userID) {
      queryClient.invalidateQueries({ queryKey: ['currentUserInfo'] });

      queryClient.invalidateQueries({ queryKey: ['otherUserInfo', userID] });
    }
  });
  return {
    mutateAddFriendUser: mutateAsync,
    isLoadingAddFriendUser: isPending,
    isErrorAddFriendUser: isError,
    isSuccessAddFriendUser: isSuccess
  };
};

/**
 * The `useAcceptFriendUser` function is a custom hook that handles accepting a friend request,
 * including making the API call, handling loading and error states, and invalidating relevant
 * queries in the query cache.
 */
export const useAcceptFriendUser = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (userID: string) => {
      await userService.acceptFriendRequest(userID);
    },
    onSuccess(_, userID) {
      queryClient.invalidateQueries({ queryKey: ['currentUserInfo'] });

      queryClient.invalidateQueries({ queryKey: ['otherUserInfo', userID] });
    }
  });
  return {
    mutateAcceptFriendUser: mutateAsync,
    isLoadingAcceptFriendUser: isPending,
    isErrorAcceptFriendUser: isError,
    isSuccessAcceptFriendUser: isSuccess
  };
};

/**
 * The `useCancelFriendUser` function is a custom hook that handles canceling a friend request,
 * including making the API call, handling loading and error states, and invalidating relevant
 * queries in the query cache.
 */
export const useCancelFriendUser = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (userID: string) => {
      await userService.cancelFriendRequest(userID);
    },
    onSuccess(_, userID) {
      queryClient.invalidateQueries({ queryKey: ['currentUserInfo'] });

      queryClient.invalidateQueries({ queryKey: ['otherUserInfo', userID] });
    }
  });
  return {
    mutateCancelFriendUser: mutateAsync,
    isLoadingCancelFriendUser: isPending,
    isErrorCancelFriendUser: isError,
    isSuccessCancelFriendUser: isSuccess
  };
};

/**
 * The `useDeclineFriendUser` function is a custom hook that handles declining a friend request,
 * including making the API call, handling loading and error states, and invalidating relevant
 * queries in the query cache.
 */
export const useDeclineFriendUser = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (userID: string) => {
      await userService.declineFriendRequest(userID);
    },
    onSuccess(_, userID) {
      queryClient.invalidateQueries({ queryKey: ['currentUserInfo'] });

      queryClient.invalidateQueries({ queryKey: ['otherUserInfo', userID] });
    }
  });
  return {
    mutateDeclineFriendUser: mutateAsync,
    isLoadingDeclineFriendUser: isPending,
    isErrorDeclineFriendUser: isError,
    isSuccessDeclineFriendUser: isSuccess
  };
};

/**
 * The `useDeleteFriendUser` function is a custom hook that handles deleting a friend, including
 * making the API call, handling loading and error states, and invalidating relevant queries in the
 * query cache.
 */
export const useDeleteFriendUser = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (userID: string) => {
      await userService.deleteFriend(userID);
    },
    onSuccess(_, userID) {
      queryClient.invalidateQueries({ queryKey: ['currentUserInfo'] });

      queryClient.invalidateQueries({ queryKey: ['otherUserInfo', userID] });
    }
  });
  return {
    mutateDeleteFriendUser: mutateAsync,
    isLoadingDeleteFriendUser: isPending,
    isErrorDeleteFriendUser: isError,
    isSuccessDeleteFriendUser: isSuccess
  };
};

/**
 * The `useSendMessage` function is a custom hook in TypeScript that handles sending a message and
 * updating the query data for conversations and messages.
 */
export const useSendMessage = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess, variables } = useMutation({
    mutationFn: async (message: IMessage) => await Promise.resolve(message),
    onSuccess(message) {
      queryClient.setQueryData<InfiniteData<IMessage[], number>>(
        ['messages', message.conversation_id],
        (oldData) => {
          if (!oldData) return;

          const newPages = [...oldData.pages];

          const lastPage = newPages[newPages.length - 1];
          const updatedLastPage = [...lastPage, message];

          newPages[newPages.length - 1] = updatedLastPage;

          return {
            ...oldData,
            pages: newPages
          };
        }
      );

      queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
        if (!oldData) return;

        const newData = [...oldData];

        const index = newData.findIndex((item) => item._id === message.conversation_id);

        if (index !== -1) {
          newData[index] = {
            ...newData[index],
            lastMessage: message
          };
        }

        return newData.sort((a, b) => {
          const aTime = a.lastMessage?.createdAt || 0;
          const bTime = b.lastMessage?.createdAt || 0;
          return new Date(bTime).getTime() - new Date(aTime).getTime();
        });
      });

      queryClient.setQueryData<IConversation>(['conversation', message.conversation_id], (oldData) => {
        if (!oldData) return;

        return {
          ...oldData,
          lastMessage: message
        };
      });
    }
  });
  return {
    mutateSendMessage: mutateAsync,
    isLoadingSendMessage: isPending,
    isErrorSendMessage: isError,
    isSuccessSendMessage: isSuccess,
    message: variables
  };
};

/**
 * The `useReceiveMessage` function is a custom hook in TypeScript that handles receiving and updating
 * messages in a conversation.
 * @param {string} [conversationID] - The `conversationID` parameter is an optional string that
 * represents the ID of the conversation for which the message is being received. If provided, it is
 * used to determine whether to play a sound notification or not.
 */
export const useReceiveMessage = (currentUserID: string, conversationID?: string) => {
  const NotiMessage = new Audio('/sounds/sound-noti-message.wav');
  const PopMessage = new Audio('/sounds/bubble-popping-short.mp3');
  NotiMessage.volume = 0.3;

  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess, variables } = useMutation({
    mutationFn: async (message: IMessage) => await Promise.resolve(message),
    onSuccess(message) {
      queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
        if (!oldData) return;

        const newData = [...oldData];

        const index = newData.findIndex((item) => item._id === message.conversation_id);

        if (index !== -1) {
          if (conversationID) {
            if (currentUserID !== message.sender._id) {
              if (conversationID === message.conversation_id) PopMessage.play();
              else NotiMessage.play();
            }
          }

          newData[index] = {
            ...newData[index],
            lastMessage: { ...message, isSending: false }
          };

          newData.sort((a, b) => {
            const aTime = a.lastMessage?.createdAt || 0;
            const bTime = b.lastMessage?.createdAt || 0;
            return new Date(bTime).getTime() - new Date(aTime).getTime();
          });
        }

        return newData;
      });

      queryClient.setQueryData<IConversation>(['conversation', message.conversation_id], (oldData) => {
        if (!oldData) return;

        return {
          ...oldData,
          lastMessage: { ...message, isSending: false }
        };
      });

      queryClient.setQueryData<InfiniteData<IMessage[], number>>(
        ['messages', message.conversation_id],
        (oldData) => {
          if (!oldData) return;
          const newPages = [...oldData.pages];

          const pageIndex = newPages.findIndex((page) => page.some((item) => item._id === message._id));

          if (pageIndex !== -1) {
            const newPage = newPages[pageIndex].map((msg) => {
              if (msg._id === message._id) {
                return { ...msg, isSending: false };
              }
              return msg;
            });

            newPages[pageIndex] = newPage;

            return {
              ...oldData,
              pages: newPages
            };
          } else {
            const lastPage = newPages[newPages.length - 1];
            const updatedLastPage = [...lastPage, message];

            newPages[newPages.length - 1] = updatedLastPage;

            return {
              ...oldData,
              pages: newPages
            };
          }
        }
      );
    }
  });

  return {
    mutateReceiveMessage: mutateAsync,
    isLoadingReceiveMessage: isPending,
    isErrorReceiveMessage: isError,
    isSuccessReceiveMessage: isSuccess,
    message: variables
  };
};

/**
 * The `useReceiveConversation` function is a custom hook that handles the mutation of a conversation
 * object and updates the query data for conversations.
 */
export const useReceiveConversation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess, variables } = useMutation({
    mutationFn: async (conversation: IConversation) => await Promise.resolve(conversation),
    onSuccess(conversation) {
      if (!conversation) return;

      queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
        if (!oldData) return;

        const newData = [...oldData];

        const index = newData.findIndex((item) => item._id === conversation._id);

        if (index !== -1) {
          newData[index] = {
            ...newData[index],
            updatedAt: conversation.updatedAt
          };

          newData.sort((a, b) => {
            return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
          });
        } else {
          newData.unshift(conversation);
        }

        return newData;
      });
    }
  });

  return {
    mutateReceiveConversation: mutateAsync,
    isLoadingReceiveConversation: isPending,
    isErrorReceiveConversation: isError,
    isSuccessReceiveConversation: isSuccess,
    conversation: variables
  };
};

/**
 * The `useReceiveSeenMessage` function is a custom hook in TypeScript that handles the mutation
 * of a conversation's "seen" status and updates the query data accordingly.
 */
export const useReceiveSeenMessage = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess, variables } = useMutation({
    mutationFn: async (data: { conversation: IConversation; message: IMessage }) =>
      await Promise.resolve(data),
    onSuccess({ conversation, message }) {
      queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
        if (!oldData) return;

        const newData = [...oldData];

        const index = newData.findIndex((item) => item._id === conversation._id);

        if (index !== -1) {
          newData[index] = {
            ...newData[index],
            lastMessage: message
          };
        }

        return newData;
      });

      queryClient.setQueryData<IConversation>(['conversation', conversation._id], (oldData) => {
        if (!oldData) return;

        return {
          ...oldData,
          lastMessage: message
        };
      });

      queryClient.setQueryData<InfiniteData<IMessage[], number>>(
        ['messages', conversation._id],
        (oldData) => {
          if (!oldData) return;

          const newPages = [...oldData.pages];

          const pageIndex = newPages.findIndex((page) => page.some((item) => item._id === message._id));

          if (pageIndex !== -1) {
            const newPage = newPages[pageIndex].map((msg) => {
              if (msg._id === message._id) {
                return { ...msg, seen: message.seen };
              }
              return msg;
            });

            newPages[pageIndex] = newPage;

            return {
              ...oldData,
              pages: newPages
            };
          }

          return oldData;
        }
      );
    }
  });

  return {
    mutateReceiveSeenMessage: mutateAsync,
    isLoadingReceiveSeenMessage: isPending,
    isErrorReceiveSeenMessage: isError,
    isSuccessReceiveSeenMessage: isSuccess,
    data: variables
  };
};

/**
 * The `useDissolveGroup` function is a custom hook that handles the mutation for dissolving a group
 * conversation and updates the query data accordingly.
 */
/**
 * The `useDissolveGroup` function is a custom hook that handles the mutation for dissolving a group
 * conversation and updates the query data accordingly.
 */
export const useDissolveGroup = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  const { chatSocket } = useSocketStore();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (conversationID: string) => {
      const { data } = await messageService.dissolveGroup(conversationID);
      return data.metadata;
    },
    onSuccess(conversation, conversationID) {
      if (pathname.includes(conversationID)) router.replace('/messages');

      queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
        if (!oldData) return;

        const newData = [...oldData];

        return newData.filter((item) => item._id !== conversationID);
      });
      queryClient.removeQueries({ queryKey: ['conversation', conversationID] });

      chatSocket.emit(Socket.DISSOLVE_GROUP, conversation);
    }
  });

  return {
    mutateDissolveGroup: mutateAsync,
    isLoadingDissolveGroup: isPending,
    isErrorDissolveGroup: isError,
    isSuccessDissolveGroup: isSuccess
  };
};

/**
 * The `useReceiveDissolveGroup` function is a custom hook that handles the mutation for updating
 * conversation data when a group is dissolved.
 */
export const useReceiveDissolveGroup = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  const { mutateAsync, isPending, isError, isSuccess, variables } = useMutation({
    mutationFn: async (conversation: IConversation) => await Promise.resolve(conversation),
    onSuccess(conversation) {
      if (pathname.includes(conversation._id)) router.replace('/messages');
      queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
        if (!oldData) return;

        const newData = [...oldData];

        return newData.filter((item) => item._id !== conversation._id);
      });

      queryClient.removeQueries({
        queryKey: ['conversation', conversation._id]
      });
    }
  });

  return {
    mutateReceiveDissolveGroup: mutateAsync,
    isLoadingReceiveDissolveGroup: isPending,
    isErrorReceiveDissolveGroup: isError,
    isSuccessReceiveDissolveGroup: isSuccess,
    conversation: variables
  };
};

/**
 * The `useLeaveGroup` function is a custom hook in TypeScript that handles leaving a group
 * conversation, updating the conversation list, and emitting a socket event.
 */
/**
 * The `useLeaveGroup` function is a custom hook in TypeScript that handles leaving a group
 * conversation, updating the conversation list, and emitting a socket event.
 */
export const useLeaveGroup = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  const { chatSocket } = useSocketStore();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (conversationID: string) => {
      const { data } = await messageService.leaveGroup(conversationID);
      return data.metadata;
    },
    onSuccess(conversation, conversationID) {
      if (pathname.includes(conversationID)) router.push('/messages');
      queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
        if (!oldData) return;

        const newData = [...oldData].filter((item) => item._id !== conversationID);

        return newData;
      });
      queryClient.removeQueries({ queryKey: ['conversation', conversationID] });

      chatSocket.emit(Socket.LEAVE_GROUP, conversation);
    }
  });

  return {
    mutateLeaveGroup: mutateAsync,
    isLoadingLeaveGroup: isPending,
    isErrorLeaveGroup: isError,
    isSuccessLeaveGroup: isSuccess
  };
};

/**
 * The `useReceiveLeaveGroup` function is a custom hook that handles the mutation for updating
 * conversation data when a user leaves a group.
 */
export const useReceiveLeaveGroup = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess, variables } = useMutation({
    mutationFn: async (conversation: IConversation) => await Promise.resolve(conversation),
    onSuccess(conversation) {
      queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
        if (!oldData) return;

        const newData = [...oldData];

        const index = newData.findIndex((item) => item._id === conversation._id);

        if (index !== -1) {
          newData[index] = {
            ...newData[index],
            members: conversation.members
          };
        }

        return newData;
      });

      queryClient.setQueryData<IConversation>(['conversation', conversation._id], (oldData) => {
        if (!oldData) return;

        return {
          ...oldData,
          members: conversation.members
        };
      });
    }
  });

  return {
    mutateReceiveLeaveGroup: mutateAsync,
    isLoadingReceiveLeaveGroup: isPending,
    isErrorReceiveLeaveGroup: isError,
    isSuccessReceiveLeaveGroup: isSuccess,
    conversation: variables
  };
};

/**
 * The `useMutateMessageCall` function is a custom hook in TypeScript that handles mutation for a
 * message call in a conversation.
 * @param {string | undefined} conversation_id - The conversation_id parameter is a string that
 * represents the ID of a conversation. It is used to identify the specific conversation for which the
 * message call is being made.
 * @param {string} type - The `type` parameter is a string that represents the type of message call. It
 * could be any value that you want to use to differentiate between different types of message calls.
 */
export const useMutateMessageCall = (conversation_id: string | undefined, type: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ISocketCall) => await Promise.resolve(data),
    onSuccess(data) {
      queryClient.setQueryData<ISocketCall>(['messageCall', conversation_id, type], (oldData) => {
        if (!oldData) return;

        return { ...data };
      });
    }
  });

  return {
    mutateMessageCall: mutateAsync,
    isLoadingMessageCall: isPending,
    isErrorMessageCall: isError,
    isSuccessMessageCall: isSuccess
  };
};

/**
 * The `useMutateConversation` function is a custom hook in TypeScript that handles mutations for
 * updating conversation data and updating the query cache.
 */
export const useMutateConversation = (currentUserID: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (payload: IUpdateConversation) => await Promise.resolve(payload),
    onSuccess(conversation) {
      switch (conversation.typeUpdate) {
        case 'name':
          queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
            if (!oldData) return;

            const newData = [...oldData];

            const index = newData.findIndex((item) => item._id === conversation._id);

            if (index !== -1) {
              newData[index] = {
                ...newData[index],
                name: conversation.name
              };
            }

            return newData;
          });

          queryClient.setQueryData<IConversation>(['conversation', conversation._id], (oldData) => {
            if (!oldData) return;

            return {
              ...oldData,
              name: conversation.name
            };
          });
          break;
        case 'image':
          queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
            if (!oldData) return;

            const newData = [...oldData];

            const index = newData.findIndex((item) => item._id === conversation._id);

            if (index !== -1) {
              newData[index] = {
                ...newData[index],
                image: conversation.image
              };
            }

            return newData;
          });

          queryClient.setQueryData<IConversation>(['conversation', conversation._id], (oldData) => {
            if (!oldData) return;

            return {
              ...oldData,
              image: conversation.image
            };
          });
          break;
        case 'cover_image':
          queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
            if (!oldData) return;

            const newData = [...oldData];

            const index = newData.findIndex((item) => item._id === conversation._id);

            if (index !== -1) {
              newData[index] = {
                ...newData[index],
                cover_image: conversation.cover_image
              };
            }

            return newData;
          });

          queryClient.setQueryData<IConversation>(['conversation', conversation._id], (oldData) => {
            if (!oldData) return;

            return {
              ...oldData,
              cover_image: conversation.cover_image
            };
          });
          break;
        case 'add_member':
          queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
            if (!oldData) return;

            const newData = [...oldData];

            const index = newData.findIndex((item) => item._id === conversation._id);

            if (index !== -1) {
              newData[index] = {
                ...newData[index],
                members: conversation.members
              };
            } else {
              newData.unshift(conversation);
            }

            return newData;
          });

          queryClient.setQueryData<IConversation>(['conversation', conversation._id], (oldData) => {
            if (!oldData) return;

            return {
              ...oldData,
              members: conversation.members
            };
          });
          break;
        case 'remove_member':
          queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
            if (!oldData) return;

            const newData = [...oldData];

            const index = newData.findIndex((item) => item._id === conversation._id);

            if (index !== -1) {
              const isHavingMe = newData[index].members.some((item) => item._id === currentUserID);
              const isHavingUser = conversation.members.some((item) => item._id === currentUserID);
              if (isHavingMe && !isHavingUser) {
                if (pathname.includes(conversation._id)) router.replace('/messages');
                newData.splice(index, 1);
              } else {
                newData[index] = {
                  ...newData[index],
                  members: conversation.members
                };
              }
            }

            return newData;
          });

          queryClient.setQueryData<IConversation>(['conversation', conversation._id], (oldData) => {
            if (!oldData) return;

            return {
              ...oldData,
              members: conversation.members
            };
          });
          break;
        case 'commission_admin':
          queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
            if (!oldData) return;

            const newData = [...oldData];

            const index = newData.findIndex((item) => item._id === conversation._id);

            if (index !== -1) {
              newData[index] = {
                ...newData[index],
                admins: conversation.admins
              };
            }

            return newData;
          });

          queryClient.setQueryData<IConversation>(['conversation', conversation._id], (oldData) => {
            if (!oldData) return;

            return {
              ...oldData,
              admins: conversation.admins
            };
          });
          break;
        case 'remove_admin':
          queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
            if (!oldData) return;

            const newData = [...oldData];

            const index = newData.findIndex((item) => item._id === conversation._id);

            if (index !== -1) {
              newData[index] = {
                ...newData[index],
                admins: conversation.admins
              };
            }

            return newData;
          });

          queryClient.setQueryData<IConversation>(['conversation', conversation._id], (oldData) => {
            if (!oldData) return;

            return {
              ...oldData,
              admins: conversation.admins
            };
          });
          break;
        default:
          break;
      }
    }
  });

  return {
    mutateConversation: mutateAsync,
    isLoadingConversation: isPending,
    isErrorConversation: isError,
    isSuccessConversation: isSuccess
  };
};

export const useDeleteConversation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (conversationID: string) => {
      const { data } = await messageService.deleteConversation(conversationID);
      return data.metadata;
    },
    onSuccess(_, conversationID) {
      if (pathname.includes(conversationID)) router.replace('/messages');

      queryClient.setQueryData<IConversation[]>(['conversations'], (oldData) => {
        if (!oldData) return;

        const newData = [...oldData];

        return newData.filter((item) => item._id !== conversationID);
      });

      queryClient.removeQueries({ queryKey: ['conversation', conversationID] });
      queryClient.removeQueries({ queryKey: ['messages', conversationID] });
    }
  });

  return {
    mutateDeleteConversation: mutateAsync,
    isLoadingDeleteConversation: isPending,
    isErrorDeleteConversation: isError,
    isSuccessDeleteConversation: isSuccess
  };
};

export const useCreateSearchLog = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (payload: ICreateSearchLog) => {
      const { data } = await searchLogService.createSearchLog(payload);
      return data.metadata;
    }
  });

  return {
    mutateCreateSearchLog: mutateAsync,
    isLoadingCreateSearchLog: isPending,
    isErrorCreateSearchLog: isError,
    isSuccessCreateSearchLog: isSuccess
  };
};

export const useDeleteSearchLog = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (payload: ICreateSearchLog) => {
      const { data } = await searchLogService.deleteSearchLog(payload);
      return data.metadata;
    }
  });

  return {
    mutateDeleteSearchLog: mutateAsync,
    isLoadingDeleteSearchLog: isPending,
    isErrorDeleteSearchLog: isError,
    isSuccessDeleteSearchLog: isSuccess
  };
};

export const useDeleteImage = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (images: string[]) => {
      await imageService.deleteImages({ images });
    }
  });

  return {
    mutateDeleteImage: mutateAsync,
    isLoadingDeleteImage: isPending,
    isErrorDeleteImage: isError,
    isSuccessDeleteImage: isSuccess
  };
};

export const useUploadImage = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: FormData) => {
      const { data: dataImage } = await imageService.uploadImage(data);
      return dataImage.metadata;
    }
  });

  return {
    mutateUploadImage: mutateAsync,
    isLoadingUploadImage: isPending,
    isErrorUploadImage: isError,
    isSuccessUploadImage: isSuccess
  };
};

export const useUploadImages = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: FormData) => {
      const { data: dataImages } = await imageService.uploadImages(data);
      return dataImages.metadata;
    }
  });

  return {
    mutateUploadImages: mutateAsync,
    isLoadingUploadImages: isPending,
    isErrorUploadImages: isError,
    isSuccessUploadImages: isSuccess
  };
};

export const useIncreaseViewSeries = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (seriesID: string) => {
      const { data } = await seriesService.increaseViewSeries(seriesID);
      return data.metadata;
    }
  });

  return {
    mutateIncreaseViewSeries: mutateAsync,
    isLoadingIncreaseViewSeries: isPending,
    isErrorIncreaseViewSeries: isError,
    isSuccessIncreaseViewSeries: isSuccess
  };
};

export const useCreateSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateSeries) => {
      const { data: series } = await seriesService.createSeries(data);
      return series.metadata;
    },
    onSuccess(series) {
      queryClient.invalidateQueries({ queryKey: ['allSeries', series.user._id] });
      queryClient.invalidateQueries({ queryKey: ['allSeries'], exact: true });
    }
  });

  return {
    mutateCreateSeries: mutateAsync,
    isLoadingCreateSeries: isPending,
    isErrorCreateSeries: isError,
    isSuccessCreateSeries: isSuccess
  };
};

export const useUpdateSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateSeries) => {
      const { data: series } = await seriesService.updateSeries(data);
      return series.metadata;
    },
    onSuccess(series, updateSeries) {
      queryClient.invalidateQueries({ queryKey: ['series', updateSeries.id] });
      queryClient.invalidateQueries({ queryKey: ['allSeries', series.user._id] });
      queryClient.invalidateQueries({ queryKey: ['allSeries'], exact: true });
    }
  });

  return {
    mutateUpdateSeries: mutateAsync,
    isLoadingUpdateSeries: isPending,
    isErrorUpdateSeries: isError,
    isSuccessUpdateSeries: isSuccess
  };
};

export const useDeleteSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (seriesID: string) => {
      const { data: series } = await seriesService.deleteSeries(seriesID);
      return series.metadata;
    },
    onSuccess(series, seriesID) {
      queryClient.invalidateQueries({ queryKey: ['series', seriesID] });
      queryClient.invalidateQueries({ queryKey: ['allSeries', series.user._id] });
      queryClient.invalidateQueries({ queryKey: ['allSeries'], exact: true });
    }
  });

  return {
    mutateDeleteSeries: mutateAsync,
    isLoadingDeleteSeries: isPending,
    isErrorDeleteSeries: isError,
    isSuccessDeleteSeries: isSuccess
  };
};

export const useAddPostToSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateSeriesPost) => {
      const { data: series } = await seriesService.addPostToSeries(data);
      return series.metadata;
    },
    onSuccess(series, data) {
      queryClient.invalidateQueries({ queryKey: ['series', data.series_id] });
      queryClient.invalidateQueries({ queryKey: ['allSeries', series.user._id] });
    }
  });

  return {
    mutateAddPostToSeries: mutateAsync,
    isLoadingAddPostToSeries: isPending,
    isErrorAddPostToSeries: isError,
    isSuccessAddPostToSeries: isSuccess
  };
};

export const updatePostToSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateSeriesPost) => {
      const { data: series } = await seriesService.updatePostToSeries(data);
      return series.metadata;
    },
    onSuccess(series, data) {
      queryClient.invalidateQueries({ queryKey: ['series', data.series_id] });
      queryClient.invalidateQueries({ queryKey: ['allSeries', series.user._id] });
    }
  });

  return {
    mutateUpdatePostToSeries: mutateAsync,
    isLoadingUpdatePostToSeries: isPending,
    isErrorUpdatePostToSeries: isError,
    isSuccessUpdatePostToSeries: isSuccess
  };
};

export const useDeletePostToSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IDeleteSeriesPost) => {
      const { data: series } = await seriesService.deletePostToSeries(data);
      return series.metadata;
    },
    onSuccess(series, data) {
      queryClient.invalidateQueries({ queryKey: ['series', data.series_id] });
      queryClient.invalidateQueries({ queryKey: ['allSeries', series.user._id] });
    }
  });

  return {
    mutateDeletePostToSeries: mutateAsync,
    isLoadingDeletePostToSeries: isPending,
    isErrorDeletePostToSeries: isError,
    isSuccessDeletePostToSeries: isSuccess
  };
};

export const useCreateCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateCommunity) => {
      const { data: community } = await communityService.createCommunity(data);
      return community.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['communities'] });
    }
  });

  return {
    mutateCreateCommunity: mutateAsync,
    isLoadingCreateCommunity: isPending,
    isErrorCreateCommunity: isError,
    isSuccessCreateCommunity: isSuccess
  };
};

export const useUpdateCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateCommunity) => {
      const { data: community } = await communityService.updateCommunity(data);
      return community.metadata;
    },
    onSuccess(_, updateCommunity) {
      queryClient.invalidateQueries({
        queryKey: ['community', updateCommunity.id]
      });
      queryClient.invalidateQueries({ queryKey: ['communities'] });
    }
  });

  return {
    mutateUpdateCommunity: mutateAsync,
    isLoadingUpdateCommunity: isPending,
    isErrorUpdateCommunity: isError,
    isSuccessUpdateCommunity: isSuccess
  };
};

export const useCedeCreatorCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: { id: string; user_id: string }) => {
      const { data: community } = await communityService.cedeCreator(data.id, data.user_id);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({ queryKey: ['community', community.id] });
    }
  });

  return {
    mutateCedeCreatorCommunity: mutateAsync,
    isLoadingCedeCreatorCommunity: isPending,
    isErrorCedeCreatorCommunity: isError,
    isSuccessCedeCreatorCommunity: isSuccess
  };
};

export const useJoinCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (communityID: string) => {
      const { data: community } = await communityService.joinCommunity(communityID);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({ queryKey: ['community', community] });
      queryClient.invalidateQueries({ queryKey: ['communities'] });
      queryClient.invalidateQueries({ queryKey: ['allCommunities'] });
    }
  });

  return {
    mutateJoinCommunity: mutateAsync,
    isLoadingJoinCommunity: isPending,
    isErrorJoinCommunity: isError,
    isSuccessJoinCommunity: isSuccess
  };
};

export const useCancelJoinCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (communityID: string) => {
      const { data: community } = await communityService.cancelJoinCommunity(communityID);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({ queryKey: ['community', community] });
      queryClient.invalidateQueries({ queryKey: ['allCommunities'] });
    }
  });

  return {
    mutateCancelJoinCommunity: mutateAsync,
    isLoadingCancelJoinCommunity: isPending,
    isErrorCancelJoinCommunity: isError,
    isSuccessCancelJoinCommunity: isSuccess
  };
};

export const useLeaveCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (communityID: string) => {
      const { data: community } = await communityService.leaveCommunity(communityID);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({ queryKey: ['community', community] });
      queryClient.invalidateQueries({ queryKey: ['communities'] });
      queryClient.invalidateQueries({ queryKey: ['allCommunities'] });
    }
  });

  return {
    mutateLeaveCommunity: mutateAsync,
    isLoadingLeaveCommunity: isPending,
    isErrorLeaveCommunity: isError,
    isSuccessLeaveCommunity: isSuccess
  };
};

export const useAcceptPostCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: { id: string; post_id: string }) => {
      const { data: community } = await communityService.acceptPostRequest(data.id, data.post_id);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({ queryKey: ['community', community.id] });
    }
  });

  return {
    mutateAcceptPostCommunity: mutateAsync,
    isLoadingAcceptPostCommunity: isPending,
    isErrorAcceptPostCommunity: isError,
    isSuccessAcceptPostCommunity: isSuccess
  };
};

export const useRejectPostCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: { id: string; post_id: string }) => {
      const { data: community } = await communityService.rejectPostRequest(data.id, data.post_id);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({ queryKey: ['community', community.id] });
    }
  });

  return {
    mutateRejectPostCommunity: mutateAsync,
    isLoadingRejectPostCommunity: isPending,
    isErrorRejectPostCommunity: isError,
    isSuccessRejectPostCommunity: isSuccess
  };
};

export const useAcceptJoinCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async ({ communityID, userIDs }: { communityID: string; userIDs: string[] }) => {
      const { data: community } = await communityService.acceptJoinRequest(communityID, userIDs);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({
        queryKey: ['community', community.communityID]
      });
      queryClient.invalidateQueries({ queryKey: ['communities'] });
    }
  });

  return {
    mutateAcceptJoinCommunity: mutateAsync,
    isLoadingAcceptJoinCommunity: isPending,
    isErrorAcceptJoinCommunity: isError,
    isSuccessAcceptJoinCommunity: isSuccess
  };
};

export const useRejectJoinCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async ({ communityID, userIDs }: { communityID: string; userIDs: string[] }) => {
      const { data: community } = await communityService.rejectJoinRequest(communityID, userIDs);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({
        queryKey: ['community', community.communityID]
      });
      queryClient.invalidateQueries({ queryKey: ['communities'] });
    }
  });

  return {
    mutateRejectJoinCommunity: mutateAsync,
    isLoadingRejectJoinCommunity: isPending,
    isErrorRejectJoinCommunity: isError,
    isSuccessRejectJoinCommunity: isSuccess
  };
};

export const useAddMemberCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async ({ communityID, userIDs }: { communityID: string; userIDs: string[] }) => {
      const { data: community } = await communityService.addMembers(communityID, userIDs);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({
        queryKey: ['community', community.communityID]
      });
      queryClient.invalidateQueries({ queryKey: ['communities'] });
    }
  });

  return {
    mutateAddMemberCommunity: mutateAsync,
    isLoadingAddMemberCommunity: isPending,
    isErrorAddMemberCommunity: isError,
    isSuccessAddMemberCommunity: isSuccess
  };
};

export const useDeleteMemberCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async ({ communityID, userID }: { communityID: string; userID: string }) => {
      const { data: community } = await communityService.deleteMember(communityID, userID);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({
        queryKey: ['community', community.communityID]
      });
      queryClient.invalidateQueries({ queryKey: ['communities'] });
    }
  });

  return {
    mutateDeleteMemberCommunity: mutateAsync,
    isLoadingDeleteMemberCommunity: isPending,
    isErrorDeleteMemberCommunity: isError,
    isSuccessDeleteMemberCommunity: isSuccess
  };
};

export const usePromoteAdminCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async ({ communityID, userID }: { communityID: string; userID: string }) => {
      const { data: community } = await communityService.promoteAdmin(communityID, userID);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({
        queryKey: ['community', community.communityID]
      });
      queryClient.invalidateQueries({ queryKey: ['communities'] });
    }
  });

  return {
    mutatePromoteAdminCommunity: mutateAsync,
    isLoadingPromoteAdminCommunity: isPending,
    isErrorPromoteAdminCommunity: isError,
    isSuccessPromoteAdminCommunity: isSuccess
  };
};

export const useRevokeAdminCommunity = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async ({ communityID, userID }: { communityID: string; userID: string }) => {
      const { data: community } = await communityService.revokeAdmin(communityID, userID);
      return community.metadata;
    },
    onSuccess(_, community) {
      queryClient.invalidateQueries({
        queryKey: ['community', community.communityID]
      });
      queryClient.invalidateQueries({ queryKey: ['communities'] });
    }
  });

  return {
    mutateRevokeAdminCommunity: mutateAsync,
    isLoadingRevokeAdminCommunity: isPending,
    isErrorRevokeAdminCommunity: isError,
    isSuccessRevokeAdminCommunity: isSuccess
  };
};

export const useReviewSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateReviewSeries) => {
      const { data: review } = await seriesService.reviewSeries(data);
      return review.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateReviewSeries: mutateAsync,
    isLoadingReviewSeries: isPending,
    isErrorReviewSeries: isError,
    isSuccessReviewSeries: isSuccess
  };
};

export const useDeleteReviewSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IDeleteReviewSeries) => {
      const { data: review } = await seriesService.deleteReviewSeries(data);
      return review.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateDeleteReviewSeries: mutateAsync,
    isLoadingDeleteReviewSeries: isPending,
    isErrorDeleteReviewSeries: isError,
    isSuccessDeleteReviewSeries: isSuccess
  };
};

export const useCommentPostSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateCommentSeriesPost) => {
      const { data: comment } = await seriesService.commentPostSeries(data);
      return comment.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateCommentPostSeries: mutateAsync,
    isLoadingCommentPostSeries: isPending,
    isErrorCommentPostSeries: isError,
    isSuccessCommentPostSeries: isSuccess
  };
};

export const useUpdateCommentPostSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateCommentSeriesPost) => {
      const { data: comment } = await seriesService.updateCommentPostSeries(data);
      return comment.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateUpdateCommentPostSeries: mutateAsync,
    isLoadingUpdateCommentPostSeries: isPending,
    isErrorUpdateCommentPostSeries: isError,
    isSuccessUpdateCommentPostSeries: isSuccess
  };
};

export const useDeleteCommentPostSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IDeleteCommentSeriesPost) => {
      const { data: comment } = await seriesService.deleteCommentPostSeries(data);
      return comment.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateDeleteCommentPostSeries: mutateAsync,
    isLoadingDeleteCommentPostSeries: isPending,
    isErrorDeleteCommentPostSeries: isError,
    isSuccessDeleteCommentPostSeries: isSuccess
  };
};

export const useReplyCommentPostSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateReplyCommentSeriesPost) => {
      const { data: reply } = await seriesService.replyCommentPostSeries(data);
      return reply.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateReplyCommentPostSeries: mutateAsync,
    isLoadingReplyCommentPostSeries: isPending,
    isErrorReplyCommentPostSeries: isError,
    isSuccessReplyCommentPostSeries: isSuccess
  };
};

export const useUpdateReplyCommentPostSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateReplyCommentSeriesPost) => {
      const { data: reply } = await seriesService.updateReplyCommentPostSeries(data);
      return reply.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateUpdateReplyCommentPostSeries: mutateAsync,
    isLoadingUpdateReplyCommentPostSeries: isPending,
    isErrorUpdateReplyCommentPostSeries: isError,
    isSuccessUpdateReplyCommentPostSeries: isSuccess
  };
};

export const useDeleteReplyCommentPostSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IDeleteReplyCommentSeriesPost) => {
      const { data: reply } = await seriesService.deleteReplyCommentPostSeries(data);
      return reply.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateDeleteReplyCommentPostSeries: mutateAsync,
    isLoadingDeleteReplyCommentPostSeries: isPending,
    isErrorDeleteReplyCommentPostSeries: isError,
    isSuccessDeleteReplyCommentPostSeries: isSuccess
  };
};
export const useLikePostSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ILikeSeriesPost) => {
      const { data: like } = await seriesService.likePostSeries(data);
      return like.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateLikePostSeries: mutateAsync,
    isLoadingLikePostSeries: isPending,
    isErrorLikePostSeries: isError,
    isSuccessLikePostSeries: isSuccess
  };
};

export const useLikeCommentSeriesPost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ILikeCommentSeriesPost) => {
      const { data: like } = await seriesService.likeCommentSeriesPost(data);
      return like.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateLikeCommentSeriesPost: mutateAsync,
    isLoadingLikeCommentSeriesPost: isPending,
    isErrorLikeCommentSeriesPost: isError,
    isSuccessLikeCommentSeriesPost: isSuccess
  };
};

export const useLikeReplyCommentSeriesPost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ILikeReplyCommentSeriesPost) => {
      const { data: like } = await seriesService.likeReplyCommentSeriesPost(data);
      return like.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateLikeReplyCommentSeriesPost: mutateAsync,
    isLoadingLikeReplyCommentSeriesPost: isPending,
    isErrorLikeReplyCommentSeriesPost: isError,
    isSuccessLikeReplyCommentSeriesPost: isSuccess
  };
};

export const useSavePostSeries = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ISaveSeriesPost) => {
      const { data: post } = await seriesService.savePostSeries(data);
      return post.metadata;
    },
    onSuccess(_, series) {
      queryClient.invalidateQueries({ queryKey: ['series', series.series_id] });
    }
  });

  return {
    mutateSavePostSeries: mutateAsync,
    isLoadingSavePostSeries: isPending,
    isErrorSavePostSeries: isError,
    isSuccessSavePostSeries: isSuccess
  };
};

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateQuestion) => {
      const { data: question } = await questionService.createQuestion(data);
      return question.metadata;
    }
  });

  return {
    mutateCreateQuestion: mutateAsync,
    isLoadingCreateQuestion: isPending,
    isErrorCreateQuestion: isError,
    isSuccessCreateQuestion: isSuccess
  };
};

export const useUpdateQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateQuestion) => {
      const { data: question } = await questionService.updateQuestion(data);
      return question.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({ queryKey: ['question', question.id] });
    }
  });

  return {
    mutateUpdateQuestion: mutateAsync,
    isLoadingUpdateQuestion: isPending,
    isErrorUpdateQuestion: isError,
    isSuccessUpdateQuestion: isSuccess
  };
};

export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (questionID: string) => {
      const { data: question } = await questionService.deleteQuestion(questionID);
      return question.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({ queryKey: ['question', question] });
    }
  });

  return {
    mutateDeleteQuestion: mutateAsync,
    isLoadingDeleteQuestion: isPending,
    isErrorDeleteQuestion: isError,
    isSuccessDeleteQuestion: isSuccess
  };
};

export const useViewQuestion = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (questionID: string) => {
      const { data: question } = await questionService.viewQuestion(questionID);
      return question.metadata;
    }
  });

  return {
    mutateViewQuestion: mutateAsync,
    isLoadingViewQuestion: isPending,
    isErrorViewQuestion: isError,
    isSuccessViewQuestion: isSuccess
  };
};

export const useVoteQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateVoteQuestion) => {
      const { data: question } = await questionService.voteQuestion(data);
      return question.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
      queryClient.invalidateQueries({
        queryKey: ['reputation']
      });
    }
  });

  return {
    mutateVoteQuestion: mutateAsync,
    isLoadingVoteQuestion: isPending,
    isErrorVoteQuestion: isError,
    isSuccessVoteQuestion: isSuccess
  };
};

export const useCommentQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateCommentQuestion) => {
      const { data: comment } = await questionService.commentQuestion(data);
      return comment.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
      queryClient.invalidateQueries({
        queryKey: ['reputation']
      });
    }
  });

  return {
    mutateCommentQuestion: mutateAsync,
    isLoadingCommentQuestion: isPending,
    isErrorCommentQuestion: isError,
    isSuccessCommentQuestion: isSuccess
  };
};

export const useUpdateCommentQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateCommentQuestion) => {
      const { data: comment } = await questionService.updateCommentQuestion(data);
      return comment.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
    }
  });

  return {
    mutateUpdateCommentQuestion: mutateAsync,
    isLoadingUpdateCommentQuestion: isPending,
    isErrorUpdateCommentQuestion: isError,
    isSuccessUpdateCommentQuestion: isSuccess
  };
};

export const useDeleteCommentQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IDeleteCommentQuestion) => {
      const { data: comment } = await questionService.deleteCommentQuestion(data);
      return comment.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
      queryClient.invalidateQueries({
        queryKey: ['reputation']
      });
    }
  });

  return {
    mutateDeleteCommentQuestion: mutateAsync,
    isLoadingDeleteCommentQuestion: isPending,
    isErrorDeleteCommentQuestion: isError,
    isSuccessDeleteCommentQuestion: isSuccess
  };
};

export const useVoteCommentQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICommentVoteQuestion) => {
      const { data: comment } = await questionService.voteCommentQuestion(data);
      return comment.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
    }
  });

  return {
    mutateVoteCommentQuestion: mutateAsync,
    isLoadingVoteCommentQuestion: isPending,
    isErrorVoteCommentQuestion: isError,
    isSuccessVoteCommentQuestion: isSuccess
  };
};

export const useAnswerQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateAnswerQuestion) => {
      const { data: question } = await questionService.answerQuestion(data);
      return question.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
      queryClient.invalidateQueries({
        queryKey: ['reputation']
      });
    }
  });

  return {
    mutateAnswerQuestion: mutateAsync,
    isLoadingAnswerQuestion: isPending,
    isErrorAnswerQuestion: isError,
    isSuccessAnswerQuestion: isSuccess
  };
};

export const useDeleteCommentAnswer = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IDeleteCommentQuestion) => {
      const { data: comment } = await questionService.deleteCommentAnswer(data);
      return comment.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
      queryClient.invalidateQueries({
        queryKey: ['reputation']
      });
    }
  });

  return {
    mutateDeleteCommentAnswer: mutateAsync,
    isLoadingDeleteCommentAnswer: isPending,
    isErrorDeleteCommentAnswer: isError,
    isSuccessDeleteCommentAnswer: isSuccess
  };
};

export const useUpdateAnswer = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateAnswer) => {
      const { data: question } = await questionService.updateAnswer(data);
      return question.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
    }
  });

  return {
    mutateUpdateAnswer: mutateAsync,
    isLoadingUpdateAnswer: isPending,
    isErrorUpdateAnswer: isError,
    isSuccessUpdateAnswer: isSuccess
  };
};

export const useDeleteAnswer = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IDeleteAnswer) => {
      const { data: question } = await questionService.deleteAnswer(data);
      return question.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
      queryClient.invalidateQueries({
        queryKey: ['reputation']
      });
    }
  });

  return {
    mutateDeleteAnswer: mutateAsync,
    isLoadingDeleteAnswer: isPending,
    isErrorDeleteAnswer: isError,
    isSuccessDeleteAnswer: isSuccess
  };
};

export const useCommentAnswer = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateCommentAnswer) => {
      const { data: comment } = await questionService.commentAnswer(data);
      return comment.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
      queryClient.invalidateQueries({
        queryKey: ['reputation']
      });
    }
  });

  return {
    mutateCommentAnswer: mutateAsync,
    isLoadingCommentAnswer: isPending,
    isErrorCommentAnswer: isError,
    isSuccessCommentAnswer: isSuccess
  };
};

export const useUpdateCommentAnswer = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateCommentQuestion) => {
      const { data: comment } = await questionService.updateCommentAnswer(data);
      return comment.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
    }
  });

  return {
    mutateUpdateCommentAnswer: mutateAsync,
    isLoadingUpdateCommentAnswer: isPending,
    isErrorUpdateCommentAnswer: isError,
    isSuccessUpdateCommentAnswer: isSuccess
  };
};

export const useVoteCommentAnswer = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICommentVoteQuestion) => {
      const { data: comment } = await questionService.voteCommentAnswer(data);
      return comment.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
    }
  });

  return {
    mutateVoteCommentAnswer: mutateAsync,
    isLoadingVoteCommentAnswer: isPending,
    isErrorVoteCommentAnswer: isError,
    isSuccessVoteCommentAnswer: isSuccess
  };
};

export const useVoteAnswer = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreateVoteAnswer) => {
      const { data: answer } = await questionService.voteAnswer(data);
      return answer.metadata;
    },
    onSuccess(_, question) {
      queryClient.invalidateQueries({
        queryKey: ['question', question.question_id]
      });
      queryClient.invalidateQueries({
        queryKey: ['reputation']
      });
    }
  });

  return {
    mutateVoteAnswer: mutateAsync,
    isLoadingVoteAnswer: isPending,
    isErrorVoteAnswer: isError,
    isSuccessVoteAnswer: isSuccess
  };
};

export const useSaveQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (questionID: string) => {
      const { data: question } = await questionService.saveQuestion(questionID);
      return question.metadata;
    },
    onSuccess(_, questionID) {
      queryClient.invalidateQueries({
        queryKey: ['question', questionID]
      });
      queryClient.invalidateQueries({
        queryKey: ['allSavedQuestion']
      });
    }
  });

  return {
    mutateSaveQuestion: mutateAsync,
    isLoadingSaveQuestion: isPending,
    isErrorSaveQuestion: isError,
    isSuccessSaveQuestion: isSuccess
  };
};

export const useCreateNewListQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (name: string) => {
      const { data: list } = await questionService.createNewListQuestion(name);
      return list.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allListQuestions']
      });
    }
  });

  return {
    mutateCreateNewListQuestion: mutateAsync,
    isLoadingCreateNewListQuestion: isPending,
    isErrorCreateNewListQuestion: isError,
    isSuccessCreateNewListQuestion: isSuccess
  };
};

export const useMoveToListQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IMoveToListQuestion) => {
      const { data: list } = await questionService.moveToListQuestion(data);
      return list.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allListQuestions']
      });
    }
  });

  return {
    mutateMoveToListQuestion: mutateAsync,
    isLoadingMoveToListQuestion: isPending,
    isErrorMoveToListQuestion: isError,
    isSuccessMoveToListQuestion: isSuccess
  };
};

export const useRemoveFromListQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IRemoveFromListQuestion) => {
      const { data: list } = await questionService.removeFromListQuestion(data);
      return list.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allListQuestions']
      });
    }
  });

  return {
    mutateRemoveFromListQuestion: mutateAsync,
    isLoadingRemoveFromListQuestion: isPending,
    isErrorRemoveFromListQuestion: isError,
    isSuccessRemoveFromListQuestion: isSuccess
  };
};

export const useRemoveFromSavedQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (questionID: string) => {
      const { data: question } = await questionService.removeFromSavedQuestion(questionID);
      return question.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allSavedQuestion']
      });
    }
  });

  return {
    mutateRemoveFromSaved: mutateAsync,
    isLoadingRemoveFromSaved: isPending,
    isErrorRemoveFromSaved: isError,
    isSuccessRemoveFromSaved: isSuccess
  };
};

export const useUpdateNameListQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateNameListQuestion) => {
      const { data: list } = await questionService.updateNameListQuestion(data);
      return list.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allListQuestions']
      });
    }
  });

  return {
    mutateUpdateNameListQuestion: mutateAsync,
    isLoadingUpdateNameListQuestion: isPending,
    isErrorUpdateNameListQuestion: isError,
    isSuccessUpdateNameListQuestion: isSuccess
  };
};

export const useDeleteListQuestion = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (listName: string) => {
      const { data: list } = await questionService.deleteListQuestion(listName);
      return list.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allListQuestions']
      });
    }
  });

  return {
    mutateDeleteListQuestion: mutateAsync,
    isLoadingDeleteListQuestion: isPending,
    isErrorDeleteListQuestion: isError,
    isSuccessDeleteListQuestion: isSuccess
  };
};

// ------------------------------Admin hooks--------------------------------

export const useCreateUserAdmin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUserRegister) => {
      const { data: user } = await adminService.createUser(data);
      return user.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allUsersAdmin']
      });
    }
  });

  return {
    mutateCreateUserAdmin: mutateAsync,
    isLoadingCreateUserAdmin: isPending,
    isErrorCreateUserAdmin: isError,
    isSuccessCreateUserAdmin: isSuccess
  };
};

export const useUpdateUserAdmin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUserUpdate & { userID: string }) => {
      const { data: user } = await adminService.updateUser(data.userID, data);
      return user.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allUsersAdmin']
      });
    }
  });

  return {
    mutateUpdateUserAdmin: mutateAsync,
    isLoadingUpdateUserAdmin: isPending,
    isErrorUpdateUserAdmin: isError,
    isSuccessUpdateUserAdmin: isSuccess
  };
};

export const useDeleteUserAdmin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (userID: string) => {
      const { data: user } = await adminService.deleteUser(userID);
      return user.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allUsersAdmin']
      });
    }
  });

  return {
    mutateDeleteUserAdmin: mutateAsync,
    isLoadingDeleteUserAdmin: isPending,
    isErrorDeleteUserAdmin: isError,
    isSuccessDeleteUserAdmin: isSuccess
  };
};

export const useCreatePostAdmin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: ICreatePost) => {
      const { data: post } = await adminService.createPost(data);
      return post.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allPostsAdmin']
      });
    }
  });

  return {
    mutateCreatePostAdmin: mutateAsync,
    isLoadingCreatePostAdmin: isPending,
    isErrorCreatePostAdmin: isError,
    isSuccessCreatePostAdmin: isSuccess
  };
};

export const useUpdatePostAdmin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdatePost & { userID: string }) => {
      const { data: post } = await adminService.updatePost(data.userID, data);
      return post.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allPostsAdmin']
      });
    }
  });

  return {
    mutateUpdatePostAdmin: mutateAsync,
    isLoadingUpdatePostAdmin: isPending,
    isErrorUpdatePostAdmin: isError,
    isSuccessUpdatePostAdmin: isSuccess
  };
};

export const useDeletePostAdmin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (postID: string) => {
      const { data: post } = await adminService.deletePost(postID);
      return post.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allPostsAdmin']
      });
    }
  });

  return {
    mutateDeletePostAdmin: mutateAsync,
    isLoadingDeletePostAdmin: isPending,
    isErrorDeletePostAdmin: isError,
    isSuccessDeletePostAdmin: isSuccess
  };
};

export const useUpdateCommentAdmin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: IUpdateCommentPost & { commentID: string }) => {
      const { data: comment } = await adminService.updateComment(data.commentID, data);
      return comment.metadata;
    },
    onSuccess(data) {
      queryClient.invalidateQueries({
        queryKey: ['allParentCommentsAdmin', data.post]
      });
      queryClient.invalidateQueries({
        queryKey: ['allChildCommentsAdmin', data.parent]
      });
    }
  });

  return {
    mutateUpdateCommentAdmin: mutateAsync,
    isLoadingUpdateCommentAdmin: isPending,
    isErrorUpdateCommentAdmin: isError,
    isSuccessUpdateCommentAdmin: isSuccess
  };
};

export const useDeleteCommentAdmin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (commentID: string) => {
      const { data: comment } = await adminService.deleteComment(commentID);
      return comment.metadata;
    },
    onSuccess(data) {
      queryClient.invalidateQueries({
        queryKey: ['allParentCommentsAdmin', data.post]
      });
      queryClient.invalidateQueries({
        queryKey: ['allChildCommentsAdmin', data.parent]
      });
    }
  });

  return {
    mutateDeleteCommentAdmin: mutateAsync,
    isLoadingDeleteCommentAdmin: isPending,
    isErrorDeleteCommentAdmin: isError,
    isSuccessDeleteCommentAdmin: isSuccess
  };
};

export const useReadAllNotification = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async () => {
      const { data: notification } = await notiService.readAllNotifications();
      return notification.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['unRedNotiNumber']
      });
    }
  });

  return {
    mutateReadAllNotification: mutateAsync,
    isLoadingReadAllNotification: isPending,
    isErrorReadAllNotification: isError,
    isSuccessReadAllNotification: isSuccess
  };
};

export const useMarkIsReadNotify = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (notiID: string) => {
      const { data: notification } = await notiService.markIsReadNotify(notiID);
      return notification.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allNotifications']
      });
    }
  });

  return {
    mutateMarkIsReadNoti: mutateAsync,
    isLoadingMarkIsReadNoti: isPending,
    isErrorMarkIsReadNoti: isError,
    isSuccessMarkIsReadNoti: isSuccess
  };
};

export const useSetSubUnRedNotiNumber = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async () => {
      const { data: notification } = await notiService.setSubUnRedNotiNumber();
      return notification.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['unRedNotiNumber']
      });
    }
  });

  return {
    mutateSetSubUnRedNotiNumber: mutateAsync,
    isLoadingSetSubUnRedNotiNumber: isPending,
    isErrorSetSubUnRedNotiNumber: isError,
    isSuccessSetSubUnRedNotiNumber: isSuccess
  };
};

export const useMarkAllAsReadNotify = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async () => {
      const { data: notification } = await notiService.markAllAsReadNotify();
      return notification.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allNotifications']
      });
    }
  });

  return {
    mutateMarkAllAsReadNoti: mutateAsync,
    isLoadingMarkAllAsReadNoti: isPending,
    isErrorMarkAllAsReadNoti: isError,
    isSuccessMarkAllAsReadNoti: isSuccess
  };
};

export const useDeleteNotify = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (notiID: string) => {
      const { data: notification } = await notiService.deleteNotify(notiID);
      return notification.metadata;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['allNotifications']
      });
    }
  });

  return {
    mutateDeleteNotify: mutateAsync,
    isLoadingDeleteNotify: isPending,
    isErrorDeleteNotify: isError,
    isSuccessDeleteNotify: isSuccess
  };
};

export const useChatAI = () => {
  const { mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (message: string) => {
      const { data } = await aiChatService.chatAI(message);
      return data;
    }
  });

  return {
    mutateChatAI: mutateAsync,
    isLoadingChatAI: isPending,
    isErrorChatAI: isError,
    isSuccessChatAI: isSuccess
  };
};
