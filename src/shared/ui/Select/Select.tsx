import { useState } from 'react'

import { SelectToggle } from '@/shared/assets/icons/SelectToggle'
import { Typography } from '@/shared/ui/Typography'
import * as Select from '@radix-ui/react-select'
import Image from 'next/image'

import s from './Select.module.scss'

import g from '../../../../public/bell.svg'

type SelectPropsType = {
  currentValue?: string
  fullWidth?: boolean
  onValueChange?: (value: string) => void
  optionTextVariant?:
    | 'bold-small'
    | 'bold14'
    | 'bold16'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link-small'
    | 'medium14'
    | 'regular-link'
    | 'regular14'
    | 'regular16'
    | 'small'
  selectItems?: Array<string>
  values?: Array<string>
}

const defaultSelectItems = ['select1', 'select2', 'select3']

export const SelectComponent = ({
  currentValue,
  fullWidth,
  onValueChange,
  optionTextVariant = 'regular14',
  selectItems = defaultSelectItems,
}: SelectPropsType) => {
  const [value, setValue] = useState(selectItems[0])
  const localCurrentValue = currentValue ? currentValue : value
  const localOnValueChange = onValueChange ? onValueChange : setValue

  return (
    <Select.Root onValueChange={localOnValueChange} value={localCurrentValue}>
      <Select.Trigger className={`${s.selectTrigger} ${fullWidth ? s.fullWidth : ''}`}>
        <Select.Value defaultValue={localCurrentValue}>
          <Typography variant={optionTextVariant}>{localCurrentValue}</Typography>
        </Select.Value>
        <Select.Icon>
          <SelectToggle />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className={s.selectContent} position={'popper'}>
        {selectItems?.map(el => {
          return (
            <Select.Item className={s.selectItem} key={el} value={el}>
              <Select.ItemText>
                <Typography variant={optionTextVariant}>{el}</Typography>
              </Select.ItemText>
            </Select.Item>
          )
        })}
      </Select.Content>
    </Select.Root>
  )
}
