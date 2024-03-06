import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const Active: Story = {
  args: {
    autoFocus: true,
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const Search: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'search',
  },
}

export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Password',
    type: 'password',
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'Error message',
    label: 'Input with error',
    value: 'Wrong value',
  },
}
