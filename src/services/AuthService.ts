import {
  IGoogleLogin,
  IUserLogin,
  IUserRegister,
  IVerifyCode,
  IForgotPassword,
  IResetPassword,
  IGithubLogin
} from '@/types';
import { BaseService } from './BaseService';

class AuthService extends BaseService {
  constructor() {
    super();
  }
  register = async (userRegister: IUserRegister) => {
    return await this.post(`/auth/signup`, userRegister);
  };
  login = async (userLogin: IUserLogin) => {
    return await this.post(`/auth/login`, userLogin);
  };
  loginWithGoogle = async (email: IGoogleLogin) => {
    return await this.post(`/auth/login-google`, email);
  };
  loginWithGithub = async (email: IGithubLogin) => {
    return await this.post(`/auth/login-github`, email);
  };
  logout = async () => {
    return await this.post(`/auth/logout`);
  };
  changePassword = async (data: IResetPassword) => {
    return await this.post(`/auth/change-password`, data);
  };
  forgotPassword = async (email: string) => {
    return await this.post(`/auth/forgot`, { email });
  };
  verifyCode = async (data: IVerifyCode) => {
    return await this.post(`/auth/verify`, data);
  };
  checkVerifyCode = async (data: IForgotPassword) => {
    return await this.post(`/auth/checkVerify`, data);
  };
  resetPassword = async (data: IResetPassword) => {
    return await this.post(`/auth/reset`, data);
  };
  checkResetPassword = async (data: IForgotPassword) => {
    return await this.post(`/auth/checkReset`, data);
  };
}

export const authService = new AuthService();
