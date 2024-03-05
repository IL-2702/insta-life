import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

// import LogoutIcon from '@/assets/icons/logout-icon.tsx'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outlined', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary',
    disabled: false,
    variant: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    disabled: false,
    variant: 'secondary',
  },
}
export const Outlined: Story = {
  args: {
    children: 'Outlined',
    disabled: false,
    variant: 'outlined',
  },
}
export const ButtonAsLink: Story = {
  args: {
    as: 'a',
    children: 'as link',
    variant: 'link',
  },
}
export const FullWidth: Story = {
  args: {
    children: 'full width',
    fullWidth: true,
    variant: 'primary',
  },
}
