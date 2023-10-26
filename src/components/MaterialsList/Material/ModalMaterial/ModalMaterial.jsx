export const ModalMaterial = ({ onClose, onEdit }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Редагувати
      </button>
      <button type="button" onClick={onClose}>
        Закрите модальне вікно
      </button>
    </div>
  );
};
