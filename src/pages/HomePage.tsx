import StatCard from "../components/home/StatCard";
import DashboardCard from "../components/home/DashboardCard";

import LitersProductionsCombinedLine from "../components/home/LitersProductionsCombinedLine";
import DistanceBarChart from "../components/home/DistanceBarChart";
import AvgLitersFarmerBarChart from "../components/home/AvgLitersFarmerBarChart";
import RoundedDoughnut from "../components/home/RoundedDoughnut";
import TransactionsPanel from "../components/home/TransactionsPanel";

import { Droplets, Calendar, Truck, AlertCircle } from "lucide-react";

const dashboardStats = {
  todayLiters: 1240,
  monthlyLiters: 28500,
  avgPickups: 6.2,
  pendingLiters: 420,
};

const HomePage = () => {
  return (
    <div className="p-6 bg-base-200/40 min-h-screen space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Overview of milk collection operations
          </p>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total liters collected today"
          value={`${dashboardStats.todayLiters} L`}
          icon={<Droplets size={20} />}
          bgColor="bg-blue-100"
          trend="up"
          change="+12%"
        />

        <StatCard
          title="Total liters collected this month"
          value={`${dashboardStats.monthlyLiters} L`}
          icon={<Calendar size={20} />}
          bgColor="bg-green-100"
        />

        <StatCard
          title="Avg pickups per vehicle today"
          value={dashboardStats.avgPickups}
          icon={<Truck size={20} />}
          bgColor="bg-purple-100"
        />

        <StatCard
          title="Total production pending today"
          value={`${dashboardStats.pendingLiters} L`}
          icon={<AlertCircle size={20} />}
          bgColor="bg-orange-100"
        />
      </div>

      {/* SaaS LAYOUT */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT ANALYTICS */}
        <div className="col-span-12 xl:col-span-9 space-y-6">
          {/* MAIN COMBINED CHART */}
          <DashboardCard
            title="Total Liters & Productions"
            subtitle="Last 7 days"
            className="min-h-[360px]"
          >
            <LitersProductionsCombinedLine />
          </DashboardCard>

          {/* SECOND ROW: Bar + Donut + Donut */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DashboardCard title="Distance covered per day (km)">
              <DistanceBarChart />
            </DashboardCard>

            <DashboardCard title="Production status">
              <RoundedDoughnut
                items={[
                  { label: "Completed", value: 85, color: "#3b82f6" },
                  { label: "Failed", value: 15, color: "#ef4444" },
                ]}
              />
            </DashboardCard>

            <DashboardCard title="Vehicle utilization">
              <RoundedDoughnut
                items={[
                  { label: "In Use", value: 70, color: "#22c55e" },
                  { label: "Idle", value: 30, color: "#f97316" },
                ]}
              />
            </DashboardCard>
          </div>

          {/* THIRD ROW: Farmer chart */}
          <DashboardCard title="Average liters per farmer">
            <AvgLitersFarmerBarChart />
          </DashboardCard>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-12 xl:col-span-3">
          <DashboardCard title="Transactions" subtitle="Latest payments">
            <TransactionsPanel />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
