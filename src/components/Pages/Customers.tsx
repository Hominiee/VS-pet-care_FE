import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const Customer: React.FC = () => {
  const CardDescriptionDiv: React.CSSProperties = {
    marginTop: '10px'
  };

  return (
    <>
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
    <Meta
      title="Pet ID :"
      description={
      <>
        <div style={CardDescriptionDiv}>Pet Name :</div>
        <div style={CardDescriptionDiv}>Pet type :</div>
        <div style={CardDescriptionDiv}>Pet Breed :</div>
      </>
      }
    />
  </Card>
  </>
  );
};

export default Customer;
