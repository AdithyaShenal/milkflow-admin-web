import StatCard from "../components/home/StatCard";
const dashboardStats = {
  todayLiters: 1240,
  monthlyLiters: 28500,
  avgPickups: 6.2,
  pendingLiters: 420,
};
const HomePage = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Total liters collected today"
          value={`${dashboardStats.todayLiters} L`}
        />

        <StatCard
          title="Total liters collected this month"
          value={`${dashboardStats.monthlyLiters} L`}
        />

        <StatCard
          title="Avg pickups per vehicle today"
          value={dashboardStats.avgPickups}
        />

        <StatCard
          title="Total production pending today"
          value={`${dashboardStats.pendingLiters} L`}
        />
      </div>
    </div>
  );
};

export default HomePage;
