import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { CheckboxPropsType } from '@/shared/ui/Checkbox/Checkbox'

import { Checkbox } from './index'

const meta = {
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      options: [true, false],
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

const Template = (args: CheckboxPropsType) => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Checkbox
        {...args}
        checked={checked}
        disabled={false}
        label={'Check-box'}
        onChange={() => setChecked(!checked)}
      />
      <div>Checked: {checked ? 'true' : 'false'}</div>
    </>
  )
}

export const Default = Template

export const Checked: Story = {
  args: { checked: true, disabled: false },
}
export const NotChecked: Story = {
  args: { checked: false, disabled: false },
}
export const DisabledAndChecked: Story = {
  args: { checked: true, disabled: true },
}

export const DisabledAndNotChecked: Story = {
  args: { checked: false, disabled: true },
}
