import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <img src="/src/images.png" alt="لوگو" className="w-32 h-32 mb-4" />
      <h1 className="text-xl font-bold text-center mb-8">
        سامانه آنلاین عملیات نگهداری پیشگیرانه
      </h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <input
          type="text"
          placeholder="نام کاربری"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full mb-4 p-2 border rounded"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          ورود
        </button>
      </div>
    </div>
  );
};

export default Login;
