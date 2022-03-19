import React from 'react';
import { faker } from '@faker-js/faker';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmployeeCard } from '.';
import { EmployeeInfo } from '../EmployeeInfo';

export default {
  title: 'EmployeeCard',
  component: EmployeeCard,
  argTypes: {
    imgUrl: {
      type: 'string'
    },
    header: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    employeesInfo: {
      type: EmployeeInfo
    }
  }
} as ComponentMeta<typeof EmployeeCard>;

export const Default: ComponentStory<typeof EmployeeCard> = (args) => (
  <EmployeeCard {...args} />
);
Default.args = {
  imgUrl: faker.image.avatar(),
  header: 'Nome Completo',
  name: faker.name.findName(),
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
      label: 'Unidade',
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
};
