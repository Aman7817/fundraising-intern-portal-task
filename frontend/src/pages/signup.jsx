import React from 'react';
export default function Signup() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <input className="border p-2 mb-2" placeholder="Name" /> <br />
      <input className="border p-2 mb-2" placeholder="Email" /> <br />
      <input className="border p-2 mb-2" placeholder="Password" /> <br />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Signup</button>
    </div>
  );
}
