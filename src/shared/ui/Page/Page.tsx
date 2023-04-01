/* eslint-disable react-hooks/rules-of-hooks */
import { type MutableRefObject, useRef, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useInfinityScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import cls from './Page.module.sass'

type PageProps = {
  classname?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const { classname, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  if (onScrollEnd) {
    useInfinityScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd
    })
  }
  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [classname])}>
      {children}
      <div ref={triggerRef}>1</div>
    </section>
  )
}
