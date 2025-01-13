import React, { useState } from "react";
import { Card, Row, Col, Input, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Employees.css";

interface Employee {
  id: number;
  name: string;
  designation: string;
  photo: string | ArrayBuffer | null;
}

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: "John Doe", designation: "Software Engineer", photo: null },
    { id: 2, name: "Jane Smith", designation: "Project Manager", photo: null },
    { id: 3, name: "Alice Johnson", designation: "QA Analyst", photo: null },
    { id: 4, name: "Robert Brown", designation: "UI/UX Designer", photo: null },
    { id: 5, name: "Chris Evans", designation: "Team Lead", photo: null },
    { id: 6, name: "Emma Wilson", designation: "DevOps Engineer", photo: null },
  ]);

  const handlePhotoUpload = (info: any, employeeId: number) => {
    const file = info.file.originFileObj || info.file;

    if (!file) {
      message.error("File upload failed!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === employeeId ? { ...emp, photo: reader.result } : emp
        )
      );
    };
    reader.readAsDataURL(file);
  };

  const handleFieldChange = (
    employeeId: number,
    fieldName: "name" | "designation",
    value: string
  ) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId ? { ...emp, [fieldName]: value } : emp
      )
    );
  };

  return (
    <div className="employees-page">
      <Row gutter={[16, 16]} justify="center">
        {employees.map((employee) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            key={employee.id}
            className="employee-card-container"
          >
            <Card className="employee-card">
              <div className="employee-photo">
                <Upload
                  name="photo"
                  showUploadList={false}
                  onChange={(info) => handlePhotoUpload(info, employee.id)}
                  accept="image/*"
                >
                  {employee.photo ? (
                    <img
                      src={employee.photo as string}
                      alt="Employee"
                      className="profile-pic"
                    />
                  ) : (
                    <div className="upload-placeholder">
                      <PlusOutlined />
                      <p>Upload Photo</p>
                    </div>
                  )}
                </Upload>
              </div>
              <div className="employee-details">
                <p>
                  <strong>Emp.ID:</strong> {employee.id}
                </p>
                <p>
                  <strong>Name:</strong>
                  <Input
                    value={employee.name}
                    onChange={(e) =>
                      handleFieldChange(employee.id, "name", e.target.value)
                    }
                    placeholder="Enter name"
                  />
                </p>
                <p>
                  <strong>Designation:</strong>
                  <Input
                    value={employee.designation}
                    onChange={(e) =>
                      handleFieldChange(employee.id, "designation", e.target.value)
                    }
                    placeholder="Enter designation"
                  />
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Employees;
