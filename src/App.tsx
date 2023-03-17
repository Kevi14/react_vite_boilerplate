import { BrowserRouter } from 'react-router-dom'

import { ConfigProvider, theme } from 'antd'
import { Navigator } from './navigator'

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
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
      {/* </Suspense> */}
    </ConfigProvider>
  )
}

export default App
