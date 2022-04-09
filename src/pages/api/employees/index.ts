import { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const itens = [
    {
      agent_id: 1,
      name: 'Kai Cunha Lima',
      image: faker.image.avatar(),
      department: 'Administrativo',
      branch: 'Farmácia Pedido Pago',
      role: 'Diretor',
      status: 'active'
    },
    {
      agent_id: 2,
      name: 'Kaua Gomes Castro',
      image: faker.image.avatar(),
      department: 'Administrativo',
      branch: 'Farmácia Pedido Pago',
      role: 'Gerente',
      status: 'inactive'
    },
    {
      agent_id: 3,
      name: 'Brenda Cunha Pinto',
      image: faker.image.avatar(),
      department: 'Comercial',
      branch: 'Farmácia Pedido Pago',
      role: 'Analista',
      status: 'active'
    },
    {
      agent_id: 4,
      name: 'Rodrigo Correia Ferreira',
      image: faker.image.avatar(),
      department: 'Administrativo',
      branch: 'Farmácia Pedido Pago',
      role: 'Analista',
      status: 'active'
    },
    {
      agent_id: 5,
      name: 'Livia Goncalves Dias',
      image: faker.image.avatar(),
      department: 'Suporte',
      branch: 'Farmácia Pedido Pago',
      role: 'Diretor',
      status: 'active'
    },
    {
      agent_id: 6,
      name: 'Larissa Araujo Pereira',
      image: faker.image.avatar(),
      department: 'Marketing',
      branch: 'Farmácia Pedido Pago',
      role: 'Analista',
      status: 'active'
    },
    {
      agent_id: 7,
      name: 'Camila Rodrigues Ribeiro',
      image: faker.image.avatar(),
      department: 'SAC',
      branch: 'Farmácia Pedido Pago',
      role: 'Diretor',
      status: 'active'
    },
    {
      agent_id: 8,
      name: 'Fernanda Barbosa Almeida',
      image: faker.image.avatar(),
      department: 'Marketing',
      branch: 'Farmácia Pedido Pago',
      role: 'Diretor',
      status: 'active'
    },
    {
      agent_id: 9,
      name: 'Luiza Cunha Araujo',
      image: faker.image.avatar(),
      department: 'SAC',
      branch: 'Farmácia Pedido Pago',
      role: 'Analista',
      status: 'inactive'
    }
  ];

  return response.json(itens);
};
