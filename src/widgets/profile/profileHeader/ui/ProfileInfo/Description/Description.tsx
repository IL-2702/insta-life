import { Typography } from '@/shared/ui/Typography'

import s from './Description.module.scss'

export const Description = ({ text }: Props) => {
  const descriptionText = text
    ? text
    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <Typography className={s.text} variant={'regular16'}>
      {descriptionText}
    </Typography>
  )
}

type Props = {
  text?: string
}
