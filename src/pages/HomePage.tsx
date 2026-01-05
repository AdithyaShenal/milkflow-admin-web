import StatCard from "../components/home/StatCard";
import { Droplets, Calendar, Truck, AlertCircle } from "lucide-react";
const dashboardStats = {
  todayLiters: 1240,
  monthlyLiters: 28500,
  avgPickups: 6.2,
  pendingLiters: 420,
};
const HomePage = () => {
  return (
    <div className="p-6 space-y-8 bg-base-200/40 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Overview of milk collection operations
          </p>
        </div>
      </div>
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
          loading
        />

        <StatCard
          title="Total production pending today"
          value={`${dashboardStats.pendingLiters} L`}
          icon={<AlertCircle size={20} />}
          bgColor="bg-orange-100"
        />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Chart 1 */}
        <div className="bg-white rounded-xl border p-5">
          <h2 className="text-base font-semibold mb-4">Total liters per day</h2>
          <LitersLineChart />
        </div>

        {/* Chart 2 */}
        <div className="bg-white rounded-xl border p-5">
          <h2 className="text-base font-semibold mb-4">
            Distance covered per day (km)
          </h2>
          <DistanceBarChart />
        </div>

        {/* Chart 3 */}
        <div className="bg-white rounded-xl border p-5">
          <h2 className="text-base font-semibold mb-4">Production status</h2>
          <ProductionDoughnutChart />
        </div>
      </div>
      {/* 3rd ROW CHARTS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Total productions per day
            </h2>

            <div className="h-52">
              <ProductionsLineChart />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Average liters per farmer
            </h2>

            <div className="h-52">
              {" "}
              <AvgLitersFarmerBarChart />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Vehicle utilization
            </h2>

            <div className="h-52">
              {" "}
              <VehicleUtilizationChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
