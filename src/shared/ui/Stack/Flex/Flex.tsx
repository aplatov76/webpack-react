import { memo, type ReactNode } from 'react'
import { classNames, type ModsType } from '@/shared/lib/classNames'
import cls from './Flex.module.sass'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '10' | '12'

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  10: cls.gap10,
  12: cls.gap12
}

export interface FlexProps {
  classname?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: FlexGap
  max?: boolean
}

export const Flex = memo((props: FlexProps) => {
  const { classname, children, justify = 'start', align = 'center', direction = 'row', gap = '4', max = true } = props
  const classes = [
    classname,
    directionClasses[direction],
    alignClasses[align],
    justifyClasses[justify],
    gap && gapClasses[gap]
  ]

  const mods: ModsType = {
    [cls.max]: max
  }

  return <div className={classNames(cls.Flex, { ...mods }, classes)}>{children}</div>
})
