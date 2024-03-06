import { Meta, StoryObj } from '@storybook/react'

import { CheckIcon } from './CheckIcon'

const meta = {
  component: CheckIcon,
  title: 'Icons/CheckIcon',
} satisfies Meta<typeof CheckIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
