import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

interface Props {
  children?: React.ReactNode
}

export const PublicLayout = ({ children, ...restProps }: Props): JSX.Element => {
  return (
    <Layout>
      {/* <Header style={{ display:'flex', position: 'fixed', zIndex: 1, width: '100%', height: 55, padding: 10, background: '#fefefe', boxShadow: '0px 2px 3px 1px rgba(0,0,0,.1)' }}>
        <div style={{ minWidth: '180px', padding: 20, lineHeight: 0, fontSize: '20px', display: 'inline-block' }}>Page name</div>
        <Search style={{borderRadius: '50px', width: 700}}
          placeholder="input search text"
          size="middle"
          suffix={suffix}
          {...restProps}
        />
      </Header> */}
      {/* <Layout> */}
      {/* <Content style={{paddingTop: 55, paddingLeft: 200}}>{children}</Content> */}
      <Content>{children}</Content>

      {/* </Layout> */}
      {/* <Footer>Copyright: <a href={'#'}>copyright.com</a></Footer> */}
    </Layout>
  )
}

export default PublicLayout
