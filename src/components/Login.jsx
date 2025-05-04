import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌تونی لاگین واقعی یا بررسی اطلاعات رو پیاده‌سازی کنی
    alert(`نام کاربری: ${username}\nرمز عبور: ${password}`);
  };

  return (
    <div style={{ margin: "50px auto", maxWidth: "400px" }}>
      <h2>ورود به سامانه</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>نام کاربری:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>رمز عبور:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit">ورود</button>
      </form>
    </div>
  );
}

export default Login;
