import React, { ComponentPropsWithoutRef, FC, KeyboardEvent, ReactNode, useState } from 'react'

import { Close } from '@/shared/assets/icons/Close'
import { Eye } from '@/shared/assets/icons/Eye'
import { Search } from '@/shared/assets/icons/SearchOutline'
import { VisibilityOff } from '@/shared/assets/icons/VisibilityOff'
import { Typography } from '@/shared/ui/Typography'
import * as Label from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './TextField.module.scss'

export type TextFieldProps = {
  className?: string
  errorMessage?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: string
  onClearValue?: () => void
  // eslint-disable-next-line no-unused-vars
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField: FC<TextFieldProps> = ({
  className,
  disabled,
  errorMessage,
  iconEnd,
  iconStart,
  label,
  onClearValue,
  onEnter,
  onKeyDown,
  type,
  value,
  ...rest
}) => {
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const showError = errorMessage && errorMessage.length > 0

  if (type === 'search') {
    iconStart = <Search />
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }
  const handleDoubleClick = () => {
    if (inputRef) {
      inputRef.select()
    }
  }
  const classNames = {
    iconButton: clsx(s.iconButton, disabled && s.disabled),
    iconStart: clsx(s.iconStart),
    input: clsx(s.input, showError && s.error),
    root: clsx(s.root, className),
  }
  const showClearValueIcon = !iconEnd && !showError && onClearValue && value?.length! > 0
  const dataIconStart = iconStart ? 'start' : ''
  const dataIconEnd = iconEnd || showClearValueIcon ? 'end' : ''
  const dataIcon = dataIconStart + dataIconEnd
  const onClickShowValue = () => {
    if (!disabled) {
      setShowPassword(!showPassword)
    }
  }

  return (
    <div className={classNames.root}>
      <Label.Root>
        <Typography color={'form'} variant={'regular14'}>
          {label}
        </Typography>
        <div className={s.inputContainer}>
          {iconStart && <span className={s.iconStart}>{iconStart}</span>}
          <input
            className={classNames.input}
            data-icon={dataIcon}
            disabled={disabled}
            onDoubleClick={handleDoubleClick}
            onKeyDown={handleKeyDown}
            ref={ref => setInputRef(ref)}
            type={showPassword ? 'text' : type}
            value={value}
            {...rest}
          />

          {type === 'password' && (
            <button
              className={classNames.iconButton}
              onClick={onClickShowValue}
              tabIndex={-1}
              type={'button'}
            >
              {!showPassword ? <Eye /> : <VisibilityOff />}
            </button>
          )}

          {showClearValueIcon && (
            <button className={classNames.iconButton} onClick={onClearValue} type={'button'}>
              {<Close />}
            </button>
          )}

          {iconEnd && <span className={s.iconEnd}>{iconEnd}</span>}
        </div>
      </Label.Root>
      {showError && (
        <Typography color={'error'} variant={'error'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
