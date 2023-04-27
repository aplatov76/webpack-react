/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, type InputHTMLAttributes } from 'react'
import { classNames, type ModsType } from '@/shared/lib/classNames'
import cls from './Input.module.sass'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  classname?: string
  value?: string | number
  type?: 'text' | 'data' | 'number' | 'password'
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const { classname, value, onChange, type = 'text', readonly = false, ...otherProps } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: ModsType = {
    [cls.readonly]: readonly
  }

  return (
    <div className={classNames(cls.Input, mods, [classname])}>
      <input type={type} value={value} onChange={onChangeHandler} readOnly={readonly} {...otherProps} />
    </div>
  )
})
