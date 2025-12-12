import { useEffect, useState } from "react";
import type { Farmer } from "../../pages/FarmerPage";

interface EditFarmerModalProps {
  open: boolean;
  farmer: Farmer | null;
  onClose: () => void;
  onUpdate: (farmer: Farmer) => void;
}

export default function EditFarmerModal({
  open,
  farmer,
  onClose,
  onUpdate,
}: EditFarmerModalProps) {
  const [form, setForm] = useState({
    name: "",
    nic: "",
    contact: "",
    farmType: "",
    capacity: "",
    location: "",
  });

  // Prefill form when modal opens
  useEffect(() => {
    if (farmer) {
      setForm({
        name: farmer.name,
        nic: farmer.nic,
        contact: farmer.contact,
        farmType: farmer.farmType,
        capacity: farmer.capacity,
        location: farmer.location,
      });
    }
  }, [farmer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!farmer) return;
    onUpdate({ id: farmer.id, ...form });
    onClose();
  };

  if (!open || !farmer) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-lg">
        <h3 className="font-bold text-lg mb-4">Edit Farmer</h3>

        <div className="grid gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Full Name"
          />

          <input
            name="nic"
            value={form.nic}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="NIC Number"
          />

          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Contact Number"
          />

          <select
            name="farmType"
            value={form.farmType}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Select Farm Type</option>
            <option value="Dairy Farm">Dairy Farm</option>
            <option value="Organic Dairy">Organic Dairy</option>
            <option value="Mixed Farm">Mixed Farm</option>
          </select>

          <input
            name="capacity"
            value={form.capacity}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Daily Capacity (L/day)"
          />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Location"
          />
        </div>

        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update Farmer
          </button>
        </div>
      </div>
    </dialog>
  );
}
