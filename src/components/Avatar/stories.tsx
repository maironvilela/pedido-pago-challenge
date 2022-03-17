import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '.';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    fullName: 'Fulano de Tal Jose'
  }
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = () => (
  <Avatar fullName="Fulano de Tal" />
);
