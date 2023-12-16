import { Modal } from "./various"

type Props = {
  text: string
  onCancel: () => void
  onConfirm: () => void
}

const DeleteModal = ({ text, onCancel, onConfirm }: Props) => (
  <Modal contentClassName="rounded bg-white shadow-lg">
    <h1 className="mx-6 mb-8 mt-6 text-xl text-secondary-dark">Delete</h1>
    <p className="mx-6 mb-6 mt-4 text-primary-dark">{text}</p>
    <div className="mx-6 mb-4 mt-2 flex justify-between gap-10">
      <button className="w-36 rounded-lg bg-secondary-main py-2 text-white" onClick={onCancel}>
        Cancel
      </button>
      <button
        className="w-36 rounded-lg bg-primary-main py-2 text-white"
        onClick={onConfirm}
        autoFocus
      >
        Delete
      </button>
    </div>
  </Modal>
)

export default DeleteModal
