/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { classNames, type ModsType } from '@/shared/lib/classNames'
import { memo, type ReactNode, useMemo, type ChangeEvent } from 'react'
import cls from './Select.module.sass'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectPropsInterface<T extends string> {
  classname?: string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}
// 52.50
export const Select = <T extends string>(props: SelectPropsInterface<T>) => {
  const { classname, label, options, onChange, value, readonly } = props
  const mods: ModsType = {}

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }

  const optionList = useMemo<ReactNode>(() => {
    return options?.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.content}
      </option>
    ))
  }, [options])

  return (
    <div className={classNames(cls.Wrapper, {}, [classname])}>
      {label && <span className={cls.label}>{label}</span>}
      <select value={value} onChange={onChangeHandler} className={cls.select} disabled={readonly}>
        {optionList}
      </select>
    </div>
  )
}
