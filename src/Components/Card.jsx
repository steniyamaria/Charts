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

