import { Component } from 'react';
import { MaterialsForm } from './MaterialsForm/MaterialsForm';
import * as API from 'services/api';
import { MaterialList } from './MaterialsList/MaterialList';

class App extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterial();
      this.setState({ materials });
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ isLoading: false, error: true });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updateMaterial = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updateMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {error && <div>Щось пішло не так...</div>}
        <MaterialsForm onSubmit={this.addMaterial} />
        <MaterialList
          items={materials}
          onDelete={this.deleteMaterial}
          onUpdate={this.updateMaterial}
        />
      </>
    );
  }
}
export default App;
