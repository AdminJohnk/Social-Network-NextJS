export interface ErrorResponse extends Error {
  response: {
    data: {
      message: string;
      status: number;
    };
    status: number;
  };
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IGoogleLogin {
  email: string;
  name: string;
  givenName: string;
  familyName: string;
  imageUrl: string;
}

export interface IGithubLogin {
  email: string;
  name: string;
  login: string;
  avatar_url: string;
}

export interface IUserRegister extends IUserLogin {
  name: string;
  confirm: string;
}

export interface IUserAToken {
  accessToken: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IVerifyCode {
  email: string;
  code: string;
}

export interface IResetPassword {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface IUserUpdate {
  name?: string;
  phone_number?: string;
  user_image?: string;
  cover_image?: string;
  tags?: string[];
  alias?: string;
  about?: string;
  experiences?: IExperience[];
  repositories?: IRepository[];
  contacts?: IContact[];
  location?: string;
}

export interface IRepository {
  id: string;
  name: string;
  private: boolean;
  html_url: string;
  watchers_count: number;
  forks_count: number;
  stargazers_count: number;
  languages: string;
}

export interface ICreateRepository {
  id: string;
  name: string;
  private: boolean;
  html_url: string;
  watchers_count: number;
  forks_count: number;
  stargazers_count: number;
  language: string;
}

export interface IExperience {
  position_name: string;
  company_name: string;
  start_date: string;
  end_date: string;
}

export type IKeyContact = 'facebook' | 'instagram' | 'twitter' | 'github' | 'linkedin';

export interface IContact {
  key: IKeyContact;
  link: string;
}

export interface IUserInfo {
  _id: string;
  id_incr: number;
  name: string;
  email: string;
  role: string[];
  last_online: string;
  phone_number: string;
  user_image: string;
  cover_image: string;
  tags: string[];
  alias: string;
  about: string;
  posts: IPost[];
  experiences: IExperience[];
  repositories: IRepository[];
  contacts: IContact[];
  location: string;
  education: string;
  createdAt: string;
  favorites: string[];
  communities: string[];
  notifications: string[];
  friends: IUserInfo[];
  requestSent: String[];
  requestReceived: String[];
  friend_number: number;
  pendingFriend_number: number;
  members: IUserInfo[];
  post_number: number;
  is_friend: boolean;
}

export interface TypeOfLink {
  title: string;
  description: string;
  image: string;
}

export interface ICreatePost {
  title: string;
  content: string;
  visibility: Visibility;
  images?: (string | undefined)[];
}

export interface IUpdatePost {
  id: string;
  postUpdate: ICreatePost;
}

export interface ISharePost {
  post: string;
  visibility?: Visibility;
  owner_post: string;
  content_share?: string;
  shared_post?: string;
}

type TypeofPost = 'Post' | 'Share';

export interface IPost {
  _id: string;
  type: TypeofPost;
  visibility: Visibility;
  post_attributes: {
    user: IUserInfo;

    //if type is post
    title: string;
    content: string;
    images: string[];
    url?: TypeOfLink;

    //if type is share
    post?: IPost;
    owner_post?: IUserInfo;
    content_share: string;

    likes: ILikePost[];
    comments: ICommentPost[];
    shares: ISharePost[];

    view_number: number;
    like_number: number;
    comment_number: number;
    share_number: number;
  };
  is_liked: boolean;
  is_shared: boolean;
  is_saved: boolean;
  createdAt: string;
}

export interface ILikePost {
  _id: string;
  user: IUserInfo;
  post: IPost;
  owner_post: IUserInfo;
}

export type TypeofComment = 'parent' | 'child';

export interface ICreateComment {
  type: TypeofComment;
  post: string;
  owner_post: string;
  content: string;
  parent?: string;
  parentUser?: string;
}

export interface IImageResponse {
  key: string;
}

export interface ICreateLikeComment {
  id: string;
  comment: ILikeComment;
}

export interface IGetChildComments {
  post: string;
  parent: string;
}

export interface ILikeComment {
  type: TypeofComment;
  post: string;
  owner_comment: string;
}

export interface ICommentPost {
  _id: string;
  post: string;
  user: IUserInfo;
  content: string;
  type: TypeofComment;

  //if interface is child
  parent?: ICommentPost;

  //if interface is parent
  child_number: number;

  is_liked: boolean;
  is_disliked: boolean;
  likes: ILikePost[];
  dislikes: ILikePost[];
  like_number: number;
  dislike_number: number;
  createdAt: string;
}

export interface ISelectedComment {
  isReply: boolean;
  idComment: string | null;
  name: string | null;
  user_image: string | null;
}

export interface IResponse<T> {
  message: string;
  status: number;
  metadata: T;
}

export type TypeofConversation = 'private' | 'group';

export interface IConversation {
  _id: string;
  type: TypeofConversation;
  members: IUserInfo[];
  name: string;
  lastMessage: IMessage;
  creator: string;
  admins: IUserInfo[];
  image?: string;
  cover_image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateConversation {
  type: TypeofConversation;
  members: string[];
  name?: string;
  image?: string;
}

type TypeofUpdateConversation =
  | 'name'
  | 'image'
  | 'cover_image'
  | 'add_member'
  | 'remove_member'
  | 'commission_admin'
  | 'remove_admin';

export interface IUpdateConversation extends IConversation {
  typeUpdate: TypeofUpdateConversation;
}

type TypeofMessage = 'text' | 'image' | 'notification' | 'audio' | 'file' | 'voice' | 'video' | 'post';
type TypeofAction =
  | 'promote_admin'
  | 'revoke_admin'
  | 'remove_member'
  | 'change_name'
  | 'change_avatar'
  | 'leave_conversation'
  | 'add_member';

export interface IMessage {
  _id: string;
  conversation_id: string;
  type: TypeofMessage;
  sender: IUserInfo;
  seen: IUserInfo[];
  content: string;
  post_id?: string;
  action: TypeofAction;
  target?: IUserInfo;
  isSending?: boolean;
  images?: string[];
  createdAt: string;
}

export interface ICreateMessage {
  conversation_id: string;
  content?: string;
  image?: string;
}

export interface ICalled {
  _id: string;
  content: string;
  conversation_id: IConversation;
  sender: IUserInfo;
  seen: IUserInfo[];
  type: TypeofMessage;
  createdAt: string;
}

export interface IEmoji {
  id: string;
  name: string;
  native: string;
  unified: string;
  keywords: string[];
  shortcodes: string;
}

export interface ISocketCall {
  author: IUserInfo;
  user_id: string;
  user_name: string;
  user_image: string;
  members: IUserInfo[];
  token: string;
  first_call: boolean;
  type: 'missed' | 'ended';
  typeofConversation: TypeofConversation;
  conversation_id: string;
  conversation_name: string;
}

export type ModalType =
  | {
      destroy: () => void;
      update: (configUpdate: any | ((prevConfig: any) => any)) => void;
      then<T>(resolve: (confirmed: boolean) => T, reject: VoidFunction): Promise<T>;
    }
  | undefined;

export type Visibility = 'public' | 'private' | 'member' | 'friend';

export interface ICommunity {
  name: string;
  description: string;
  image: string;
  cover_image: string;
  about: string;
  tags: string[];
  rules: {
    title: string;
    content: string;
  }[];
  visibility: Visibility;
  creator: IUserInfo;
  posts: IPost[];
  members: IUserInfo[];
  recently_joined: IUserInfo[];
  admins: IUserInfo[];
  waitlist_users: IUserInfo[];
  waitlist_posts: IPost[];
  post_number: number;
  member_number: number;
  admin_number: number;
  waitlist_user_number: number;
  waitlist_post_number: number;
  createdAt: string;
}

export interface INotification {
  _id: string;
  type: string;
  sender: IUserInfo;
  receiver: IUserInfo;
  content: string;
  createAt: string;
  options: {
    post: string;
    comment: string;
    conversation: string;
    community: string;
  };
  is_viewed: boolean;
}

export interface ICreateSearchLog {
  user: string;
  keyword?: string;
  recently_search?: string;
}

export interface ISearchLog {
  _id: string;
  user: string;
  keywords: string[];
  recently_search_list: IUserInfo[];
  createdAt: string;
}

export type IFeaturePost = 'detail' | 'sharing' | 'newsfeed' | 'modal' | 'profile' | 'favorite';

export type TypeOfLevel = 'beginner' | 'intermediate' | 'advanced';

export interface ICreateSeries {
  title: string;
  description: string;
  level: TypeOfLevel;
  cover_image: string;
  introduction: string;
  visibility: Visibility;
}

export interface ISeriesPost {
  title: string;
  content: string;
  cover_image: string;
  description: string;
  read_time: number;
  likes: IUserInfo[];
  saves: IUserInfo[];
  comments: {
    _id: string;
    user: IUserInfo;
    content: string;
    like: IUserInfo[];
    createdAt: string;
    child: {
      _id: string;
      user: IUserInfo;
      content: string;
      like: IUserInfo[];
      createdAt: string;
    }[];
  }[];
  createdAt: string;
}

export interface ISeries {
  _id: string;
  user: IUserInfo;
  title: string;
  description: string;
  introduction: string;
  visibility: Visibility;
  post: ISeriesPost[];
  cover_image: string;
  level: TypeOfLevel;
  rating: {
    start_1: number;
    start_2: number;
    start_3: number;
    start_4: number;
    start_5: number;
    avg: number;
  };
  reviews: {
    user: IUserInfo;
    content: string;
    rating: number;
    createdAt: string;
  }[];
  createdAt: string;
}
