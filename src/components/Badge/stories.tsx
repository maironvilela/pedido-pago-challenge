import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from '.';

export default {
  title: 'Badge',
  component: Badge,
  args: {
    description: 'Ativo',
    type: 'active'
  }
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args} />
);
