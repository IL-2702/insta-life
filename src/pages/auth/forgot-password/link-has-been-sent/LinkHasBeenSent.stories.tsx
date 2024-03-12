import { Meta, StoryObj } from '@storybook/react'

import LinkHasBeenSent from './index'

const meta = {
  component: LinkHasBeenSent,
  title: 'Pages/LinkHasBeenSent',
} satisfies Meta<typeof LinkHasBeenSent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
