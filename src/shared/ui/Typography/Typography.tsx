import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T // h1 h2 h3
  className?: string
  color?: 'error' | 'form' | 'inherit' | 'link' | 'primary' | 'secondary' | 'success' | 'tertiary'
  variant?:
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
} & ComponentPropsWithoutRef<T>

// С помощью Omit мы убираем из пропсов переданного компонента все пропсы,
// которые уже есть в наших кастомных пропсах, тем самым избегая коллизий.

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as: Component = 'p', className, color = 'inherit', variant = 'body1', ...rest } = props

  return <Component className={`${variant && s[variant]} ${s[color]}  ${className}`} {...rest} />
}
