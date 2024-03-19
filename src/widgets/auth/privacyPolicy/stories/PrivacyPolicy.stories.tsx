import type { Meta, StoryObj } from '@storybook/react'

import { PrivacyPolicy } from '../'
// eslint-disable-next-line import/namespace

const meta = {
  component: PrivacyPolicy.widget,
  tags: ['autodocs'],
  title: 'Widgets/PrivacyPolicy',
} satisfies Meta<typeof PrivacyPolicy.widget>

export default meta
type Story = StoryObj<typeof PrivacyPolicy.widget>

export const Defoult: Story = {}
