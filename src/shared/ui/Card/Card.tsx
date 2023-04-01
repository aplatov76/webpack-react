import { type HTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Card.module.sass'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  classname?: string
}

export const Card = ({ children, classname = '', ...otherProps }: CardProps) => {
  return <div className={classNames(cls.Card, {}, [cls[classname]])}>{children}</div>
}
