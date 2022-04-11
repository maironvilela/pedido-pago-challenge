import React from 'react';
import { faker } from '@faker-js/faker';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmployeeCard } from '.';

export default {
  title: 'EmployeeCard',
  component: EmployeeCard,
  argTypes: {
    header: {
      type: 'string'
    },

    employee: {
      imgUrl: 'string',
      name: 'string',
      isActive: 'boolean',
      employeeInfo: [
        {
          id: 'number',
          label: 'string',
          description: 'string'
        }
      ]
    }
  }
} as ComponentMeta<typeof EmployeeCard>;

export const Default: ComponentStory<typeof EmployeeCard> = (args) => (
  <EmployeeCard {...args} />
);
Default.args = {
  header: 'Nome Completo',
  employee: {
    id: 1,
    imgUrl: faker.image.avatar(),
    name: faker.name.findName(),
    isActive: false,
    employeeInfo: [
      {
        label: 'Departamento',
        description: 'Administrativo'
      },
      {
        label: 'Cargo',
        description: 'Diretor'
      },
      {
        label: 'Código da Unidade',
        description: '123456789'
      },
      {
        label: 'Unidade',
        description: 'Quartel General'
      },
      {
        label: 'Status',
        description: 'Ativo'
      }
    ]
  }
};
