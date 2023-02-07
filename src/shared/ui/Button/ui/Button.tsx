import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Button.module.sass'

export enum ThemeButton {
  CLEAR = 'clear'
}

type ButtonProps = {
  className?: string
  children: ReactNode
  theme?: ThemeButton
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const { className = '', children, theme = ThemeButton.CLEAR, ...otherProps } = props

  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
