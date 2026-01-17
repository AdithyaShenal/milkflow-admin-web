import { useState } from "react";
import LocationFetchMap from "../components/map/LocationFetch";
import useGetConfigurations from "../hooks/useGetConfigurations";
import FullLoadingPage from "../components/Loading/FullLoadingPage";
import useUpdateDepotLocation from "../hooks/useUpdateDepotLocation";

interface Location {
  lat: number;
  lon: number;
}

const ConfigPage = () => {
  const [location, setLocation] = useState<Location | null>(null);

  const { data: configs, isLoading } = useGetConfigurations();
  const { mutate: updateLocation, isPending } = useUpdateDepotLocation();

  if (isLoading)
    return (
      <>
        <FullLoadingPage />
      </>
    );

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
      <div>
        <p className="text-lg font-semibold text-gray-700">Depot Location</p>
        <p className="text-sm text-gray-500">
          Pick the depot location by clicking or dragging the pin
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-[420px] rounded-sm border border-slate-300 overflow-hidden">
          <LocationFetchMap
            initialLocation={{
              lat: configs.depot_location.lat,
              lon: configs.depot_location.lon,
            }}
            onLocationChange={(loc: Location) => setLocation(loc)}
          />
        </div>

        <div className="flex flex-col rounded-sm border border-slate-300 p-4 bg-base-100">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Coordinates
            </label>

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
