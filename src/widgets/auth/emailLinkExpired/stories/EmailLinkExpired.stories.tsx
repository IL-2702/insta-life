import type { Meta, StoryObj } from '@storybook/react'

// eslint-disable-next-line import/namespace
import { EmailLinkExpired } from '../'

const meta = {
  component: EmailLinkExpired.widget,
  tags: ['autodocs'],
  title: 'Widgets/EmailLinkExpired',
} satisfies Meta<typeof EmailLinkExpired.widget>

export default meta
type Story = StoryObj<typeof EmailLinkExpired.widget>

export const Defoult: Story = {}
