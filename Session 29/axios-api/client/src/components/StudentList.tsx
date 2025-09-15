import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Space,
  message,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { getAllStudent, deleteStudent } from "../api/studentApi";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

const { confirm } = Modal;

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await getAllStudent();
    setStudents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id: number, name: string) => {
    confirm({
      title: "Xóa sinh viên",
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có chắc chắn muốn xóa sinh viên: ${name}?`,
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk: async () => {
        const result = await deleteStudent(id);
        if (result) {
          message.success("Xóa sinh viên thành công!");
          fetchData();
        } else {
          message.error("Xóa thất bại!");
        }
      },
    });
  };

  const columns = [
    {
      title: "Tên sinh viên",
      dataIndex: "student_name",
      key: "student_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Lựa chọn",
      key: "action",
      render: (_: any, record: Student) => (
        <Space>
          <Button type="primary" icon={<EditOutlined />} />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id, record.student_name)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20, background: "#fff" }}>
      <h2 style={{ marginBottom: 16 }}>Quản lý sinh viên</h2>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginBottom: 16 }}
      >
        Thêm mới sinh viên
      </Button>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={students}
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default StudentList;
