import React from 'react';
import { faker } from '@faker-js/faker';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '.';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    fullName: faker.name.findName(),
    imgUrl: faker.image.avatar()
  }
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);
