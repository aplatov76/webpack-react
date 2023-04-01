import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Code.module.sass'
import { Button } from 'shared/ui'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'

interface CodeProps {
  classname?: string
  children: string
}

export const Code = memo(({ children }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(children)
  }, [children])

  return (
    <pre className={classNames(cls.Code)}>
      <Button onClick={onCopy}>
        <Icon classname={cls.CopyBtn} Svg={CopyIcon} />
      </Button>

      <code>{children}</code>
    </pre>
  )
})
