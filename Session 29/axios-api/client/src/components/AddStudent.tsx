import { useState } from "react";
import { createStudent } from "../api/studentApi";
import { Form, Input, Button, message } from "antd";

const AddStudent = ({ onSuccess }: { onSuccess: () => void }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const newStudent = {
      ...values,
      status: true,
      created_at: new Date().toISOString(),
    };

    const result = await createStudent(newStudent);
    setLoading(false);

    if (result) {
      message.success("Thêm sinh viên thành công!");
      onSuccess();
    } else {
      message.error("Thêm thất bại!");
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Tên sinh viên"
        name="student_name"
        rules={[{ required: true, message: "Nhập tên sinh viên" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: "email", message: "Email không hợp lệ" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Địa chỉ" name="address">
        <Input />
      </Form.Item>
      <Form.Item label="Số điện thoại" name="phone">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Thêm sinh viên
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddStudent;
