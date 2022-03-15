import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '.';

export default {
  title: 'Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = () => <Avatar />;
