import type { Meta, StoryObj } from '@storybook/react'

import { TermsOfService } from '../'
// eslint-disable-next-line import/namespace

const meta = {
  component: TermsOfService.widget,
  tags: ['autodocs'],
  title: 'Widgets/TermsOfService',
} satisfies Meta<typeof TermsOfService.widget>

export default meta
type Story = StoryObj<typeof TermsOfService.widget>

export const Defoult: Story = {}
