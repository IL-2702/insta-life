import { FC } from 'react'

import { Typography } from '@/shared/ui/Typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './Checkbox.module.scss'

import { CheckIcon } from '../../assets/icons/CheckIcon'

export type CheckboxPropsType = {
  checked: boolean | string
  className?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void
  required?: boolean
}

export const Checkbox: FC<CheckboxPropsType> = ({
  checked,
  disabled,
  errorMessage,
  label,
  onChange,
  required,
}) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: s.container,
    indicator: clsx(s.indicator, disabled && s.disabled),
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root, checked && s.checked, disabled && s.disabled),
  }

  return (
    <>
      <Typography>{label}</Typography>
      <div className={classNames.buttonWrapper}>
        <CheckboxRadix.Root
          checked={Boolean(checked)}
          className={classNames.root}
          disabled={disabled}
          onCheckedChange={onChange}
          required={required}
        >
          {checked && (
            <CheckboxRadix.Indicator className={classNames.indicator}>
              <CheckIcon color={disabled ? 'var(--color-light-700' : 'black'} />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
      </div>
      {errorMessage && (
        <Typography color={'error'} variant={'error'}>
          {errorMessage}
        </Typography>
      )}
    </>
  )
}
