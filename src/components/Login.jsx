import { useState } from 'react'; import { useNavigate } from 'react-router-dom'; import logo from '../images.png';

const Login = () => { const [username, setUsername] = useState(''); const [password, setPassword] = useState(''); const navigate = useNavigate();

const handleLogin = (e) => { e.preventDefault(); if (username === 'admin' && password === '1234') { navigate('/admin'); } else if (username === 'user' && password === '1234') { navigate('/user'); } else { alert('نام کاربری یا رمز عبور اشتباه است.'); } };

return ( <div className="flex items-center justify-center min-h-screen bg-blue-50"> <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center"> <img src={logo} alt="لوگو" className="mx-auto w-24 mb-4" /> <h1 className="text-xl font-bold mb-6">سامانه آنلاین عملیات نگهداری پیشگیرانه</h1> <form onSubmit={handleLogin}> <input type="text" placeholder="نام کاربری" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 mb-4 border rounded" /> <input type="password" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" /> <button
type="submit"
className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
> ورود </button> </form> </div> </div> ); };

export default Login;
