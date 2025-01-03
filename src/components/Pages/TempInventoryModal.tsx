import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
    Space,
    Button,
    message,
} from 'antd';
import type { InputNumberProps } from 'antd';

const normFile = (e: any) => {
    if (Array.isArray(e)) {
    return e;
    }
    return e?.fileList;
};

const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };

const TempInventoryModal: React.FC = () => {

    const onFinish = () => {
        message.success('Added successfully!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    return (
    <>
        <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 5 }}
        layout="horizontal"
        style={{ maxWidth: '100%' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
            <br/>
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
                <Select.Option value="demo">Medicine</Select.Option>
                <Select.Option value="demo">Petware</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Price">
                <Space>
                    <InputNumber<number>
                    style={{ width: 90 }}
                    defaultValue={0.00}
                    min={0}
                    max={100000}
                    formatter={(value) => `${value}/-`}
                    parser={(value) => value?.replace('/-', '') as unknown as number}
                    onChange={onChange}
                    />
                </Space>
            </Form.Item>

            <Form.Item label="Quantity">
                <Space>  
                    <InputNumber style={{ width: 90 }} min={0} max={1000} defaultValue={0} />
                    </Space>
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

export default TempInventoryModal;