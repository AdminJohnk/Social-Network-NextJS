export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserLogin {
  user: {
    _id: string;
    email: string;
    name: string;
    user_image: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface UserGetParams {
  keyword?: string;
  per_page?: number;
  page?: number;
}
