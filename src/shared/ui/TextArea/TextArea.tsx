import React, { ComponentProps, FC, KeyboardEvent } from 'react'

import { Typography } from '@/shared/ui/Typography'
import * as Label from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './TextArea.module.scss'

export type TextAreaFieldProps = {
  autofocus?: boolean
  className?: string
  cols?: number
  disabled?: boolean
  errorMessage?: string
  form?: number | string
  label?: string
  maxlength?: number
  onClearValue?: () => void
  // eslint-disable-next-line no-unused-vars
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  readonly?: boolean
  required?: boolean
  rows?: number
  value?: string
} & ComponentProps<'textarea'>

export const TextArea: FC<TextAreaFieldProps> = ({
  // onClearValue,
  className,
  disabled,
  errorMessage,
  label,
  maxLength = 501,
  onKeyDown,
  value,
  ...rest
}) => {
  const showError = errorMessage && errorMessage.length > 0

  const classNames = {
    iconButton: clsx(s.iconButton, disabled && s.disabled),
    iconStart: clsx(s.iconStart),
    root: clsx(s.root, className),
    textarea: clsx(s.textarea, showError && s.error),
  }

  return (
    <div className={classNames.root}>
      <Label.Root>
        <Typography className={s.errorLabelText} color={'form'} variant={'regular14'}>
          {label}
        </Typography>
        <div className={s.textAreaContainer}>
          <textarea
            className={classNames.textarea}
            disabled={disabled}
            maxLength={maxLength}
            onKeyDown={onKeyDown}
            value={value}
            {...rest}
          />
        </div>
      </Label.Root>
      {showError && (
        <Typography className={s.errorMessageText} color={'error'} variant={'error'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
