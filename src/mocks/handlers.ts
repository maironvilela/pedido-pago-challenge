import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const handlers = [
  rest.get('http://localhost:3000/api/employees/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        agent_id: 1,
        name: 'Kai Cunha Lima',
        image: faker.image.avatar(),
        department: 'Administrativo',
        branch: 'Farmácia Pedido Pago',
        role: 'Diretor',
        status: 'active'
      })
    );
  }),
  rest.get(
    'http://localhost:3000/api/employees/page=0&page_size=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            agent_id: 2,
            name: faker.name.findName(),
            image: faker.image.avatar(),
            department: 'Administrativo',
            branch: 'Farmácia Pedido Pago',
            role: 'Diretor',
            status: 'active'
          },
          {
            agent_id: 3,
            name: faker.name.findName(),
            image: faker.image.avatar(),
            department: 'Administrativo',
            branch: 'Farmácia Pedido Pago',
            role: 'Diretor',
            status: 'active'
          }
        ])
      );
    }
  )
];
