import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb } from 'antd'
// css
import '../static/style/pages/index.css'
//组件
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
const MyList = () => {
  const [mylist, setmylist] = useState(
    [
      { title: '测试代码', context: '测试代码' },
      { title: '测试代码', context: '测试代码' }
    ]
  )

  return (
    <div>
      <Head>
        <title>Mylist教程</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div className="bread-div">
                <Breadcrumb>
                    <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/lit">Mylist教程</a></Breadcrumb.Item>
                </Breadcrumb>
            </div>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                    <span><Icon type="calendar" />2019-06-28</span>
                    <span><Icon type="folder" />测试教程</span>
                    <span><Icon type="fire" />5864人</span>
                </div>
                
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
         <Author />
         <Advert />
      </Col>
      </Row>
      <Footer />

    </div>
  )
}



export default MyList