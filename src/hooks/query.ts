'use client';

import { type InfiniteData, useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

import { IMessage } from '@/types';
import { userService } from '@/services/UserService';
import { notiService } from '@/services/NotificationService';
import { postService } from '@/services/PostService';
import { messageService } from '@/services/MessageService';
import { communityService } from '@/services/CommunityService';
import { searchLogService } from '@/services/SearchLogService';
import { ApplyDefaults } from '@/lib/utils';
import { seriesService } from '@/services/SeriesService';
import { hashtagService } from '@/services/HashtagService';
import { questionService } from '@/services/QuestionService';
import { adminService } from '@/services/AdminService';
import { recommendService } from '@/services/RecommendService';
import { aiChatService } from '@/services/AIChatService';

// ---------------------------FETCH HOOKS---------------------------

export const useAllUsersData = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const session = await getSession();

      const { data } = await userService.getAllUsers(session?.id || '');
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllUsers: isPending,
    isErrorAllUsers: isError,
    allUsers: data!,
    isFetchingAllUsers: isFetching
  };
};

/**
 * The `useCurrentUserInfo` function is a custom hook that fetches and returns information about the
 * current user.
 * @returns The function `useCurrentUserInfo` returns an object with the pendingFriend properties:
 * - `isLoadingCurrentUserInfo` is a boolean that indicates whether the data is still loading.
 * - `isErrorCurrentUserInfo` is a boolean that indicates whether there is an error.
 * - `currentUserInfo` is an object that contains information about the current user.
 * - `isFetchingCurrentUserInfo` is a boolean that indicates whether the query is currently fetching.
 */
export const useCurrentUserInfo = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['currentUserInfo'],
    queryFn: async () => {
      const session = await getSession();

      const [{ data: Friends }, { data: RequestSent }, { data: requestReceived }, { data: userInfo }] =
        await Promise.all([
          userService.getFriends(session?.id || ''),
          userService.getRequestSent(session?.id || ''),
          userService.getRequestReceived(session?.id || ''),
          userService.getUserInfoByID(session?.id || '')
        ]);
      userInfo.metadata.friends = Friends.metadata;
      userInfo.metadata.requestSent = RequestSent.metadata;
      userInfo.metadata.requestReceived = requestReceived.metadata;
      userInfo.metadata.friend_number = Friends.metadata.length;
      return ApplyDefaults(userInfo.metadata);
    },
    staleTime: Infinity
  });

  return {
    isLoadingCurrentUserInfo: isPending,
    isErrorCurrentUserInfo: isError,
    currentUserInfo: data!,
    isFetchingCurrentUserInfo: isFetching
  };
};

/**
 * The `useOtherUserInfo` function is a custom hook that fetches and returns information about a user
 * other than the current user.
 * @param {string} userID - The `userID` parameter is a string that represents the unique identifier of
 * the user whose information we want to fetch.
 * @returns The function `useOtherUserInfo` returns an object with the PendingFiend properties:
 * - `isLoadingOtherUserInfo` is a boolean that indicates whether the data is still loading.
 * - `isErrorOtherUserInfo` is a boolean that indicates whether there is an error.
 * - `otherUserInfo` is an object that contains information about the other user.
 * - `isFetchingOtherUserInfo` is a boolean that indicates whether the query is currently fetching.
 */
export const useOtherUserInfo = (userID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['otherUserInfo', userID],
    queryFn: async () => {
      const [{ data: Friends }, { data: userInfo }] = await Promise.all([
        userService.getFriends(userID),
        userService.getUserInfoByID(userID)
      ]);

      userInfo.metadata.friends = Friends.metadata;
      userInfo.metadata.friend_number = Friends.metadata.length;
      return ApplyDefaults(userInfo.metadata);
    },
    staleTime: Infinity,
    enabled: !!userID
  });

  return {
    isLoadingOtherUserInfo: isPending,
    isErrorOtherUserInfo: isError,
    otherUserInfo: data!,
    isFetchingOtherUserInfo: isFetching
  };
};

/**
 * The `useAllPostsData` function is a custom hook that fetches all posts data, sets the loading and
 * error states, and returns the fetched data along with additional information.
 * @returns The function `useAllPostsData` returns an object with the pendingFriend properties:
 * - `isLoadingAllPosts` is a boolean that indicates whether the data is still loading.
 * - `isErrorAllPosts` is a boolean that indicates whether there is an error.
 * - `allPosts` is an array of all posts.
 * - `isFetchingAllPosts` is a boolean that indicates whether the query is currently fetching.
 * - `refetchAllPosts` is a function that refetches the posts data.
 */
export const useAllPostsData = () => {
  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ['allPosts'],
    queryFn: async () => {
      const { data } = await postService.getAllPost();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllPosts: isPending,
    isErrorAllPosts: isError,
    allPosts: data!,
    isFetchingAllPosts: isFetching,
    refetchAllPosts: refetch
  };
};

/**
 * The function `useAllNewsfeedPostsData` is a custom hook that fetches all posts for a newsfeed and
 * provides loading, error, data, and refetching functionality.
 * @returns The function `useAllNewsfeedPostsData` returns an object with the following properties:
 * - `isLoadingAllNewsfeedPosts` is a boolean that indicates whether the data is still loading.
 * - `isErrorAllNewsfeedPosts` is a boolean that indicates whether there is an error.
 * - `allNewsfeedPosts` is an array of all posts for a newsfeed.
 * - `isFetchingAllNewsfeedPosts` is a boolean that indicates whether the query is currently fetching.
 * - `refetchAllNewsfeedPosts` is a function that refetches the posts data.
 */
export const useAllNewsfeedPostsData = () => {
  const { data, isPending, isError, isFetching, refetch, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['allNewsfeedPosts'],
      queryFn: async ({ pageParam }) => {
        const { data } = await postService.getAllPostNewsFeed(pageParam);
        return ApplyDefaults(data.metadata);
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < 5) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      maxPages: 3,
      staleTime: Infinity
    });

  return {
    isLoadingAllNewsfeedPosts: isPending,
    isErrorAllNewsfeedPosts: isError,
    allNewsfeedPosts: data!,
    hasNextNewsfeedPosts: hasNextPage,
    fetchNextNewsfeedPosts: fetchNextPage,
    isFetchingNextNewsfeedPosts: isFetchingNextPage,
    isFetchingAllNewsfeedPosts: isFetching,
    refetchAllNewsfeedPosts: refetch
  };
};

/**
 * The function `useAllPopularPostsData` is a custom hook that fetches data for all popular posts and
 * returns the loading state, error state, fetched data, and a function to refetch the data.
 * @returns The function `useAllPopularPostsData` returns an object with the following properties:
 * - `isLoadingAllPopularPosts` is a boolean that indicates whether the data is still loading.
 * - `isErrorAllPopularPosts` is a boolean that indicates whether there is an error.
 * - `allPopularPosts` is an array of all popular posts.
 * - `isFetchingAllPopularPosts` is a boolean that indicates whether the query is currently fetching.
 */
export const useAllPopularPostsData = (sort: string) => {
  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ['allPopularPosts', sort],
    queryFn: async () => {
      const { data } = await postService.getAllPopularPost(sort);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: window.location.pathname === '/' && !!sort
  });

  return {
    isLoadingAllPopularPosts: isPending,
    isErrorAllPopularPosts: isError,
    allPopularPosts: data!,
    isFetchingAllPopularPosts: isFetching,
    refetchAllPopularPosts: refetch
  };
};

/**
 * The `useUserPostsData` function is a custom hook that fetches and returns data related to posts, user
 * information, and postSharer information based on a given userID.
 * @param {string} userID - The userID parameter is a string that represents the user ID for which the
 * posts data is being fetched.
 * @returns The function `useUserPostsData` returns an object with the following properties:
 * - `isLoadingUserPosts` is a boolean that indicates whether the data is still loading.
 * - `isErrorUserPosts` is a boolean that indicates whether there is an error.
 * - `userPosts` is an array of posts.
 * - `isFetchingUserPosts` is a boolean that indicates whether the query is currently fetching.
 */
export const useUserPostsData = (userID: string) => {
  const { data, isPending, isError, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts', userID],
    queryFn: async ({ pageParam }) => {
      const { data } = await postService.getAllPostByUserID(userID, pageParam);
      return ApplyDefaults(data.metadata);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 5) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    select: (data) => {
      return data.pages.flat();
    },
    staleTime: Infinity,
    enabled: !!userID
  });

  return {
    isLoadingUserPosts: isPending,
    isErrorUserPosts: isError,
    userPosts: data!,
    hasNextUserPosts: hasNextPage,
    fetchNextUserPosts: fetchNextPage,
    isFetchingNextUserPosts: isFetchingNextPage
  };
};

/**
 * The `usePostData` function is a custom hook that fetches a post by its ID and returns the post data,
 * loading state, error state, and fetching state.
 * @param {string} postID - The postID parameter is a string that represents the ID of the post you
 * want to fetch.
 * @returns The function `usePostData` returns an object with the following properties:
 * - `isLoadingPost` is a boolean that indicates whether the post data is still loading.
 * - `isErrorPost` is a boolean that indicates whether there is an error.
 * - `post` is an object that contains information about the post.
 * - `isFetchingPost` is a boolean that indicates whether the query is currently fetching.
 */
export const usePostData = (postID: string) => {
  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ['post', postID],
    queryFn: async () => {
      const { data } = await postService.getPostByID(postID);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: !!postID
  });

  return {
    isLoadingPost: isPending,
    isErrorPost: isError,
    post: data!,
    isFetchingPost: isFetching,
    refetchPost: refetch
  };
};

export const useSavedPostsData = () => {
  const { data, isPending, isError, isFetching, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['savedPosts'],
      queryFn: async () => {
        const { data } = await postService.getSavedPosts();
        return data.metadata;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < 5) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity
    });

  return {
    isLoadingSavedPosts: isPending,
    isErrorSavedPosts: isError,
    savedPosts: data!,
    isFetchingSavedPosts: isFetching,
    hasNextSavedPosts: hasNextPage,
    isFetchingNextSavedPosts: isFetchingNextPage,
    fetchNextSavedPosts: fetchNextPage
  };
};

/**
 * The `useCommentsData` function is a custom hook that fetches and returns comments data for a
 * specific post ID.
 * @param {string} postID - The postID parameter is a string that represents the ID of a post. It is
 * used to fetch the comments associated with that post.
 * @returns The function `useCommentsData` returns an object with the following properties:
 * - `isLoadingComments` is a boolean that indicates whether the comments data is still loading.
 * - `isErrorComments` is a boolean that indicates whether there is an error.
 * - `comments` is an array of comments.
 * - `isFetchingComments` is a boolean that indicates whether the query is currently fetching.
 */
export const useCommentsData = (postID: string) => {
  const { data, isPending, isError, isFetching } = useInfiniteQuery({
    queryKey: ['comments', postID],
    queryFn: async ({ pageParam }) => {
      const { data } = await postService.getParentComments(postID, pageParam);
      return data.metadata;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 5) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    select: (data) => {
      return data.pages.flat();
    },
    staleTime: Infinity
  });

  return {
    isLoadingComments: isPending,
    isErrorComments: isError,
    comments: data!,
    isFetchingComments: isFetching
  };
};

/**
 * The `useChildCommentsData` function is a custom hook that fetches and returns child comments data for
 * a specific comment ID.
 * @param {string} commentID - The commentID parameter is a string that represents the ID of a comment.
 * It is used to fetch the child comments associated with that comment.
 * @returns The function `useChildCommentsData` returns an object with the following properties:
 * - `isLoadingChildComments` is a boolean that indicates whether the child comments data is still
 * loading.
 * - `isErrorChildComments` is a boolean that indicates whether there is an error.
 * - `childComments` is an array of child comments.
 * - `isFetchingChildComments` is a boolean that indicates whether the query is currently fetching.
 */
export const useChildCommentsData = (commentID: string, postID: string) => {
  const { data, isPending, isError, isFetching } = useInfiniteQuery({
    queryKey: ['childComments', commentID],
    queryFn: async ({ pageParam }) => {
      const { data } = await postService.getChildComments({ post: postID, parent: commentID }, pageParam);
      return data.metadata;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 5) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    select: (data) => {
      return data.pages.flat();
    },
    staleTime: Infinity
  });
  return {
    isLoadingChildComments: isPending,
    isErrorChildComments: isError,
    childComments: data!,
    isFetchingChildComments: isFetching
  };
};

/**
 * The `useGetRepository` function is a custom hook that retrieves repository data from GitHub API and
 * provides loading, error, and fetching status.
 * @returns The function `useGetRepository` returns an object with the following properties:
 * - `isLoadingRepository` is a boolean that indicates whether the repository data is still loading.
 * - `isErrorRepository` is a boolean that indicates whether there is an error.
 * - `repository` is an object that contains information about the repository.
 * - `isFetchingRepository` is a boolean that indicates whether the query is currently fetching.
 */
export const useGetRepositories = (link: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['repository', link],
    queryFn: async () => {
      const { data } = await userService.getRepository(link);

      return data?.map((repo) => ({
        id: repo.id,
        name: repo.name,
        private: repo.private,
        html_url: repo.html_url,
        watchers_count: repo.watchers_count,
        forks_count: repo.forks_count,
        stargazers_count: repo.stargazers_count,
        languages: repo.language
      }));
    },
    staleTime: Infinity
  });

  return {
    isLoadingRepositories: isPending,
    isErrorRepositories: isError,
    repositories: data!,
    isFetchingRepositories: isFetching
  };
};

/**
 * The `useConversationsData` function is a custom hook that fetches conversations data and returns
 * loading, error, and data states.
 * @returns The function `useConversationsData` returns an object with the following properties:
 * - `isLoadingConversations` is a boolean that indicates whether the conversations data is still
 * loading.
 * - `isErrorConversations` is a boolean that indicates whether there is an error.
 * - `conversations` is an array of conversations.
 * - `isFetchingConversations` is a boolean that indicates whether the query is currently fetching.
 */
export const useConversationsData = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['conversations'],
    queryFn: async () => {
      const { data } = await messageService.getConversations();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingConversations: isPending,
    isErrorConversations: isError,
    conversations: data!,
    isFetchingConversations: isFetching
  };
};

/**
 * The function `useCurrentConversationData` is a custom hook that retrieves and returns the current
 * conversation data based on the provided conversation ID.
 * @param {string | undefined} conversationID - The conversationID parameter is a string that
 * represents the ID of the conversation for which we want to fetch data.
 * @returns The function `useCurrentConversationData` returns an object with the following properties:
 * - `isLoadingCurrentConversation` is a boolean that indicates whether the conversation data is still
 * loading.
 * - `isErrorCurrentConversation` is a boolean that indicates whether there is an error.
 * - `currentConversation` is an object that contains information about the current conversation.
 * - `isFetchingCurrentConversation` is a boolean that indicates whether the query is currently fetching.
 */
export const useCurrentConversationData = (conversationID: string | undefined) => {
  const queryClient = useQueryClient();

  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['conversation', conversationID],
    queryFn: async () => {
      await queryClient.prefetchInfiniteQuery({
        queryKey: ['messages', conversationID],
        queryFn: async ({ pageParam }) => {
          const { data } = await messageService.getMessages(conversationID!, pageParam);
          return data.metadata;
        },
        initialPageParam: 1
      });
      const { data } = await messageService.getConversation(conversationID!);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: !!conversationID
  });

  return {
    isLoadingCurrentConversation: isPending,
    isErrorCurrentConversation: isError,
    currentConversation: data!,
    isFetchingCurrentConversation: isFetching
  };
};

/**
 * The `useFollowersData` function is a custom hook that fetches and returns data about a user's
 * followers, including loading and error states.
 * @param {string} userID - The `userID` parameter is a string that represents the ID of the user for
 * whom we want to fetch the followers data.
 * @returns The function `useFollowersData` returns an object with the following properties:
 * - `isLoadingFollowers` is a boolean that indicates whether the followers data is still loading.
 * - `isErrorFollowers` is a boolean that indicates whether there is an error.
 * - `followers` is an array of followers.
 * - `isFetchingFollowers` is a boolean that indicates whether the query is currently fetching.
 */
export const useFriendsData = (userID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['friends', userID],
    queryFn: async () => {
      const { data } = await userService.getFriends(userID);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingFriends: isPending,
    isErrorFriends: isError,
    friends: data!,
    isFetchingFriends: isFetching
  };
};

export const useGetAllUsersUsedToChatWith = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allUsersUsedToChatWith'],
    queryFn: async () => {
      const { data } = await messageService.getAllUsersUsedToChatWith();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllUsersUsedToChatWith: isPending,
    isErrorAllUsersUsedToChatWith: isError,
    allUsersUsedToChatWith: data!,
    isFetchingAllUsersUsedToChatWith: isFetching
  };
};

/**
 * The `useMessagesData` function is a custom hook that fetches and returns messages data for a given
 * conversation ID.
 * @param {string} conversationID - The conversationID parameter is a string that represents the unique
 * identifier of a conversation. It is used to fetch messages related to that conversation.
 * @returns The function `useMessagesData` returns an object with the following properties:
 * - `isLoadingMessages` is a boolean that indicates whether the messages data is still loading.
 * - `isErrorMessages` is a boolean that indicates whether there is an error.
 * - `messages` is an array of messages.
 * - `isFetchingMessages` is a boolean that indicates whether the query is currently fetching.
 * - `refetchMessages` is a function that refetches the messages data.
 */
export const useMessages = (conversationID: string) => {
  const queryClient = useQueryClient();
  const messages = queryClient.getQueryData<InfiniteData<IMessage[], number>>(['messages', conversationID]);
  let extend = 0;
  if (messages) {
    if (messages.pages[messages.pages.length - 1].length >= 30) {
      extend = messages.pages[messages.pages.length - 1].length - 30;
    }
  }

  const { data, isPending, isError, isFetching, hasPreviousPage, fetchPreviousPage, isFetchingPreviousPage } =
    useInfiniteQuery({
      queryKey: ['messages', conversationID],
      queryFn: async ({ pageParam }) => {
        const { data } = await messageService.getMessages(conversationID, pageParam, extend);
        return data.metadata;
      },
      initialPageParam: 1,
      getPreviousPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < 30) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      getNextPageParam: (_, __, firstPageParam) => {
        if (firstPageParam <= 1) {
          return undefined;
        }
        return firstPageParam - 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity,
      enabled: !!conversationID
    });

  return {
    isLoadingMessages: isPending,
    isErrorMessages: isError,
    messages: data!,
    isFetchingMessages: isFetching,
    hasPreviousMessages: hasPreviousPage,
    fetchPreviousMessages: fetchPreviousPage,
    isFetchingPreviousPage: isFetchingPreviousPage
  };
};

export const useMessagesImage = (conversationID: string) => {
  const queryClient = useQueryClient();
  const messages = queryClient.getQueryData<InfiniteData<IMessage[], number>>([
    'messagesImage',
    conversationID
  ]);
  let extend = 0;
  if (messages) {
    if (messages.pages[messages.pages.length - 1].length >= 30) {
      extend = messages.pages[messages.pages.length - 1].length - 30;
    }
  }

  const { data, isPending, isError, isFetching, hasPreviousPage, fetchPreviousPage, isFetchingPreviousPage } =
    useInfiniteQuery({
      queryKey: ['messagesImage', conversationID],
      queryFn: async ({ pageParam }) => {
        const { data } = await messageService.getMessagesWithImage(conversationID, pageParam, extend);
        return data.metadata;
      },
      initialPageParam: 1,
      getPreviousPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < 30) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      getNextPageParam: (_, __, firstPageParam) => {
        if (firstPageParam <= 1) {
          return undefined;
        }
        return firstPageParam - 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity
    });

  return {
    isLoadingMessagesImage: isPending,
    isErrorMessagesImage: isError,
    messagesImage: data!,
    isFetchingMessagesImage: isFetching,
    hasPreviousMessagesImage: hasPreviousPage,
    fetchPreviousMessagesImage: fetchPreviousPage,
    isFetchingPreviousPageImage: isFetchingPreviousPage
  };
};

/**
 * The `useMessageCall` function is a custom hook that fetches video call data for a specific
 * conversation ID and type.
 * @param {string | undefined} conversationID - The conversationID parameter is a string that
 * represents the ID of the conversation for which the message call is being made. It is optional and
 * can be undefined if there is no conversation ID available.
 * @param {string} type - The `type` parameter is a string that represents the type of message call. It
 * could be "video", "audio", or any other type of call.
 * @returns The function `useMessageCall` returns an object with the following properties:
 * - `isLoadingMessageCall` is a boolean that indicates whether the message call data is still loading.
 * - `isErrorMessageCall` is a boolean that indicates whether there is an error.
 * - `tokenMessageCall` is an object that contains information about the message call token.
 * - `isFetchingMessageCall` is a boolean that indicates whether the query is currently fetching.
 * - `fetchMessageCall` is a function that refetches the message call data.
 */
export const useMessageCall = (conversationID: string | undefined, type: string) => {
  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ['messageCall', conversationID, type],
    queryFn: async () => {
      const { data } = await messageService.getToken(conversationID, type);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: !!conversationID
  });

  return {
    isLoadingMessageCall: isPending,
    isErrorMessageCall: isError,
    dataMessageCall: data!,
    isFetchingMessageCall: isFetching,
    fetchMessageCall: refetch
  };
};

/**
 * The function `useGetCalled` is a custom hook that fetches data from an API endpoint and returns the
 * loading status, error status, fetched data, and fetching status.
 * @returns The function `useGetCalled` returns an object with the following properties:
 * - `isLoadingGetCalled` is a boolean that indicates whether the data is still loading.
 * - `isErrorMessageCall` is a boolean that indicates whether there is an error.
 * - `calledList` is an array of calls.
 * - `isFetchingMessageCall` is a boolean that indicates whether the query is currently fetching.
 */
export const useGetCalled = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['called'],
    queryFn: async () => {
      const { data } = await messageService.getCalled();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingGetCalled: isPending,
    isErrorMessageCall: isError,
    calledList: data!,
    isFetchingMessageCall: isFetching
  };
};

export const useGetAllCommunities = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allCommunities'],
    queryFn: async () => {
      const { data } = await communityService.getAllCommunities();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllCommunities: isPending,
    isErrorAllCommunities: isError,
    allCommunities: data!,
    isFetchingAllCommunities: isFetching
  };
};

export const useGetCommunityByID = (id: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['community', id],
    queryFn: async () => {
      const { data } = await communityService.getCommunityByID(id);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: !!id
  });

  return {
    isLoadingCommunity: isPending,
    isErrorCommunity: isError,
    community: data!,
    isFetchingCommunity: isFetching
  };
};

export const useGetCommunitiesByUserID = (userID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['communities', userID],
    queryFn: async () => {
      const { data } = await communityService.getCommunitiesByUserID(userID);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: !!userID
  });

  return {
    isLoadingCommunities: isPending,
    isErrorCommunities: isError,
    communities: data!,
    isFetchingCommunities: isFetching
  };
};

export const useGetUsersByName = (keyword: string) => {
  const { data, isPending, isError, isFetching } = useInfiniteQuery({
    queryKey: ['userByName', keyword],
    queryFn: async ({ pageParam }) => {
      if (!keyword) {
        return [];
      }
      const { data } = await userService.searchUsersByName(keyword, pageParam);
      return data.metadata;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 5) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    select: (data) => {
      return data.pages.flat();
    },
    staleTime: Infinity
  });

  return {
    isLoadingUsersByName: isPending,
    isErrorUsersByName: isError,
    usersByName: data!,
    isFetchingUsersByName: isFetching
  };
};

export const useGetPostsBySearchKey = (keyword: string) => {
  const { data, isPending, isError, isFetching } = useInfiniteQuery({
    queryKey: ['postBySearchKey', keyword],
    queryFn: async ({ pageParam }) => {
      if (!keyword) {
        return [];
      }
      const { data } = await postService.getPostsBySearchKey(keyword, pageParam);
      return data.metadata;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 5) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    select: (data) => {
      return data.pages.flat();
    },
    staleTime: Infinity
  });

  return {
    isLoadingPostsBySearchKey: isPending,
    isErrorPostsBySearchKey: isError,
    postsBySearchKey: data!,
    isFetchingPostsBySearchKey: isFetching
  };
};

export const useGetPostsByHashtag = (hashtag: string) => {
  const { data, isPending, isError, isFetching } = useInfiniteQuery({
    queryKey: ['postByHashtag', hashtag],
    queryFn: async ({ pageParam }) => {
      if (!hashtag) {
        return [];
      }
      const { data } = await postService.getPostByHashtag(hashtag, pageParam);
      return data.metadata;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 5) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    select: (data) => {
      return data.pages.flat();
    },
    staleTime: Infinity
  });

  return {
    isLoadingPostsByHashtag: isPending,
    isErrorPostsByHashtag: isError,
    postsByHashtag: data!,
    isFetchingPostsByHashtag: isFetching
  };
};

export const useGetSearchLogs = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['searchLogs'],
    queryFn: async () => {
      const { data } = await searchLogService.getAllSearchLog();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingSearchLogs: isPending,
    isErrorSearchLogs: isError,
    searchLogs: data!,
    isFetchingSearchLogs: isFetching
  };
};

export const useGetAllPostImages = (userID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allImages', userID],
    queryFn: async () => {
      const { data } = await postService.getAllPostImages(userID);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllPostImages: isPending,
    isErrorAllPostImages: isError,
    allPostImages: data!,
    isFetchingAllPostImages: isFetching
  };
};

export const useLinkPreview = (url: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['linkPreview', url],
    queryFn: async () => {
      const { data } = await postService.getLinkPreview(url);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingLinkPreview: isPending,
    isErrorLinkPreview: isError,
    linkPreview: data!,
    isFetchingLinkPreview: isFetching
  };
};

export const useGetAllSeriesByUserID = (userID: string) => {
  const { data, isPending, isError, isFetching, refetch, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['allSeries', userID],
      queryFn: async ({ pageParam }) => {
        const { data } = await seriesService.getAllSeriesByUserID(userID, pageParam);
        return data.metadata;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < 10) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity
    });

  return {
    isLoadingAllSeries: isPending,
    isErrorAllSeries: isError,
    allSeries: data!,
    isFetchingAllSeries: isFetching,
    refetchAllSeries: refetch,
    hasNextSeries: hasNextPage,
    fetchNextSeries: fetchNextPage,
    isFetchingNextSeries: isFetchingNextPage
  };
};

export const useGetAllSeries = () => {
  const { data, isPending, isError, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['allSeries'],
      queryFn: async ({ pageParam }) => {
        const { data } = await seriesService.getAllSeries(pageParam);
        return data.metadata;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < 10) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity
    });

  return {
    isLoadingAllSeries: isPending,
    isErrorAllSeries: isError,
    allSeries: data!,
    isFetchingAllSeries: isFetching,
    hasNextSeries: hasNextPage,
    fetchNextSeries: fetchNextPage,
    isFetchingNextSeries: isFetchingNextPage
  };
};

export const useGetSeriesByID = (seriesID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['series', seriesID],
    queryFn: async () => {
      const { data } = await seriesService.getSeriesByID(seriesID);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: !!seriesID
  });

  return {
    isLoadingSeries: isPending,
    isErrorSeries: isError,
    series: data!,
    isFetchingSeries: isFetching
  };
};

export const useGetAllCommunityImages = (communityID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allCommunityImages', communityID],
    queryFn: async () => {
      const { data } = await communityService.getAllCommunityImages(communityID);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllCommunityImages: isPending,
    isErrorAllCommunityImages: isError,
    allCommunityImages: data!,
    isFetchingAllCommunityImages: isFetching
  };
};

export const useGetAllCommunitiesYouManage = () => {
  const { data, isPending, isError, isFetching, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['communitiesYouManage'],
      queryFn: async ({ pageParam }) => {
        const { data } = await communityService.getAllCommunitiesYouManage(pageParam);
        return data.metadata;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < 5) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity
    });

  return {
    isLoadingCommunitiesYouManage: isPending,
    isErrorCommunitiesYouManage: isError,
    hasNextCommunitiesYouManage: hasNextPage,
    fetchNextCommunitiesYouManage: fetchNextPage,
    isFetchingNextCommunitiesYouManage: isFetchingNextPage,
    communitiesYouManage: data!,
    isFetchingCommunitiesYouManage: isFetching
  };
};

export const useGetCommunityPostByID = (communityID: string, postID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['communityPost', communityID, postID],
    queryFn: async () => {
      const { data } = await communityService.getCommunityPostByID(communityID, postID);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: !!communityID && !!postID
  });

  return {
    isLoadingCommunityPost: isPending,
    isErrorCommunityPost: isError,
    communityPost: data!,
    isFetchingCommunityPost: isFetching
  };
};

export const useGetPostsByCommunityID = (communityID: string) => {
  const { data, isPending, isError, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['postsByCommunity', communityID],
      queryFn: async ({ pageParam }) => {
        const { data } = await communityService.getPostsByCommunityID(communityID, pageParam);
        return data.metadata;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < 5) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity
    });

  return {
    isLoadingPostsByCommunity: isPending,
    isErrorPostsByCommunity: isError,
    postsByCommunity: data!,
    isFetchingPostsByCommunity: isFetching,
    hasNextPostsByCommunity: hasNextPage,
    fetchNextPostsByCommunity: fetchNextPage,
    isFetchingNextPostsByCommunity: isFetchingNextPage
  };
};

export const useGetAllHashtags = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allHashtags'],
    queryFn: async () => {
      const { data } = await hashtagService.getAllHashtags();
      return data.metadata;
    },
    staleTime: 60000 * 3
  });

  return {
    isLoadingAllHashtags: isPending,
    isErrorAllHashtags: isError,
    allHashtags: data!,
    isFetchingAllHashtags: isFetching
  };
};

export const useGetQuestionByID = (questionID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['question', questionID],
    queryFn: async () => {
      const { data } = await questionService.getQuestionByID(questionID);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: !!questionID
  });

  return {
    isLoadingQuestion: isPending,
    isErrorQuestion: isError,
    question: data!,
    isFetchingQuestion: isFetching
  };
};

export const useGetAllQuestions = (page = 1, sort: string) => {
  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ['allQuestions', page, sort],
    queryFn: async () => {
      const { data } = await questionService.getAllQuestions(page, sort);
      return data.metadata;
    },
    staleTime: 60000 * 3
  });

  return {
    isLoadingAllQuestions: isPending,
    isErrorAllQuestions: isError,
    allQuestions: data!,
    isFetchingAllQuestions: isFetching,
    refetchAllQuestions: refetch
  };
};

export const useFindTagsQuestions = (keyword: string, sortBy: string, page: number) => {
  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ['findTagsQuestions', keyword, page, sortBy],
    queryFn: async () => {
      const { data } = await questionService.findTagsQuestion(keyword, page, sortBy);
      return data.metadata;
    },
    enabled: !!keyword,
    staleTime: 60000 * 3
  });

  return {
    isLoadingFindTagsQuestions: isPending,
    isErrorFindTagsQuestions: isError,
    findTagsQuestions: data!,
    isFetchingFindTagsQuestions: isFetching,
    refetchFindTagsQuestions: refetch
  };
};

export const useGetNumberQuestions = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['numberQuestions'],
    queryFn: async () => {
      const { data } = await questionService.getNumberQuestions();
      return data.metadata;
    },
    staleTime: 60000 * 3
  });

  return {
    isLoadingNumberQuestions: isPending,
    isErrorNumberQuestions: isError,
    numberQuestions: data!,
    isFetchingNumberQuestions: isFetching
  };
};

export const useGetAllTagQuestions = (sortBy: string, page: number) => {
  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ['allTagQuestions', page, sortBy],
    queryFn: async () => {
      const { data } = await questionService.getAllTagQuestions(page, sortBy);
      return data.metadata;
    },
    staleTime: 60000 * 3
  });

  return {
    isLoadingAllTagQuestions: isPending,
    isErrorAllTagQuestions: isError,
    allTagQuestions: data!,
    isFetchingAllTagQuestions: isFetching,
    refetchAllTagQuestions: refetch
  };
};

export const useGetNumberTagQuestions = (tag: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['numberTagQuestions', tag],
    queryFn: async () => {
      const { data } = await questionService.getNumberTagQuestions(tag);
      return data.metadata;
    },
    staleTime: 60000 * 3
  });

  return {
    isLoadingNumberTagQuestions: isPending,
    isErrorNumberTagQuestions: isError,
    numberTagQuestions: data!,
    isFetchingNumberTagQuestions: isFetching
  };
};

export const useGetAllQuestionByTag = (tag: string, page = 1, sort: string) => {
  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ['allQuestionByTag', tag, page, sort],
    queryFn: async () => {
      const { data } = await questionService.getAllQuestionByTag(tag, page, sort);
      return data.metadata;
    },
    staleTime: 60000 * 3
  });

  return {
    isLoadingQuestionByTag: isPending,
    isErrorQuestionByTag: isError,
    questionByTag: data!,
    isFetchingQuestionByTag: isFetching,
    refetchQuestionByTag: refetch
  };
};

export const useGetNumberQuestionByTag = (tag: string, sort: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['numberQuestionByTag', tag, sort],
    queryFn: async () => {
      const { data } = await questionService.getNumberQuestionByTag(tag, sort);
      return data.metadata;
    },
    staleTime: 60000 * 3
  });

  return {
    isLoadingNumberQuestionByTag: isPending,
    isErrorNumberQuestionByTag: isError,
    numberQuestionByTag: data!,
    isFetchingNumberQuestionByTag: isFetching
  };
};

export const useGetSavedQuestions = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allSavedQuestion'],
    queryFn: async () => {
      const { data } = await questionService.getSavedQuestions();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingSavedQuestions: isPending,
    isErrorSavedQuestions: isError,
    savedQuestions: data!,
    isFetchingSavedQuestions: isFetching
  };
};

export const useGetHotQuestions = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['hotQuestions'],
    queryFn: async () => {
      const { data } = await questionService.getHotQuestions();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingHotQuestions: isPending,
    isErrorHotQuestions: isError,
    hotQuestions: data!,
    isFetchingHotQuestions: isFetching
  };
};

export const useGetRelatedQuestions = (questionID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['relatedQuestions', questionID],
    queryFn: async () => {
      const { data } = await questionService.getRelatedQuestions(questionID);
      return data.metadata;
    },
    staleTime: Infinity,
    enabled: !!questionID
  });

  return {
    isLoadingRelatedQuestions: isPending,
    isErrorRelatedQuestions: isError,
    relatedQuestions: data!,
    isFetchingRelatedQuestions: isFetching
  };
};

export const useGetReputation = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['reputation'],
    queryFn: async () => {
      const { data } = await userService.getReputation();
      return data.metadata;
    },
    staleTime: 60000 * 3
  });

  return {
    isLoadingReputation: isPending,
    isErrorReputation: isError,
    reputation: data!,
    isFetchingReputation: isFetching
  };
};

export const useGetAllListQuestions = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allListQuestions'],
    queryFn: async () => {
      const { data } = await questionService.getAllListQuestions();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllListQuestions: isPending,
    isErrorAllListQuestions: isError,
    allListQuestions: data!,
    isFetchingAllListQuestions: isFetching
  };
};

export const useGetAllNotifications = () => {
  const { data, isPending, isError, isFetching, refetch, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['allNotifications'],
      queryFn: async ({ pageParam }) => {
        const { data } = await notiService.getAllNotifications(pageParam);
        return data.metadata;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < 10) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity
    });

  return {
    isLoadingAllNotifications: isPending,
    isErrorAllNotifications: isError,
    allNotifications: data!,
    isFetchingAllNotifications: isFetching,
    refetchAllNotifications: refetch,
    hasNextAllNotifications: hasNextPage,
    fetchNextAllNotifications: fetchNextPage,
    isFetchingNextAllNotifications: isFetchingNextPage
  };
};

export const useGetUnRedNotiNumber = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['unRedNotiNumber'],
    queryFn: async () => {
      const { data } = await notiService.getUnRedNotiNumber();
      return data.metadata;
    },
    staleTime: 60000 * 3
  });

  return {
    isLoadingUnRedNotiNumber: isPending,
    isErrorUnRedNotiNumber: isError,
    unRedNotiNumber: data!,
    isFetchingUnRedNotiNumber: isFetching
  };
};

// ------------------------------Admin hooks--------------------------------

export const useGetAllUsersAdmin = (page: number, pageSize?: number) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allUsersAdmin', page, pageSize ?? 10],
    queryFn: async () => {
      const { data } = await adminService.getAllUsers(page + 1, pageSize);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllUsers: isPending,
    isErrorAllUsers: isError,
    allUsers: data!,
    isFetchingAllUsers: isFetching
  };
};

export const useGetNumberOfUsersAdmin = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['numberOfUsersAdmin'],
    queryFn: async () => {
      const { data } = await adminService.getNumberOfUsers();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingNumberOfUsers: isPending,
    isErrorNumberOfUsers: isError,
    numberOfUsers: data!,
    isFetchingNumberOfUsers: isFetching
  };
};

export const useGetAllPostsAdmin = (page: number, pageSize?: number) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allPostsAdmin', page, pageSize ?? 10],
    queryFn: async () => {
      const { data } = await adminService.getAllPosts(page + 1, pageSize);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllPosts: isPending,
    isErrorAllPosts: isError,
    allPosts: data!,
    isFetchingAllPosts: isFetching
  };
};

export const useGetNumberOfPostsAdmin = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['numberOfPostsAdmin'],
    queryFn: async () => {
      const { data } = await adminService.getNumberOfPosts();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingNumberOfPosts: isPending,
    isErrorNumberOfPosts: isError,
    numberOfPosts: data!,
    isFetchingNumberOfPosts: isFetching
  };
};

export const useGetNumberOfSeriesAdmin = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['numberOfSeriesAdmin'],
    queryFn: async () => {
      const { data } = await adminService.getNumberOfSeries();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingNumberOfSeries: isPending,
    isErrorNumberOfSeries: isError,
    numberOfSeries: data!,
    isFetchingNumberOfSeries: isFetching
  };
};

export const useGetAllSeriesAdmin = (page: number, pageSize?: number) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allSeriesAdmin', page, pageSize ?? 10],
    queryFn: async () => {
      const { data } = await adminService.getAllSeries(page + 1, pageSize);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllSeries: isPending,
    isErrorAllSeries: isError,
    allSeries: data!,
    isFetchingAllSeries: isFetching
  };
};

export const useGetNumberOfCommunitiesAdmin = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['numberOfCommunitiesAdmin'],
    queryFn: async () => {
      const { data } = await adminService.getNumberOfCommunities();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingNumberOfCommunities: isPending,
    isErrorNumberOfCommunities: isError,
    numberOfCommunities: data!,
    isFetchingNumberOfCommunities: isFetching
  };
};

export const useGetAllCommunitiesAdmin = (page: number, pageSize?: number) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allCommunitiesAdmin', page, pageSize ?? 10],
    queryFn: async () => {
      const { data } = await adminService.getAllCommunities(page + 1, pageSize);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllCommunities: isPending,
    isErrorAllCommunities: isError,
    allCommunities: data!,
    isFetchingAllCommunities: isFetching
  };
};

export const useGetNumberOfQuestionsAdmin = () => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['numberOfQuestionsAdmin'],
    queryFn: async () => {
      const { data } = await adminService.getNumberOfQuestions();
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingNumberOfQuestions: isPending,
    isErrorNumberOfQuestions: isError,
    numberOfQuestions: data!,
    isFetchingNumberOfQuestions: isFetching
  };
};

export const useGetAllQuestionsAdmin = (page: number, pageSize?: number) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['allQuestionsAdmin', page, pageSize ?? 10],
    queryFn: async () => {
      const { data } = await adminService.getAllQuestions(page + 1, pageSize);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingAllQuestions: isPending,
    isErrorAllQuestions: isError,
    allQuestions: data!,
    isFetchingAllQuestions: isFetching
  };
};

export const useGetAllParentCommentsAdmin = (postID: string, pageSize?: number) => {
  const { data, isPending, isError, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['allParentCommentsAdmin', postID],
      queryFn: async ({ pageParam }) => {
        const { data } = await adminService.getAllParentComments(postID, pageParam, pageSize);
        return data.metadata;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < (pageSize ?? 20)) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity
    });

  return {
    isLoadingAllParentComments: isPending,
    isErrorAllParentComments: isError,
    allParentComments: data!,
    isFetchingAllParentComments: isFetching,
    hasNextParentComments: hasNextPage,
    fetchNextParentComments: fetchNextPage,
    isFetchingNextParentComments: isFetchingNextPage
  };
};

export const useGetAllChildCommentsAdmin = (parentCommentID: string, pageSize?: number) => {
  const { data, isPending, isError, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['allChildCommentsAdmin', parentCommentID],
      queryFn: async ({ pageParam }) => {
        const { data } = await adminService.getAllChildComments(parentCommentID, pageParam, pageSize);
        return data.metadata;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length < (pageSize ?? 20)) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      select: (data) => {
        return data.pages.flat();
      },
      staleTime: Infinity
    });

  return {
    isLoadingAllChildComments: isPending,
    isErrorAllChildComments: isError,
    allChildComments: data!,
    isFetchingAllChildComments: isFetching,
    hasNextChildComments: hasNextPage,
    fetchNextChildComments: fetchNextPage,
    isFetchingNextChildComments: isFetchingNextPage
  };
};
export const useGetRecommendUsers = (userID: string) => {
  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ['recommendUsers', userID],
    queryFn: async () => {
      const { data } = await recommendService.getRecommendUsers(userID);
      return data.metadata;
    },
    staleTime: Infinity
  });

  return {
    isLoadingRecommendUsers: isPending,
    isErrorRecommendUsers: isError,
    recommendUsers: data!,
    isFetchingRecommendUsers: isFetching
  };
};
