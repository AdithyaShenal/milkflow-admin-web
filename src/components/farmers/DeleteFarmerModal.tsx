interface DeleteFarmerModalProps {
  open: boolean;
  farmerName?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteFarmerModal({
  open,
  farmerName,
  onClose,
  onConfirm,
}: DeleteFarmerModalProps) {
  if (!open) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-sm">
        <h3 className="font-bold text-lg text-error">Delete Farmer</h3>
        <p className="py-4">
          Are you sure you want to delete <b>{farmerName}</b>?
        </p>

        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-error" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </dialog>
  );
}
