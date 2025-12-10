import React, { useState } from "react";

export type FarmerForm = {
  name: string;
  nic: string;
  contact: string;
  farmType: string;
  capacity: string;
  location: string;
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: FarmerForm) => void;
}

export default function AddFarmerModal({ open, onClose, onSave }: ModalProps) {
  const [formData, setFormData] = useState<FarmerForm>({
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    setFormData({
      name: "",
      nic: "",
      contact: "",
      farmType: "",
      capacity: "",
      location: "",
    });
    onClose();
  };

  return (
    <>
      {open && (
        <dialog className="modal modal-open">
          <div className="modal-box w-96 max-w-lg">
            <h3 className="font-bold text-lg mb-4">Add Farmer</h3>

            {/* FORM */}
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <input
                type="text"
                name="nic"
                placeholder="NIC"
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <select
                name="farmType"
                className="select select-bordered w-full"
                onChange={handleChange}
              >
                <option value="">Select Farm Type</option>
                <option value="Dairy Farm">Dairy Farm</option>
                <option value="Organic Dairy">Organic Dairy</option>
                <option value="Mixed Farm">Mixed Farm</option>
              </select>

              <input
                type="text"
                name="capacity"
                placeholder="Capacity (ex: 120L/day)"
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </div>

            {/* BUTTONS */}
            <div className="modal-action">
              <button className="btn" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
