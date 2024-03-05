import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'bold16',
        'regular16',
        'bold14',
        'medium14',
        'regular14',
        'bold-small',
        'small',
        'link-small',
        'regular-link',
        'error',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'large text example',
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    children: 'h1 text example',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'h2 text example',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'h3 text example',
    variant: 'h3',
  },
}

export const Body1: Story = {
  args: {
    children: 'bold16 text example',
    variant: 'bold16',
  },
}
export const Body2: Story = {
  args: {
    children: 'regular16 text example',
    variant: 'regular16',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'bold14 text example',
    variant: 'bold14',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'medium14 text example',
    variant: 'medium14',
  },
}
export const Caption: Story = {
  args: {
    children: 'regular14 text example',
    variant: 'regular14',
  },
}
export const Overline: Story = {
  args: {
    children: 'bold-small text example',
    variant: 'bold-small',
  },
}
export const Link1: Story = {
  args: {
    children: 'link-small text example',
    color: 'link',
    variant: 'link-small',
  },
}
export const Link2: Story = {
  args: {
    children: 'regular-link text example',
    color: 'link',
    variant: 'regular-link',
  },
}
