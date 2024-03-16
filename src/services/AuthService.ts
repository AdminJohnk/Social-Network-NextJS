import {
  IGoogleLogin,
  IUserLogin,
  IUserRegister,
  IVerifyCode,
  IForgotPassword,
  IResetPassword
} from '@/types';
import { BaseService } from './BaseService';

class AuthService extends BaseService {
  constructor() {
    super();
  }
  register = (userRegister: IUserRegister) => {
    return this.post(`/auth/signup`, userRegister);
  };
  login = (userLogin: IUserLogin) => {
    return this.post(`/auth/login`, userLogin);
  };
  loginWithGoogle = (email: IGoogleLogin) => {
    return this.post(`/auth/login-google`, email);
  };
  loginWithGithub = (email: IGoogleLogin) => {
    return this.post(`/auth/login-github`, email);
  };
  logout = () => {
    return this.post(`/auth/logout`);
  };
  forgotPassword = (email: string) => {
    return this.post(`/auth/forgot`, email);
  };
  verifyCode = (data: IVerifyCode) => {
    return this.post(`/auth/verify`, data);
  };
  checkVerifyCode = (data: IForgotPassword) => {
    return this.post(`/auth/checkVerify`, data);
  };
  resetPassword = (data: IResetPassword) => {
    return this.post(`/auth/reset`, data);
  };
  checkResetPassword = (data: IForgotPassword) => {
    return this.post(`/auth/checkReset`, data);
  };
}

export const authService = new AuthService();
