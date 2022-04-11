/* eslint-disable @typescript-eslint/no-explicit-any */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

const employees: any[] = [];

for (let i = 1; i <= 50; i++) {
  const employee = {
    agent_id: i,
    name: `User ${i}`,
    image: faker.image.avatar(),
    department: faker.name.jobTitle(),
    branch: faker.name.jobDescriptor(),
    role: faker.name.jobType(),
    status: i % 2 == 0 ? 'active' : 'inactive'
  };

  employees.push(employee);
}

export const handlers = [
  rest.get('http://localhost:3000/api/employees/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(employees[1]));
  }),
  rest.get(
    'http://localhost:3000/api/employees/page=1&page_size=5',
    (req, res, ctx) => {
      const employeesResponse: any[] = [];

      for (let i = 6; i <= 10; i++) {
        const employee = {
          agent_id: i,
          name: `User ${i}`,
          image: faker.image.avatar(),
          department: faker.name.jobTitle(),
          branch: faker.name.jobDescriptor(),
          role: faker.name.jobType(),
          status: i % 2 == 0 ? 'active' : 'inactive'
        };

        employeesResponse.push(employee);
      }
      return res(ctx.status(200), ctx.json(employeesResponse));
    }
  )
];
