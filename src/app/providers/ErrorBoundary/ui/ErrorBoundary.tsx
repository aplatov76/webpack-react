import { type ReactNode, type ErrorInfo, Suspense } from 'react'
import { Component } from 'react'
import { ErrorPage } from 'widgets/ErrorPage/'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state
    if (hasError) {
      // You can render any custom fallback UI
      // export default withTranslation()(ErrorBoundary)
      return (
        <Suspense fallback="">
          <ErrorPage />
        </Suspense>
      )
    }

    return this.props.children
  }
}
