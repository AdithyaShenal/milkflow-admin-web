// src/hooks/useGetDashboardData.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface DashboardData {
  summaryCards: {
    totalLitersToday: number;
    totalLitersThisMonth: number;
    avgPickupsPerVehicle: number;
    totalProductionPending: number;
  };
  weeklyCharts: {
    litersPerDay: Array<{ x: string; y: number }>;
    distancePerDay: Array<{ x: string; y: number }>;
    productionStatusRatio: {
      completed: number;
      failed: number;
    };
  };
  additionalCharts: {
    productionsPerDay: Array<{ date: string; productions: number }>;
    qualityTrends: {
      avgFatContent: number;
      avgDensity: number;
      rejectionRate: number;
    };
    routeEfficiency: {
      mostEfficientRoute: number;
      avgCollectionTime: number;
      routeUtilization: number;
    };
  };
  rawData: {
    todayDate: string;
    weekStart: string;
    dataPoints: number;
  };
}

const fetchDashboardData = async (): Promise<DashboardData> => {
  try {
    // Correct endpoint: /api/analytics/dashboard
    const response = await axios.get(
      "http://localhost:4000/api/analytics/dashboard",
    );

    console.log("Dashboard API Response Status:", response.status);
    console.log("Dashboard API Response Data:", response.data);

    // Check if response has success field
    if (response.data?.success) {
      return response.data.data;
    }

    // If no success field, assume response is the data
    return response.data;
  } catch (error: any) {
    console.error("Error fetching dashboard data:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
    throw error;
  }
};

const useGetDashboardData = () => {
  return useQuery<DashboardData>({
    queryKey: ["dashboard", "analytics"],
    queryFn: fetchDashboardData,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
  });
};

export default useGetDashboardData;
