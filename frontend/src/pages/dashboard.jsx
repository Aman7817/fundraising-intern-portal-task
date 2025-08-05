import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import { FaMedal, FaCertificate, FaStar, FaCrown } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';

export default function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // Fetch user data when the dashboard loads
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/users')
      .then(response => response.json())
      .then(userData => setUser(userData))
      .catch(err => console.error('Failed to fetch user:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden">

        {/* Top Section: Greeting */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white flex items-center gap-4">
          <HiUserCircle className="text-5xl" />
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user.name || 'Intern'}</h1>
            <p className="text-sm text-purple-100">You're doing great. Keep it up! 💪</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="p-8 text-gray-800">
          {/* User Details */}
          <div className="mb-4">
            <p className="text-lg">
              <strong>Referral Code:</strong>{' '}
              <span className="text-indigo-700">{user.referralCode || 'N/A'}</span>
            </p>
            <p className="text-lg mt-1">
              <strong>Total Donations Raised:</strong>{' '}
              <span className="text-green-600 font-semibold">
                ₹{user.donationsRaised || 0}
              </span>
            </p>
          </div>

          {/* Rewards List */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-indigo-700 mb-3">
              🎁 Rewards & Unlockables
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCertificate className="text-yellow-600" /> Certificate of Internship
              </li>
              <li className="flex items-center gap-2">
                <FaStar className="text-pink-500" /> Letter of Recommendation
              </li>
              <li className="flex items-center gap-2">
                <FaCrown className="text-orange-500" /> Top Intern Badge
              </li>
            </ul>
          </div>

          {/* Leaderboard Navigation Button */}
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/leaderboard')}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-md transition duration-200 text-lg font-medium"
            >
              Go to Leaderboard <FiArrowRight className="text-xl" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaMedal, FaCertificate, FaStar, FaCrown } from 'react-icons/fa';
// import { FiArrowRight } from 'react-icons/fi';
// import { HiUserCircle } from 'react-icons/hi';

// export default function Dashboard() {
//   const [data, setData] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('http://localhost:5000/api/v1/users')
//       .then(res => res.json())
//       .then(setData);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex items-center gap-4">
//           <HiUserCircle className="text-5xl" />
//           <div>
//             <h1 className="text-3xl font-bold">Hey, {data.name || 'Intern'} 👋</h1>
//             <p className="text-sm text-purple-200 mt-1">Welcome back to your fundraising dashboard!</p>
//           </div>
//         </div>

//         {/* Body */}
//         <div className="p-6 md:p-8 grid gap-6">
//           {/* Donation and Referral Info */}
//           <div className="grid md:grid-cols-2 gap-4">
//             <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-600 text-sm">Referral Code</p>
//               <p className="text-xl font-semibold text-indigo-700">{data.referralCode || 'N/A'}</p>
//             </div>
//             <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-600 text-sm">Total Donations Raised</p>
//               <p className="text-xl font-semibold text-green-600">₹{data.donationsRaised || 0}</p>
//             </div>
//           </div>

//           {/* Rewards Section */}
//           <div className="bg-white border border-indigo-100 p-6 rounded-2xl shadow-sm">
//             <h2 className="text-xl font-semibold text-indigo-700 mb-4">🎁 Your Rewards</h2>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-3">
//                 <div className="p-2 bg-yellow-100 rounded-full"><FaCertificate className="text-yellow-600" /></div>
//                 <span>Certificate of Internship</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="p-2 bg-pink-100 rounded-full"><FaStar className="text-pink-500" /></div>
//                 <span>Letter of Recommendation</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="p-2 bg-orange-100 rounded-full"><FaCrown className="text-orange-500" /></div>
//                 <span>Top Intern Badge</span>
//               </li>
//             </ul>
//           </div>

//           {/* Leaderboard Button */}
//           <div className="text-center mt-6">
//             <button
//               onClick={() => navigate('/leaderboard')}
//               className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-200 text-lg font-medium"
//             >
//               View Leaderboard <FiArrowRight className="text-xl" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
