import React, { type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { Overlay } from '@/shared/ui/Overlay'
import { Portal } from '@/shared/ui/Portal'
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

  const { isMounted, close, onContentClick } = useModal({ onClose, isOpen })

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [classname, 'app_modal'])}>
        <Overlay onClick={close} />
        <div className={cls.overlay} onClick={close}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
