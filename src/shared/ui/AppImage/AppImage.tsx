import { type ImgHTMLAttributes, useState, type ReactNode, useLayoutEffect } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  classname?: string
  fallBack?: ReactNode
  errorFallback?: ReactNode
}

export const AppImage = ({
  classname,
  src,
  alt = 'iamge',
  fallBack = 'laoding...',
  errorFallback = 'error',
  ...otherProps
}: AppImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useLayoutEffect(() => {
    const img = new Image()
    img.src = src ?? ''
    img.onload = () => {
      setIsLoading(false)
    }
    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [src])

  if (isLoading) {
    return <div>{fallBack}</div>
  }

  if (hasError) {
    return <div>{errorFallback}</div>
  }

  return <img className={classname} src={src} alt={alt} {...otherProps} />
}
