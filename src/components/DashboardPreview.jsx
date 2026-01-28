import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const data = [
  { name: "يناير", sales: 4000 },
  { name: "فبراير", sales: 3000 },
  { name: "مارس", sales: 5000 },
  { name: "أبريل", sales: 2780 },
  { name: "مايو", sales: 1890 },
  { name: "يونيو", sales: 6390 },
  { name: "يوليو", sales: 7490 },
];

const DashboardPreview = () => {
  return (
    <div className="w-full max-w-lg md:block hidden bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-1 hover:rotate-0 transition duration-500">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h3 className="text-gray-900 font-bold text-lg">ملخص المبيعات</h3>
          <p className="text-gray-500 text-xs">آخر 7 شهور</p>
        </div>
        <div className="p-2 bg-indigo-100 rounded-lg">
          <TrendingUp size={20} className="text-indigo-600" />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 p-6">
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-2 text-indigo-600 mb-2">
            <DollarSign size={18} />
            <span className="text-xs font-semibold">الأرباح</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">45,200 ج.م</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <Users size={18} />
            <span className="text-xs font-semibold">عملاء جدد</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">+128</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 w-full px-2 pb-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#4f46e5"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPreview;
