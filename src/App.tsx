import { BrowserRouter } from 'react-router-dom'
import { Navigator } from './navigator'
import { ConfigProvider, theme } from 'antd'
import { Suspense } from 'react'

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#3d7cef',
        },
      }}
    >
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Navigator />
          </BrowserRouter>
        </Suspense>
      </div>
    </ConfigProvider>
  )
}

export default App
