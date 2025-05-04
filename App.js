
import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>ورود به سامانه</h1>
      <form>
        <div>
          <label>نام کاربری:</label><br/>
          <input type="text" name="username" />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>رمز عبور:</label><br/>
          <input type="password" name="password" />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>ورود</button>
      </form>
    </div>
  );
}
