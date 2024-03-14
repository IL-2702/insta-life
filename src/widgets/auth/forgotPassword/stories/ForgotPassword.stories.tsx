import { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from '../'

const meta = {
  component: ForgotPassword.widget,
  title: 'Widgets/ForgotPassword',
} satisfies Meta<typeof ForgotPassword.widget>

export default meta
type Story = StoryObj<typeof meta>

export const Defoult: Story = {}
