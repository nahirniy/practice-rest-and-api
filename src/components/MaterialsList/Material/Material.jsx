import { Component } from 'react';
import { ModalMaterial } from './ModalMaterial/ModalMaterial';

class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { id, title, link } = item;
    const { isModalOpen } = this.state;

    return (
      <div>
        <h3>{title}</h3>
        <p>{link}</p>
        <button type="button" onClick={() => onDelete(id)}>
          Видалити
        </button>
        <button type="button" onClick={this.openModal}>
          Редагувати
        </button>
        {isModalOpen && (
          <ModalMaterial
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id, title: Date.now() })}
          />
        )}
      </div>
    );
  }
}

export default Material;
