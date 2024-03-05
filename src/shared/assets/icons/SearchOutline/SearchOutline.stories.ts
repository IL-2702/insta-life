import { Meta, StoryObj } from '@storybook/react'

import { Search } from './SearchOutline'

const meta = {
  component: Search,
  title: 'Icons/Search',
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
