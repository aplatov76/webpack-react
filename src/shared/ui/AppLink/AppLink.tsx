import { type ReactNode } from 'react'
import { type LinkProps, Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import cls from './AppLink.module.sass'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

type AppLinkProps = {
  className?: string
  children: ReactNode
  theme?: AppLinkTheme
} & LinkProps

export const AppLink = ({ className, children, to, theme = AppLinkTheme.PRIMARY }: AppLinkProps) => {
  return (
    <Link className={classNames(className, {}, [cls.AppLink, cls[theme]])} to={to}>
      {children}
    </Link>
  )
}
