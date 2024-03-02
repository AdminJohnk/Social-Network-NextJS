import { User } from '@/types/users.type';
import { faker } from '@faker-js/faker';
import { UniqueEnforcer } from 'enforce-unique';

export const mockUsers: User[] = [];
const uniqueEnforcerNumber = new UniqueEnforcer();

for (let index = 0; index < 99; index++) {
  mockUsers.push({
    id: uniqueEnforcerNumber.enforce(index),
    email: `${faker.person.fullName()}@example.com`,
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    avatar: faker.image.urlLoremFlickr({
      width: 300,
      height: 300
    })
  });
}
