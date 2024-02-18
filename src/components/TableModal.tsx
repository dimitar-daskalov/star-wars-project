interface ModalProps {
  data: React.ReactElement;
  isModalOpen: boolean;
  onCloseModal: () => void;
}

const TableModal = ({ data, isModalOpen, onCloseModal }: ModalProps) => {
  return (
    <div className="backdrop-modal-wrapper">
      <div className="backdrop-modal" onClick={onCloseModal} />
      <div className={`${isModalOpen ? "block" : "hidden"} sm:hidden modal`}>
        <div className="p-4 text-center m-auto">
          <h2 className="h2 border-b border-b-gray-300 mb-2">Details</h2>
          {data}
          <button type="button" onClick={onCloseModal} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
