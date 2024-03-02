'use client';

import { mockUsers } from '@/mocks/users.mock';
import { User, UserGetParams } from '@/types/users.type';
import useAxios from '@/hooks/shared/useAxiosWrapper';

export default function useUserList(params: UserGetParams) {
  const { page = 0, per_page = 10, keyword = '' } = params ?? {};
  return useAxios<{
    data: User[];
  }>(
    {
      method: 'GET',
      url: '/users',
      params
    },
    {
      mockData: {
        data: mockUsers
          .filter(user =>
            user.email.toLowerCase().includes(keyword.toLowerCase())
          )
          .slice(page, per_page)
      }
    }
  );
}
