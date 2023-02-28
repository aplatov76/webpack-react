import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'

import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { Provider } from 'react-redux'
import { store } from 'app/providers/StoreProvider/config/store'
import { StoreProvider } from 'app/providers/StoreProvider'

const container = document.getElementById('root') as Element
const root = createRoot(container)
// <Provider store={store}>
root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
)
