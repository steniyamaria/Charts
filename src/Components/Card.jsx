import React from "react";
import "./card.css";

const StatsCards = () => {
  return (
    <div className="stats-container">
      <div className="stats-card">
        <h5 className="stats-title">Total Sales</h5>
        <h3 className="stats-value">$120,784.02</h3>
        <p className="stats-change positive">
          ↑ 12.3% <span className="stats-sub">+$1,453.89 today</span>
        </p><hr></hr>
        <a href="#" className="view-report">View Report →</a>
      </div>

      <div className="stats-card">
        <h5 className="stats-title">Total Orders</h5>
        <h3 className="stats-value">28,834</h3>
        <p className="stats-change positive">
          ↑ 20.1% <span className="stats-sub">+2,676 today</span>
        </p><hr></hr>
        <a href="#" className="view-report">View Report →</a>
      </div>

      <div className="stats-card">
        <h5 className="stats-title">Visitor</h5>
        <h3 className="stats-value">18,896</h3>
        <p className="stats-change negative">
          ↓ 5.6% <span className="stats-sub">-876 today</span>
        </p><hr></hr>
        <a href="#" className="view-report">View Report →</a>
      </div>

      <div className="stats-card">
        <h5 className="stats-title">Refunded</h5>
        <h3 className="stats-value">2,876</h3>
        <p className="stats-change positive">
          ↑ 13% <span className="stats-sub">+34 today</span>
        </p><hr></hr>
        <a href="#" className="view-report">View Report →</a>
      </div>
    </div>
  );
};

export default StatsCards;



// export default function Wallet() {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
//         {/* Balance Card */}
//         <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
//           <h2 className="text-gray-500 text-lg font-medium">Balance</h2>
//           <h1 className="text-3xl font-bold mt-2">$1,180,577.24</h1>
//           <div className="flex items-center space-x-2 mt-2">
//             <div className="h-1 w-8 bg-yellow-500"></div>
//             <div className="h-1 w-8 bg-blue-500"></div>
//             <div className="h-1 w-8 bg-green-500"></div>
//             <div className="h-1 w-8 bg-gray-400"></div>
//           </div>
//           <p className="text-green-500 mt-3">Profit today: +$4,245.45</p>
//           <p className="text-green-500">+4.5%</p>
//         </div>
        
//         {/* Bitcoin Card */}
//         <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
//           <h2 className="text-gray-500 text-lg font-medium">Bitcoin</h2>
//           <h1 className="text-3xl font-bold mt-2">108.61 BTC</h1>
//           <p className="text-gray-500">1 BTC = $10,860.29</p>
//           <p className="text-green-500 mt-3">Profit today: +$1,327.46</p>
//           <p className="text-green-500">+5%</p>
//           <div className="flex mt-4 space-x-2">
//             <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Trade</button>
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Buy</button>
//             <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">Send</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', balance: 72000 },
//   { name: 'Feb', balance: 68000 },
//   { name: 'Mar', balance: 70000 },
//   { name: 'Apr', balance: 73000 },
//   { name: 'May', balance: 75000 },
//   { name: 'Jun', balance: 77000 },
//   { name: 'Jul', balance: 79000 },
//   { name: 'Aug', balance: 78000 },
// ];

// export default function Wallet() {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-gray-500 text-lg font-medium">My Wallets</h2>
//         <div className="flex justify-between items-center mt-2">
//           <span className="text-lg font-bold">My Balance</span>
//           <span className="text-blue-500 font-bold">$79,356.46 <span className="text-green-500">+1.2%</span></span>
//         </div>
//         <ResponsiveContainer width="100%" height={250}>
//           <LineChart data={data}>
//             <XAxis dataKey="name" stroke="#8884d8" />
//             <YAxis stroke="#8884d8" />
//             <Tooltip />
//             <Line type="monotone" dataKey="balance" stroke="#FF7F50" strokeWidth={2} dot={{ r: 3 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }



// export default function Wallet() {
//   const cards = [
//     { number: '1111 2222 3333 4444', name: 'Jordan Bloom', type: 'Personal' },
//     { number: '4444 3333 2222 1111', name: 'Mac Profits', type: 'Business' },
//     { number: '1111 2222 3333 4444', name: 'Jason Brain', type: 'Personal' },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-gray-500 text-lg font-medium">My Card</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//           {cards.map((card, index) => (
//             <div key={index} className="bg-white border rounded-xl p-4 shadow-md flex flex-col items-start">
//               <div className="flex justify-between w-full">
//                 <span className="text-xl font-bold">{card.number}</span>
//                 <img src="/mastercard-logo.png" alt="Card Logo" className="h-6" />
//               </div>
//               <div className="mt-4 text-gray-600">{card.name}</div>
//               <div className="text-gray-500 text-sm">{card.type}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
