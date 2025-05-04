export default function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ border: '1px solid #ccc', padding: 20, borderRadius: 10 }}>
        <h2>ورود</h2>
        <input type='text' placeholder='نام کاربری' /><br/><br/>
        <input type='password' placeholder='رمز عبور' /><br/><br/>
        <button>ورود</button>
      </div>
    </div>
  );
}