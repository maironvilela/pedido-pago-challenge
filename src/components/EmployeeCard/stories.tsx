import React from 'react';
import { faker } from '@faker-js/faker';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmployeeCard } from '.';

export default {
  title: 'EmployeeCard',
  component: EmployeeCard
} as ComponentMeta<typeof EmployeeCard>;

export const Default: ComponentStory<typeof EmployeeCard> = (args) => (
  <EmployeeCard {...args} />
);
Default.args = {
  employee: {
    imgUrl: faker.image.avatar(),
    name: faker.name.findName(),
    isActive: true,
    employeesInfo: [
      {
        id: 1,
        label: 'Departamento',
        description: 'Administrativo'
      },
      {
        id: 2,
        label: 'Cargo',
        description: 'Diretor'
      },
      {
        id: 3,
        label: 'Código da Unidade',
        description: '123456789'
      },
      {
        id: 4,
        label: 'Unidade',
        description: 'Quartel General'
      },
      {
        id: 5,
        label: 'Status',
        description: 'Ativo',
        isBadge: true
      }
    ]
  },
  header: 'Nome Completo'
};
