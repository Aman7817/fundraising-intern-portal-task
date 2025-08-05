// import React, { useEffect, useState } from 'react';

// export default function Leaderboard() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/v1/leaderboard')
//       .then((res) => res.json())
//       .then(setData);
//   }, []);

//   return (
//     <div className="p-8 min-h-screen bg-gray-50">
//       <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">🏆 Leaderboard</h1>

//       <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="border-b">
//               <th className="p-2 text-sm font-semibold text-gray-600">Rank</th>
//               <th className="p-2 text-sm font-semibold text-gray-600">Name</th>
//               <th className="p-2 text-sm font-semibold text-gray-600">Amount Raised (₹)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length > 0 ? (
//               data.map((item, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-100">
//                   <td className="p-2">{index + 1}</td>
//                   <td className="p-2 font-medium">{item.name}</td>
//                   <td className="p-2 text-green-600 font-semibold">₹{item.amount}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center text-gray-500 py-4">
//                   Loading or No Data Found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/leaderboard');
        if (!response.ok) throw new Error('Failed to load leaderboard');
        const result = await response.json();
        setLeaders(result);
      } catch (error) {
        setErrMsg(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Leaderboard</h2>

        {loading ? (
          <div className="text-center py-8 text-gray-500">⏳ Loading leaderboard...</div>
        ) : errMsg ? (
          <div className="text-center text-red-600 py-6">{errMsg}</div>
        ) : leaders.length === 0 ? (
          <div className="text-center py-6 text-gray-500">No participants yet!</div>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr className="text-sm text-left text-gray-600 border-b">
                <th className="p-2">Rank</th>
                <th className="p-2">Participant</th>
                <th className="p-2">Funds Raised</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((user, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 text-sm">
                  <td className="p-2 font-semibold">{i + 1}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2 text-green-700 font-medium">₹{user.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
};

export default Leaderboard;
