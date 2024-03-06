import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalExample: Story = {
  args: {
    children: <div>This is modal window content</div>,
    modalTrigger: <button>Trigger button</button>,
    title: 'Modal title',
  },
}
