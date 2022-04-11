import React from 'react';
import { faker } from '@faker-js/faker';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmployeesList } from '.';

export default {
  title: 'EmployeesList',
  component: EmployeesList,
  argTypes: {
    title: {
      type: 'string'
    },
    employees: [
      {
        type: {
          id: 'number',
          imgUrl: 'string',
          header: 'string',
          name: 'string',
          employeesInfo: [
            {
              type: {
                id: 'number',
                label: 'string',
                description: 'string'
              }
            }
          ]
        }
      }
    ]
  },
  args: {
    title: 'Listagem de Colaboradores',
    employees: [
      {
        id: 1,
        header: 'Nome Completo',
        imgUrl: faker.image.avatar(),
        name: faker.name.findName(),
        isActive: false,
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
      {
        id: 2,
        header: 'Nome Completo',
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
            description: 'TI'
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
      }
    ]
  }
} as ComponentMeta<typeof EmployeesList>;

export const Default: ComponentStory<typeof EmployeesList> = (args) => (
  <EmployeesList {...args} />
);
