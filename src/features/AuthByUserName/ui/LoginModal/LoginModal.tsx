import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Modal } from 'shared/ui'
import { Spinner } from 'shared/ui/Spinner'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import cls from './LoginModal.module.sass'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal lazy={true} isOpen={isOpen} onClose={onClose} classname={classNames(cls.LoginModal, {}, [className])}>
      <Suspense fallback={<Spinner />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
