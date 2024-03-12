import { Meta, StoryObj } from '@storybook/react'

import EmailConfirmed from './index'

const meta = {
  component: EmailConfirmed,
  title: 'Pages/EmailConfirmed',
} satisfies Meta<typeof EmailConfirmed>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
