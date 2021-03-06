import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { getUserInfoById } from './auth';

export const DELETE_CLIENT_REQUEST = 'DELETE_ClIENT_REQUEST';
export const deleteClientRequest = () => ({
    type: DELETE_CLIENT_REQUEST
});

export const DELETE_CLIENT_SUCCESS = 'DELETE_CLIENT_SUCCESS';
export const deleteClientSuccess = clients => ({
    type: DELETE_CLIENT_SUCCESS,
    clients
});

export const DELETE_CLIENT_ERROR = 'DELETE_CLIENT_ERROR';
export const deleteClientError = error => ({
    type: DELETE_CLIENT_ERROR,
    error
});

export const TOGGLE_CLIENT_VIEW = 'TOGGLE_CLIENT_VIEW';
export const toggleClient = string => ({
    type: TOGGLE_CLIENT_VIEW,
    string
});

export const GET_CLIENT_ID = 'GET_CLIENT_ID';
export const getClientId = clientId => ({
    type: GET_CLIENT_ID,
    clientId
});

export const DELETE_CLIENT_ID = 'DELETE_CLIENT_ID';
export const deleteClientId = clientId => ({
    type: DELETE_CLIENT_ID,
    clientId
});

export const deleteClient = (authToken, id, userId) => (dispatch) => {
    dispatch(deleteClientRequest());
    fetch(`${API_BASE_URL}/clients/${id}`, {
        method: 'DELETE', 
        body: JSON.stringify({userId}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          }
    })
    .then(res => normalizeResponseErrors(res))
    .then(client => {
        dispatch(deleteClientSuccess(client))
    })
    .then(() => {
        dispatch(getUserInfoById(authToken, userId))
    })
    .catch(err => {
        dispatch(deleteClientError(err));
    });
}


export const editClient = (authToken, values, id, userId) => (dispatch) => {
    const updateObject = {
            email: values.email,
            name: values.name,
            phone: values.phone 
    }
console.log('editing client > heres the updateObject', updateObject);

    fetch(`${API_BASE_URL}/clients/${id}`, {
        method: 'PUT', 
        body: JSON.stringify(updateObject),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          }
    })
    .then((res) => {
        console.log(res);
        res.json()
    })
    .then(() => {
        dispatch(getUserInfoById(authToken, userId))
    })
    .catch((result) => {
        console.error(result)
    })

}