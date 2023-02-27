import { classNames } from 'shared/lib/classNames'
import cls from './Text.module.sass'

export enum ThemeText {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: ThemeText
}

export const Text = ({ className, title, text, theme = ThemeText.PRIMARY }: TextProps) => {
  return (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
