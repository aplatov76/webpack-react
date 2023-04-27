import React, { type CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import cls from './Avatar.module.sass'

interface AvatarPropsInterface {
  classname?: string
  src?: string
  size?: number
}

export const Avatar = (props: AvatarPropsInterface) => {
  const styles = useMemo<CSSProperties>(() => ({ width: props.size ?? 100, height: props.size ?? 100 }), [props.size])

  return <img src={props.src} style={styles} className={classNames(cls.Avatar, {}, [props.classname])} />
}
