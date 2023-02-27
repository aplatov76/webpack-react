import React, { useCallback, useEffect, useState, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Portal } from 'shared/ui/Portal/ui/Portal'
import cls from './Modal.module.sass'

interface ModalProps {
  classname?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const Modal = ({ classname, children, isOpen, onClose, lazy }: ModalProps) => {
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  }

  const [isMounted, setIsMounted] = useState(false)

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onkeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener('keydown', onkeyDown)
    return (): void => {
      window.removeEventListener('keydown', onkeyDown)
    }
  }, [isOpen, onkeyDown])

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [classname, 'app_modal'])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
