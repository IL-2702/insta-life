import React, { ReactElement, useState } from 'react'

import { SelectToggle } from '@/shared/assets/icons/SelectToggle'
import { Typography } from '@/shared/ui/Typography'
import * as Select from '@radix-ui/react-select'

import s from './Select.module.scss'

type LanguageSelectItem = {
  icon: ReactElement
  title: string
}

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
  selectItems: Array<LanguageSelectItem>
  values?: Array<string>
}

export const SelectComponent = ({
  currentValue,
  fullWidth,
  onValueChange,
  optionTextVariant = 'regular14',
  selectItems,
}: SelectPropsType) => {
  const [value, setValue] = useState(selectItems[0].title)
  const localCurrentValue = currentValue ? currentValue : value
  const localOnValueChange = onValueChange ? onValueChange : setValue

  return (
    <Select.Root onValueChange={localOnValueChange} value={localCurrentValue}>
      <Select.Trigger
        className={`${s.selectTrigger} ${fullWidth ? s.fullWidth : ''}`}
        value={localCurrentValue}
      >
        <Select.Icon>{selectItems[0].icon}</Select.Icon>
        <Select.Value />
        {/*<Typography variant={optionTextVariant}>{localCurrentValue}</Typography>*/}
        <Select.Icon>
          <SelectToggle />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className={s.selectContent} position={'popper'}>
        {selectItems?.map(el => {
          return (
            <Select.Item className={s.selectItem} key={el.title} value={el.title}>
              <Select.Icon>{el.icon}</Select.Icon>
              <Select.ItemText>
                <Typography variant={optionTextVariant}>{el.title}</Typography>
              </Select.ItemText>
            </Select.Item>
          )
        })}
      </Select.Content>
    </Select.Root>
  )
}
