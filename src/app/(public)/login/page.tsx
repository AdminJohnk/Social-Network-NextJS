import LoginForm from '@/components/Form/LoginForm/LoginForm';
import * as React from 'react';

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
