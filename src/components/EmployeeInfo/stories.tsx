import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmployeeInfo } from '.';

export default {
  title: 'EmployeeInfo',
  component: EmployeeInfo,
  argTypes: {
    isBadge: {
      type: 'boolean'
    }
  },
  args: {
    label: 'Status',
    description: 'Ativo',
    type: 'active',
    isBadge: true
  }
} as ComponentMeta<typeof EmployeeInfo>;

export const Default: ComponentStory<typeof EmployeeInfo> = (args) => (
  <EmployeeInfo {...args} />
);
