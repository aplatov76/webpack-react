/* eslint-disable react/display-name */
import { Currency } from 'entities/Currency'
import React, { memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Select } from 'shared/ui/Select/Select'
import cls from './CurrencySelect.module.sass'

interface CurrecncySelectProps {
  classname?: string
  value?: Currency
  onChange?: (item: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo((props: CurrecncySelectProps) => {
  const { value, onChange, classname, readonly = false } = props

  const onChangeHandler = (value: string) => {
    onChange?.(value as Currency)
  }

  return (
    <Select
      classname={classNames(cls.CurrentSelect, {}, [classname])}
      label="Укажите валюту"
      value={value}
      onChange={onChangeHandler}
      options={options}
      readonly={readonly}
    />
  )
})
