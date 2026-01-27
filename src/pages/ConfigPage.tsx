import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import LocationFetchMap from "../components/map/LocationFetch";
import useGetConfigurations from "../hooks/useGetConfigurations";
import FullLoadingPage from "../components/Loading/FullLoadingPage";
import useUpdateDepotLocation from "../hooks/useUpdateDepotLocation";

declare module "jspdf" {
  interface jsPDF {
    lastAutoTable?: {
      finalY: number;
    };
  }
}

interface Location {
  lat: number;
  lon: number;
}

interface DashboardData {
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

interface ReportSection {
  id: string;
  label: string;
  enabled: boolean;
}

const ConfigPage = () => {
  const [location, setLocation] = useState<Location | null>(null);

  const { data: configs, isLoading, isError, error } = useGetConfigurations();
  const { mutate: updateLocation, isPending } = useUpdateDepotLocation();

  // Simple report sections with checkboxes
  const [reportSections, setReportSections] = useState<ReportSection[]>([
    { id: "executive_summary", label: "Executive Summary", enabled: true },
    { id: "daily_metrics", label: "Daily Metrics", enabled: true },
    { id: "production_analysis", label: "Production Analysis", enabled: true },
    { id: "quality_metrics", label: "Quality Metrics", enabled: true },
    { id: "route_efficiency", label: "Route Efficiency", enabled: true },
    { id: "system_summary", label: "System Summary", enabled: true },
  ]);

  if (isLoading)
    return (
      <>
        <FullLoadingPage />
      </>
    );
  useEffect(() => {
    if (configs && !location) {
      setLocation(configs.depot_location);
    }
  }, [configs, location]);

  if (isLoading) return <FullLoadingPage />;

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const submitHandler = () => {
    if (!location) return;

    updateLocation({
      depotCoords: {
        lat: location.lat,
        lon: location.lon,
      },
    });
  };

  return (
    <div className="w-full mx-auto space-y-4">
      {/* Alert */}
      {isError && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error.message}</span>
        </div>
      )}

      <div>
        <p className="text-lg font-semibold text-gray-700">Depot Location</p>
        <p className="text-sm text-gray-500">
          Pick the depot location by clicking or dragging the pin
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-[420px] rounded-sm border border-slate-300 overflow-hidden">
          {configs && (
            <LocationFetchMap
              initialLocation={{
                lat: configs.depot_location.lat,
                lon: configs.depot_location.lon,
              }}
              onLocationChange={(loc: Location) => setLocation(loc)}
            />
          )}
        </div>

        <div className="flex flex-col rounded-sm border border-slate-300 p-4 bg-base-100">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Coordinates
            </label>

            {configs && (
              <input
                type="text"
                readOnly
                className="input input-bordered w-full font-mono"
                value={
                  location
                    ? `${location.lat.toFixed(6)}, ${location.lon.toFixed(6)}`
                    : `${configs.depot_location.lat}, ${configs.depot_location.lon}`
                }
              />
            )}
          </div>

          <div className="pt-4">
            <button
              onClick={submitHandler}
              className="btn btn-primary w-full"
              disabled={!location || isPending}
            >
              Save Depot Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigPage;
