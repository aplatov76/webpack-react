/* eslint-disable react/display-name */
import { type ButtonHTMLAttributes, type ReactNode, memo } from 'react'
import { classNames, type ModsType } from 'shared/lib/classNames'
import cls from './Button.module.sass'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
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

export const Button = memo((props: ButtonProps) => {
  const { className = '', children, theme = ThemeButton.CLEAR, square, size, ...otherProps } = props
  let mods: ModsType = {
    [cls[theme]]: true,
    [cls.Square]: square
  }

  if (size) {
    mods = { ...mods, [cls[size]]: true }
  }

  return (
    <button className={classNames(cls.Button, mods, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  )
})
