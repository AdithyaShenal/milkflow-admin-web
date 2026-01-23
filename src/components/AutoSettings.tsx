import { Plus } from "lucide-react";
import { useState } from "react";
import AddNextTruck from "./Modals/OptimizeSettings/AddNextTruck";

const AutoSettings = () => {
  const [modal, setModal] = useState<boolean>(false);
  const closeModal = () => setModal(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-sm font-semibold">Schedule Next Job</p>
          <button
            className="btn btn-sm btn-neutral"
            onClick={() => setModal(true)}
          >
            <Plus className="size-3" />
            Add
          </button>
        </div>

        <div className="overflow-x-auto w-auto border border-slate-300 rounded-sm">
          <table className="table table-md table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <td>ID</td>
                <td>Model</td>
                <td>License No</td>
                <td>Route</td>
                <td>Status</td>
                <td>Capacity</td>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll"></tbody>
          </table>
          <p className="text-center p-4 ml-2 text-slate-500 text-sm">
            <i>No trucks are scheduled yet</i>
          </p>
        </div>

        {modal && (
          <AddNextTruck open onClose={closeModal} title="Schedule next job" />
        )}
      </div>
    </>
  );
};

export default AutoSettings;
