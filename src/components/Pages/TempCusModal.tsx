import { PlusOutlined } from '@ant-design/icons';
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Upload,
  Space,
  Divider,
  Button,
  message,
} from 'antd';

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const TempCusModal: React.FC = () => {

const h4_Style: React.CSSProperties = {
  marginLeft: '20px',
  lineHeight: '4px',
  color: 'rgba(0, 0, 0, 0.200)',
  fontWeight: 450,
};

const onFinish = () => {
  message.success('Added successfully!');
};

const onFinishFailed = () => {
  message.error('Submit failed!');
};

  return (
    <>
     
      <Form
        
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 7 }}
        layout="horizontal"
        style={{ maxWidth: '100%' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >



      <h4 style={h4_Style}>Owner Details</h4>

        <Form.Item label="Name :">
          <Input />
        </Form.Item>
        <Form.Item label="Number :">
          <Space.Compact>
            <Input style={{ width: '15%' }} defaultValue="+94" />
            <Input style={{ width: '60%' }} />
          </Space.Compact>
        </Form.Item>
        <Form.Item label="Address :">
          <TextArea placeholder="Permanent residential address" autoSize />
        </Form.Item>

        <Divider />

        <h4 style={h4_Style}>Pet Details</h4>
        
        <Form.Item label="Photo :" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Name :">
          <Input />
        </Form.Item>
        <Form.Item label="Type">
          <Select>
            <Select.Option value="demo">Cow</Select.Option>
            <Select.Option value="demo">Cat</Select.Option>
            <Select.Option value="demo">Bird</Select.Option>
            <Select.Option value="demo">Dog</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Breed :">
          <Input />
        </Form.Item>
        <Form.Item label="Gender :">
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Birthday :">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Age :">
          <InputNumber />
        </Form.Item>
        <Form.Item  label="Last vaccine given :" >
          <TextArea placeholder="If any" autoSize />
        </Form.Item>
        <Form.Item label="Special Note :">
          <TextArea placeholder="If any" autoSize />
        </Form.Item>
        <Form.Item label=" ">
          <Space>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
            <Button htmlType="button">
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default TempCusModal;