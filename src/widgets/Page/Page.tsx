/* eslint-disable react-hooks/rules-of-hooks */
import { type MutableRefObject, useRef, type ReactNode, type UIEvent } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfinityScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { actions as uiActions } from '@/features/UI/model/slices/UI.slice'
import cls from './Page.module.sass'
import { useLocation } from 'react-router-dom'
import { useInitialEffects } from '@/shared/lib/hooks/useInitialEffects/useInitialEffects'
import { useSelector } from 'react-redux'
import { getUiScrollByPath } from '@/features/UI/model/selectors/ui.selectors'
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { useThrottling } from '@/shared/lib/hooks/useThrottling/useThrottling'

type PageProps = {
  classname?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const { classname, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getUiScrollByPath(state, pathname))
  if (onScrollEnd) {
    useInfinityScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd
    })
  }

  useInitialEffects(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottling((e: UIEvent<HTMLDivElement>) => {
    console.log('e: ', e)
    dispatch(uiActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }))
  }, 300)

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [classname])} onScroll={onScroll}>
      {children}

      <div className={cls.trigger} ref={triggerRef} />
    </section>
  )
}
