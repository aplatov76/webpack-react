import { type MutableRefObject, useRef, useEffect } from 'react'

export interface UseInfiniteScrollProps {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export function useInfinityScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScrollProps) {
  useEffect(() => {
    const clonetriggerRef = triggerRef.current
    const clonewrapperRef = wrapperRef.current
    if (callback) {
      const options = {
        root: clonewrapperRef,
        rootMargin: '0px',
        threshold: 1.0
      }

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          console.log('entry')
          callback()
        }
      }, options)

      observer.observe(clonetriggerRef)

      return () => {
        if (observer) {
          observer.unobserve(clonetriggerRef)
        }
      }
    }
  }, [triggerRef, wrapperRef])
}
