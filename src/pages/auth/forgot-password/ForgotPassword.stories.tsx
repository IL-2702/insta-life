import { Meta, StoryObj } from '@storybook/react'

import ForgotPassword from './index'

const meta = {
  component: ForgotPassword,
  title: 'Pages/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
