import { type MutableRefObject, useRef, useEffect } from 'react'

export interface UseInfiniteScrollProps {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export function useInfinityScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScrollProps) {
  useEffect(() => {
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0
      }

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          console.log('entry')
          callback()
        }
      }, options)

      observer.observe(triggerRef.current)

      return () => {
        if (observer) {
          observer.unobserve(triggerRef.current)
        }
      }
    }
  }, [triggerRef, wrapperRef])
}