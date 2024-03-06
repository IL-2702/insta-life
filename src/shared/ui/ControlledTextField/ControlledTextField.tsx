import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField } from '@/shared/ui/Textfield'
import { TextFieldProps } from '@/shared/ui/Textfield/TextField'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<TextFieldProps, 'onChange' | 'value'>
export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <TextField {...field} errorMessage={error?.message} {...rest} />
}
