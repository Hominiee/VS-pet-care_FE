import { Card, Checkbox, Space, InputNumber, Badge, Divider } from 'antd';
import React, { useState } from 'react';
import type { InputNumberProps } from 'antd';

const { Meta } = Card;

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const Inventory: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  const CardDescriptionDiv: React.CSSProperties = {
    marginTop: '10px'
  };

  const h4_Style: React.CSSProperties = {
    marginLeft: '20px',
    lineHeight: '4px',
    color: 'rgba(0, 0, 0, 0.200)',
    fontWeight: 450,
  };

  
  return (
    <>
    <div>
      <h4 style={h4_Style}>Low Stock</h4>
      <Card
        hoverable={true}
        style={{ width: 300, marginLeft: 30, marginTop: 30 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Badge status="success" />
        <Meta
          title="Item ID :"
          description={
            <>
              <div style={CardDescriptionDiv}>Item Name :</div>
              <div style={CardDescriptionDiv}>
                <Space>Item Price :
                <InputNumber<number>
                  style={{ width: 90 }}
                  defaultValue={0.00}
                  min={0}
                  max={100000}
                  formatter={(value) => `${value}/-`}
                  parser={(value) => value?.replace('/-', '') as unknown as number}
                  onChange={onChange}
                  disabled={disabled}
                />
                </Space>
              </div>
              <div style={CardDescriptionDiv}>
                <Space>Quantity :  
                  <InputNumber style={{ width: 90 }} min={0} max={1000} disabled={disabled} defaultValue={0} />
                </Space>
              </div>  
              <div style={{ marginTop: 20 }}>
                <Checkbox onClick={toggle} >
                  Change Data
                </Checkbox>
              </div>
            </>
          }
        />
      </Card>
      </div>

      <Divider />

      <div>
      <h4 style={h4_Style}>Medicines</h4>
      <Card
        hoverable={true}
        style={{ width: 300, marginLeft: 30, marginTop: 30 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Badge status="success" />
        <Meta
          title="Item ID :"
          description={
            <>
              <div style={CardDescriptionDiv}>Item Name :</div>
              <div style={CardDescriptionDiv}>
                <Space>Item Price :
                <InputNumber<number>
                  style={{ width: 90 }}
                  defaultValue={0.00}
                  min={0}
                  max={100000}
                  formatter={(value) => `${value}/-`}
                  parser={(value) => value?.replace('/-', '') as unknown as number}
                  onChange={onChange}
                  disabled={disabled}
                />
                </Space>
              </div>
              <div style={CardDescriptionDiv}>
                <Space>Quantity :  
                  <InputNumber style={{ width: 90 }} min={0} max={1000} disabled={disabled} defaultValue={0} />
                </Space>
              </div>  
              <div style={{ marginTop: 20 }}>
                <Checkbox onClick={toggle} >
                  Change Data
                </Checkbox>
              </div>
            </>
          }
        />
      </Card>
      </div>

      <Divider />

      <div>
      <h4 style={h4_Style}>Petware</h4>
      <Card
        hoverable={true}
        style={{ width: 300, marginLeft: 30, marginTop: 30 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Badge status="success" />
        <Meta
          title="Item ID :"
          description={
            <>
              <div style={CardDescriptionDiv}>Item Name :</div>
              <div style={CardDescriptionDiv}>
                <Space>Item Price :
                <InputNumber<number>
                  style={{ width: 90 }}
                  defaultValue={0.00}
                  min={0}
                  max={100000}
                  formatter={(value) => `${value}/-`}
                  parser={(value) => value?.replace('/-', '') as unknown as number}
                  onChange={onChange}
                  disabled={disabled}
                />
                </Space>
              </div>
              <div style={CardDescriptionDiv}>
                <Space>Quantity :  
                  <InputNumber style={{ width: 90 }} min={0} max={1000} disabled={disabled} defaultValue={0} />
                </Space>
              </div>  
              <div style={{ marginTop: 20 }}>
                <Checkbox onClick={toggle} >
                  Change Data
                </Checkbox>
              </div>
            </>
          }
        />
      </Card>
      <br/>
      </div>
    </>
  );
};

export default Inventory;
