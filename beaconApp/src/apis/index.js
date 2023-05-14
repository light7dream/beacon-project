import api from './api';
// import {useDispatch} from 'redux'
export const fetchUsers = async (data) => () =>  {
  try {
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (userId, data) => {
  try {
    const response = await api.put(`/users/${userId}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
