import { ChangeEvent, useRef } from 'react'
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Button } from '@/shared/ui/Button'
import { ButtonProps } from '@/shared/ui/Button/Button'

export const ControlledFileUploader = <T extends FieldValues>({
  children,
  className,
  control,
  extraActions,
  name,
  ...restProps
}: Props<T>) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    field: { onChange },
  } = useController({
    control,
    name,
  })
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files?.[0])
    extraActions?.(name)
  }

  return (
    <>
      <Button
        className={className}
        onClick={() => inputRef?.current?.click()}
        variant={'primary'}
        {...restProps}
      >
        {children ?? 'Edit'}
      </Button>
      <input
        accept={'image/png, image/jpeg, image/jpg'}
        name={name}
        onChange={changeHandler}
        ref={inputRef}
        style={{ display: 'none' }}
        type={'file'}
      />
    </>
  )
}

type Props<T extends FieldValues> = {
  control: Control<T>
  extraActions?: (inputName: string) => void
  name: FieldPath<T>
} & Omit<ButtonProps, 'onClick' | 'type'>
