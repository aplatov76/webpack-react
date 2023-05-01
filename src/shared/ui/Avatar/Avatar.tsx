import React, { type CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import cls from './Avatar.module.sass'
import { AppImage } from '../AppImage/AppImage'
import { Skeleton } from '../'
import UserIcon from '@/shared/assets/icons/user-filled.svg'
import { Icon } from '../Icon'

interface AvatarPropsInterface {
  classname?: string
  src?: string
  size?: number
}

export const Avatar = (props: AvatarPropsInterface) => {
  const styles = useMemo<CSSProperties>(() => ({ width: props.size ?? 100, height: props.size ?? 100 }), [props.size])

  return (
    <AppImage
      src={props.src}
      style={styles}
      className={classNames(cls.Avatar, {}, [props.classname])}
      fallBack={<Skeleton width={100} height={100} border={'50%'} />}
      errorFallback={<Icon Svg={UserIcon} width={100} height={100} />}
    />
  )
}
