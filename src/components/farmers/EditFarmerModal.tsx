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
  const [form, setForm] = useState<Omit<Farmer, "id">>({
    name: "",
    nic: "",
    contact: "",
    farmType: "",
    capacity: "",
    location: "",
  });

  useEffect(() => {
    if (farmer) {
      const { id, ...rest } = farmer;
      setForm(rest);
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
            className="input input-bordered"
          />
          <input
            name="nic"
            value={form.nic}
            onChange={handleChange}
            className="input input-bordered"
          />
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="input input-bordered"
          />
          <input
            name="farmType"
            value={form.farmType}
            onChange={handleChange}
            className="input input-bordered"
          />
          <input
            name="capacity"
            value={form.capacity}
            onChange={handleChange}
            className="input input-bordered"
          />
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </dialog>
  );
}
