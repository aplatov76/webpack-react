import { type CSSProperties } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Skeleton.module.sass'

interface SkeletonProps {
  classname?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = ({ classname, height, width, border }: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border
  }

  return <div className={classNames(cls.Skeleton, {}, [classname])} style={styles}></div>
}
