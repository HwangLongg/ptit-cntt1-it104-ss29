import { useEffect, useState } from "react";
import { getStudentById } from "../api/studentApi";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

const StudentDetail = ({ id }: { id: number }) => {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const data = await getStudentById(id);
      setStudent(data);
    };
    fetchStudent();
  }, [id]);

  if (!student) {
    return <p className="text-gray-500">⏳ Đang tải thông tin sinh viên...</p>;
  }

  return (
    <div className="p-6 bg-white shadow rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">📖 Chi tiết sinh viên</h2>
      <ul className="space-y-2">
        <li><strong>ID:</strong> {student.id}</li>
        <li><strong>Tên:</strong> {student.student_name}</li>
        <li><strong>Email:</strong> {student.email}</li>
        <li><strong>SĐT:</strong> {student.phone}</li>
        <li><strong>Địa chỉ:</strong> {student.address}</li>
        <li>
          <strong>Trạng thái:</strong>{" "}
          {student.status ? (
            <span className="text-green-600 font-semibold">Đang học</span>
          ) : (
            <span className="text-red-600 font-semibold">Nghỉ</span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default StudentDetail;
