import { useState } from "react";

export default function UserForm() {
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>📝 사용자 정보 입력</h2>

      {/* 이름 입력 */}
      <input
        type="text"
        placeholder="이름 입력"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <br /><br />

      {/* 이메일 입력 */}
      <input
        type="text"
        placeholder="이메일 입력"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <br /><br />

      {/* 결과 출력 */}
      <p>이름 : {user.name}</p>
      <p>이메일 : {user.email}</p>
    </div>
  );
}