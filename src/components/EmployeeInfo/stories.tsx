import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmployeeInfo } from '.';
import { BadgeType } from '../Badge';

export default {
  title: 'EmployeeInfo',
  component: EmployeeInfo,
  argTypes: {
    isBadge: {
      type: 'boolean'
    }
  },
  args: {
    label: 'status',
    description: 'Ativo',
    isBadge: true,
    badgeType: BadgeType.ACTIVE,
    isEdit: false
  }
} as ComponentMeta<typeof EmployeeInfo>;

export const Default: ComponentStory<typeof EmployeeInfo> = (args) => (
  <EmployeeInfo {...args} />
);
