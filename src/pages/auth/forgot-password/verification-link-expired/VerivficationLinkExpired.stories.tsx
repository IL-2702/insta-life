import { Meta, StoryObj } from '@storybook/react'

import VerificationLinkExpired from './index'

const meta = {
  component: VerificationLinkExpired,
  title: 'Pages/VerificationLinkExpired',
} satisfies Meta<typeof VerificationLinkExpired>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
