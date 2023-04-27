/* eslint-disable react/display-name */
import { memo, type ReactNode } from 'react'
import { type LinkProps, Link } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames'
import cls from './AppLink.module.sass'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

type AppLinkProps = {
  to: string
  className?: string
  children: ReactNode
  theme?: AppLinkTheme
} & LinkProps

export const AppLink = memo(
  ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps }: AppLinkProps) => {
    return (
      <Link className={classNames(className, {}, [cls.AppLink, cls[theme]])} to={to} {...otherProps}>
        {children}
      </Link>
    )
  }
)
