function Login() {
  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ border: '1px solid #ccc', padding: 30, borderRadius: 10, width: 300 }}>
        <h2 style={{ marginBottom: 20 }}>ورود</h2>
        <input type='text' placeholder='نام کاربری' style={{ width: '100%', marginBottom: 10, padding: 8 }} />
        <input type='password' placeholder='رمز عبور' style={{ width: '100%', marginBottom: 20, padding: 8 }} />
        <button style={{ width: '100%', padding: 10 }}>ورود</button>
      </div>
    </div>
  );
}

export default Login;
