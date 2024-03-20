import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from '@/widgets/auth/createNewPassword'

const meta = {
  argTypes: {},
  component: CreateNewPassword.widget,
  tags: ['autodocs'],
  title: 'Widgets/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword.widget>

export default meta
type Story = StoryObj<typeof CreateNewPassword.widget>

export const Default: Story = {}
