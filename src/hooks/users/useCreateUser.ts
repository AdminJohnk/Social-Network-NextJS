import { User } from '@/types/users.type';
import useAxios from '../shared/useAxiosWrapper';
import '@/configs/axios.config';

function useCreateUser(mockData?: User) {
  return useAxios<User>(
    {
      method: 'POST',
      url: '/user'
    },
    {
      manual: true,
      mockData,
      autoCancel: false
    }
  );
}
export default useCreateUser;
