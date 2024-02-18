interface IModalProps {
  data: React.ReactElement;
  isModalOpen: boolean;
  onCloseModal: () => void;
}

const TableModal = ({ data, isModalOpen, onCloseModal }: IModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onCloseModal}
      />
      <div
        className={`${
          isModalOpen ? "block" : "hidden"
        } sm:hidden fixed top-1/4 right-0 left-0 z-50 m-auto w-full max-w-md max-h-full rounded-lg shadow bg-gray-700`}
      >
        <div className="p-4 text-center m-auto text-white font-bold">
          <h2 className="text-lg border-b border-b-white mb-2">Details</h2>
          {data}
          <button
            type="button"
            onClick={onCloseModal}
            className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
