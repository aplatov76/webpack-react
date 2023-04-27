import { classNames, type ModsType } from '@/shared/lib/classNames'
import cls from './Text.module.sass'

export enum ThemeText {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

interface TextProps {
  classname?: string
  title?: string
  text?: string
  theme?: ThemeText
  align?: TextAlign
}

export const Text = ({ classname, title, text, theme = ThemeText.PRIMARY, align = TextAlign.LEFT }: TextProps) => {
  const mods: ModsType = {
    [cls[theme]]: true,
    [cls[align]]: true
  }

  return (
    <div className={classNames(cls.Text, mods, [classname])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
