import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
Default.args = { children: 'Ações', icon: <AiOutlineFileAdd /> };
