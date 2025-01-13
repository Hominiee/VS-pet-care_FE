import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
  Upload,
  Row,
  Col,
  Space,
  Divider,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Modal_for_a_New_Employee.css";

const { TextArea } = Input;

const ModalForANewEmployee: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="new-employee-form">
      <Row justify="center" style={{ padding: "20px" }}>
        <Col xs={22} sm={20} md={16} lg={12}>
          <Form
            name="newEmployee"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {/* Upload Profile Picture */}
            <Form.Item label=" " colon={false}>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>

            {/* Name */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input the name!" }]}
            >
              <Input />
            </Form.Item>

            {/* Designation */}
            <Form.Item
              label="Designation"
              name="designation"
              rules={[
                { required: true, message: "Please input the designation!" },
              ]}
            >
              <Input />
            </Form.Item>

            {/* Age */}
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: "Please input the age!" }]}
            >
              <InputNumber min={18} max={60} style={{ width: "100%" }} />
            </Form.Item>

            {/* Contact Number */}
            <Form.Item
              label="Contact Number"
              name="contactNumber"
              rules={[
                {
                  required: true,
                  message: "Please input the contact number!",
                },
              ]}
            >
              <Space.Compact>
                <Input style={{ width: "20%" }} defaultValue="+94" />
                <Input style={{ width: "80%" }} />
              </Space.Compact>
            </Form.Item>

            {/* Email Address */}
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input a valid email address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* Home Address */}
            <Form.Item
              label="Home Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input the home address!",
                },
              ]}
            >
              <TextArea rows={2} placeholder="Enter residential address" />
            </Form.Item>

            {/* Basic Salary */}
            <Form.Item
              label="Basic Salary Amount"
              name="salary"
              rules={[
                {
                  required: true,
                  message: "Please input the basic salary amount!",
                },
              ]}
            >
              <InputNumber
                prefix="$"
                style={{ width: "100%" }}
                min={0}
                step={100}
              />
            </Form.Item>

            {/* Joined Date */}
            <Form.Item
              label="Joined Date"
              name="joinedDate"
              rules={[
                {
                  required: true,
                  message: "Please select the joined date!",
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Divider />

            {/* Action Buttons */}
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Add
                </Button>
                <Button htmlType="button">Cancel</Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ModalForANewEmployee;
