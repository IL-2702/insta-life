import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from '@/widgets/auth/createNewPassword/ui/CreateNewPassword'

const meta = {
  argTypes: {},
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Pages/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof CreateNewPassword>

export const Default: Story = {}
