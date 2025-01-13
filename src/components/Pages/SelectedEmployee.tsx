import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Upload,
  Row,
  Col,
  Divider,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./SelectedEmployee.css";

const SelectedEmployee: React.FC = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoUpload = (info: any) => {
    const file = info.file.originFileObj || info.file; // Use the original file object
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result as string); // Set the uploaded photo as a data URL
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="selected-employee-page">
      <Row justify="center" className="employee-container">
        <Col xs={22} sm={20} md={16} lg={14}>
          {/* Employee Header */}
          <Row align="middle" justify="space-between">
            {/* Employee Photo */}
            <Col xs={24} sm={8} className="employee-photo">
              <Upload
                name="avatar"
                showUploadList={false}
                onChange={handlePhotoUpload}
                accept="image/*"
                className="upload-photo"
              >
                {photo ? (
                  <img
                    src={photo}
                    alt="Employee"
                    className="profile-pic"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div className="upload-placeholder">
                    <PlusOutlined />
                    <p>Upload Photo</p>
                  </div>
                )}
              </Upload>
            </Col>

            {/* Employee Basic Info */}
            <Col xs={24} sm={16} className="employee-info">
              <Form layout="vertical">
                <Form.Item label="Emp. ID">
                  <Input required placeholder="12345" />
                </Form.Item>
                <Form.Item label="Emp. Name">
                  <Input required placeholder="John Doe" />
                </Form.Item>
                <Form.Item label="Designation">
                  <Input required placeholder="Software Engineer" />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Divider />

          {/* Other Details */}
          <Row>
            <Col span={24}>
              <h3>Other Details</h3>
              <Form layout="vertical">
                <Form.Item label="Age">
                  <Input required placeholder="30" />
                </Form.Item>
                <Form.Item label="Contact Number">
                  <Input required placeholder="+94 123456789" />
                </Form.Item>
                <Form.Item label="Email Address">
                  <Input required placeholder="example@example.com" />
                </Form.Item>
                <Form.Item label="Home Address">
                  <Input required placeholder="123 Main St, City, Country" />
                </Form.Item>
                <Form.Item label="Basic Salary Amount">
                  <Input required placeholder="$2000" />
                </Form.Item>
                <Form.Item label="Joined Date">
                  <Input required placeholder="2022-01-01" />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Divider />

          {/* Salary Details */}
          <Row>
            <Col span={24}>
              <h3>Salary Detail for This Month</h3>
              <Form layout="vertical">
                <Form.Item label="OT (hours):">
                  <InputNumber min={0} placeholder="0" />
                </Form.Item>
                <Form.Item label="Bonus">
                  <InputNumber min={0} placeholder="$0" />
                </Form.Item>
                <Form.Item label="Net Salary Amount">
                  <Input required placeholder="$2000" />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Divider />

          {/* Action Buttons */}
          <Row justify="end">
            <Space>
              <Button type="primary">Edit</Button>
              <Button danger>Delete</Button>
            </Space>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SelectedEmployee;
