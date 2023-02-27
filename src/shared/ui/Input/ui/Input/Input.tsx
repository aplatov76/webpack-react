/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, type InputHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Input.module.sass'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  classname?: string
  value?: string
  type?: 'text' | 'data' | 'number' | 'password'
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const { classname, value, onChange, type = 'text', ...otherProps } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.Input, {}, [classname])}>
      <input type={type} value={value} onChange={onChangeHandler} {...otherProps} />
    </div>
  )
})
