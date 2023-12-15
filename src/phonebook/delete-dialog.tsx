type Props = {
  text: string
  onCancel: () => void
  onConfirm: () => void
  isOpen: boolean
}

const DeleteModal = ({ text, onCancel, onConfirm }: Props) => (
  <div className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto">
    <div className="fixed inset-0 bg-black opacity-40"></div>

    <div className="z-50 rounded bg-white p-4 shadow-lg">
      <h1 className="mx-6 mb-4 mt-6 text-xl">Delete</h1>

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
    </div>
  </div>
)

export default DeleteModal
