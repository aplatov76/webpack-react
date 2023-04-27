import { type HTMLAttributes, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames'
import cls from './Card.module.sass'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  classname?: string
  theme?: CardTheme
  max?: boolean
}

export const Card = ({ children, classname = '', theme = CardTheme.NORMAL, max, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(cls.Card, { [cls.max]: max }, [classname, cls[theme]])} {...otherProps}>
      {children}
    </div>
  )
}
