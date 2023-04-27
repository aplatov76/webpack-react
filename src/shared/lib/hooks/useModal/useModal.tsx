/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable webpack-project-plugin/path-checker */
import React, { useCallback, useEffect, useState } from 'react'

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
}

export function useModal({ onClose, isOpen }: UseModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  const close = useCallback(() => {
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
        close()
      }
    },
    [close]
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

  return { isMounted, close, onContentClick }
}
