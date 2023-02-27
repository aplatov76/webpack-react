import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Button.module.sass'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

type ButtonProps = {
  className?: string
  children: ReactNode
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const { className = '', children, theme = ThemeButton.CLEAR, square, size, ...otherProps } = props

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.Square]: square,
    [cls[size]]: !!size
  }

  return (
    <button className={classNames(cls.Button, mods, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
