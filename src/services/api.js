import axios from 'axios';

axios.defaults.baseURL = 'https://653a1b2de3b530c8d9e92c00.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post(`/materials`, values);
  return response.data;
};

export const getMaterial = async () => {
  const response = await axios.get(`/materials`);
  return response.data;
};

export const deleteMaterial = async id => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};

export const updateMaterial = async fields => {
  const response = await axios.put(`/materials/${fields.id}`, fields);
  return response.data;
};
