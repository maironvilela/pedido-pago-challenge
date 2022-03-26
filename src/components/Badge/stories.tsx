import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge, BadgeType } from '.';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    label: BadgeType
  },
  args: {
    label: BadgeType.ACTIVE
  }
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args} />
);
