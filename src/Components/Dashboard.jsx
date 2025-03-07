import React, { useState } from "react";
import { FaFilter, FaFileExport } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";
import { BsChevronDown } from "react-icons/bs";
import "./Dashboard.css";
import "./Card.css";
import "./Revenue.css";
import "./Activity.css";
import "./Piechart.css"; // Import CSS for the donut chart

const data = [
    { name: "Jan", profit: 5000, loss: 3000 },
    { name: "Feb", profit: 10000, loss: 7000 },
    { name: "Mar", profit: 7000, loss: 5000 },
    { name: "Apr", profit: 18000, loss: 12000 },
    { name: "May", profit: 12000, loss: 10000 },
    { name: "Jun", profit: 6000, loss: 4000 },
];

const data2 = [
    {
        name: "Ronald Richards",
        email: "ronald@gmail.com",
        profile: "https://i.pravatar.cc/35?img=1",
        status: "Member",
        id: "#74548320",
        time: "5 min ago",
        amount: "$12,408.20",
    },
    {
        name: "Darrell Steward",
        email: "steward.darrel@gmail.com",
        profile: "https://i.pravatar.cc/35?img=2",
        status: "Signed Up",
        id: "#23184855",
        time: "10 min ago",
        amount: "$201.50",
    },
    {
        name: "Marvin McKinney",
        email: "mckinney.j7@gmail.com",
        profile: "https://i.pravatar.cc/35?img=3",
        status: "New Customer",
        id: "#54394637",
        time: "15 min ago",
        amount: "$2,856.03",
    },
];

// Traffic Channel Data
const trafficData = [
    { name: "Direct", value: 50.5, color: "#3B82F6" }, // Blue
    { name: "Referral", value: 30.5, color: "#F97316" }, // Orange
    { name: "Organic", value: 19, color: "#9CA3AF" }, // Gray
];

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h2>Dashboard</h2>
                    <p>Here's your analytic details</p>
                </div>
                <div className="dashboard-actions">
                    <button className="filter-btn">
                        <FaFilter className="filter-icon" /> Filter by
                    </button>
                    <button className="export-btn">
                        <FaFileExport className="export-icon" /> Exports
                    </button>
                </div>
            </div>

            <div className="stats-revenue">
                <div className="stats-container">
                    <div className="stats-card">
                        <h5 className="stats-title">Total Sales</h5>
                        <h3 className="stats-value">$120,784.02</h3>
                        <p className="stats-change positive">
                            ↑ 12.3% <span className="stats-sub">+$1,453.89 today</span>
                        </p><hr />
                        <a href="#" className="view-report">View Report →</a>
                    </div>

                    <div className="stats-card">
                        <h5 className="stats-title">Total Orders</h5>
                        <h3 className="stats-value">28,834</h3>
                        <p className="stats-change positive">
                            ↑ 20.1% <span className="stats-sub">+2,676 today</span>
                        </p><hr />
                        <a href="#" className="view-report">View Report →</a>
                    </div>

                    <div className="stats-card">
                        <h5 className="stats-title">Visitor</h5>
                        <h3 className="stats-value">18,896</h3>
                        <p className="stats-change negative">
                            ↓ 5.6% <span className="stats-sub">-876 today</span>
                        </p><hr />
                        <a href="#" className="view-report">View Report →</a>
                    </div>

                    <div className="stats-card">
                        <h5 className="stats-title">Refunded</h5>
                        <h3 className="stats-value">2,876</h3>
                        <p className="stats-change positive">
                            ↑ 13% <span className="stats-sub">+34 today</span>
                        </p><hr />
                        <a href="#" className="view-report">View Report →</a>
                    </div>
                </div>

                <div className="revenue-container">
                    <div className="revenue-header">
                        <h5>Revenue</h5>
                        <div className="dropdown-btn">
                            Month <BsChevronDown />
                        </div>
                    </div>
                    <div className="revenue-value">
                        <h2>$16,400.<span className="decimal">12</span></h2>
                        <p className="growth">🔼 +10%</p>
                    </div>
                    <div className="legend-container">
                        <span className="legend-item">
                            <span className="dot profit-dot"></span> Profit
                        </span>
                        <span className="legend-item">
                            <span className="dot loss-dot"></span> Loss
                        </span>
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" stroke="#888" />
                            <YAxis stroke="#888" tickFormatter={(value) => `${value / 1000}k`} domain={[0, 20000]} ticks={[0, 5000, 10000, 15000, 20000]} />
                            <Tooltip cursor={{ fill: "#1e1e2f" }} />
                            <Bar dataKey="profit" fill="#1e88e5" radius={[5, 5, 0, 0]} />
                            <Bar dataKey="loss" fill="#ccc" radius={[5, 5, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

{/*             <div className="activity-card">
                <h5>Recent Activity</h5>
                <table className="activity-table">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Customer ID</th>
                            <th>Retained</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data2.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="profile-container">
                                        <img src={item.profile} alt="Profile" className="profile-image" />
                                        <div>
                                            <strong>{item.name}</strong>
                                            <br />
                                            <small className="text-secondary">{item.email}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className={`status-badge ${item.status.replace(" ", "-").toLowerCase()}`}>{item.status}</span>
                                </td>
                                <td>{item.id}</td>
                                <td>{item.time}</td>
                                <td>{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}


              <div className="activity-card">
    <div className="activity-header">
        <h5>Recent Activity</h5>

        {/* Dropdown for Last 24 Hours filter */}
        <select className="dropdown-select">
            <option>Last 24 Hours</option>
        </select>
    </div>

    <table className="activity-table">
        <thead>
            <tr>
                <th>Customer</th>
                <th>Status</th>
                <th>Customer ID</th>
                <th>Retained</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {data2.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                        <span className={`status-badge ${item.status.toLowerCase().replace(" ", "-")}`}>
                            {item.status}
                        </span>
                    </td>
                    <td>{item.id}</td>
                    <td>{item.time}</td>
                    <td>{item.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

            {/* Traffic Channel Donut Chart */}
            <div className="traffic-channel-container">
                <h5>Traffic Channel</h5>
                <ResponsiveContainer width={300} height={250}>
                    <PieChart>
                        <Pie data={trafficData} dataKey="value" innerRadius={60} outerRadius={80} paddingAngle={3}>
                            {trafficData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Dashboard;
