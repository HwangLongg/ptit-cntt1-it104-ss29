import React from "react";
import "antd/dist/reset.css";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div style={{ padding: 24, background: "#f0f2f5", minHeight: "100vh" }}>
      <StudentList />
    </div>
  );
}

export default App;
