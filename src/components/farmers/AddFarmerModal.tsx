import React, { useState } from "react";
import type { Farmer } from "../../pages/FarmerPage";

interface AddFarmerModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: Omit<Farmer, "id">) => void;
}

export default function AddFarmerModal({
  open,
  //closes modal when user clicks Cancel or after Submit.
  onClose,
  onSave,
}: AddFarmerModalProps) {
  const [form, setForm] = useState({
    name: "",
    nic: "",
    contact: "",
    farmType: "",
    capacity: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
    setForm({
      name: "",
      nic: "",
      contact: "",
      farmType: "",
      capacity: "",
      location: "",
    });
  };

  if (!open) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-lg">
        <h3 className="font-bold text-lg mb-4">Add New Farmer</h3>

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
            Save Farmer
          </button>
        </div>
      </div>
    </dialog>
  );
}
