import { type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.sass'
import pls from '../styles/popup.module.sass'
import { classNames, ModsType } from '@/shared/lib/classNames'
import { Button } from '@/shared/ui/Button'
import { HStack } from '../../../Stack/HStack/HStack'
import { type DropDownDirection } from '@/shared/types/ui'
import { mapDirectionClass } from '../styles/consts'

interface ListBoxItem {
  value: string
  content: ReactNode
  unavailable?: boolean
}

interface ListBoxProps {
  items: ListBoxItem[]
  classname?: string
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  direction?: DropDownDirection
  label?: string
}

export function MyListbox(props: ListBoxProps) {
  const { classname, items, value, defaultValue, onChange, direction = 'bottom left', label } = props
  // const [selectedPerson, setSelectedPerson] = useState(people[0])

  const optionsMods = [mapDirectionClass[direction]]

  return (
    <HStack gap={'4'}>
      {label && <span className={cls.label}>{label}</span>}
      <HListBox as="div" className={classNames(pls.popup, {}, [classname])} value={value} onChange={onChange}>
        <HListBox.Button>
          <div>{value ?? defaultValue}</div>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsMods)} style={{ width: '100%' }}>
          {items.map((item) => (
            <HListBox.Option key={item.value} value={item.value} disabled={item.unavailable}>
              {({ active, selected }) => (
                <div className={classNames(cls.item, { [pls.active]: active, [cls.unavailable]: item.unavailable })}>
                  {selected && '!!!'} {item.content}
                </div>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}
