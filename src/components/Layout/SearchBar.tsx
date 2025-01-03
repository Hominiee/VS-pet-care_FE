import React from 'react'
import { Flex, Layout, Tooltip } from 'antd';
import { Input } from 'antd';
import type { GetProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './SearchBar.css'
import { Col, Row } from 'antd';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#ffffff',
};

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


export default function SearchBar() {
  return (
    <div>
        <Flex gap="middle" wrap>
            <Layout>
                <Header style={headerStyle}>
                    <Row>
                        <Col span={8}>
                        </Col>
                        <Col span={8}>
                        <Tooltip title="Search">
                            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 300 , marginTop: 20 }} />
                        </Tooltip>
                        </Col>
                        <Col className='AddButtonCol' span={8}>
                            <Tooltip title="Add">
                                <Button shape="circle" icon={<PlusOutlined />} />
                            </Tooltip>
                        </Col>
                    </Row>
                </Header>
            </Layout>
        </Flex>
    </div>
  )
}
