export const ADD = "ADD";
export const GET_SECRETS = "GET_SECRETS";
import axios from 'axios';

const URL = 'https://whisperserver.herokuapp.com/api/secrets';

export const getSecrets = () => {
  return dispatch => {
    return axios
      .get(URL)
      .then(response => {
        dispatch(getSecretsSuccess(response.data))
      })
      .catch(err => { throw err })
  }
}

export const getSecretsSuccess = secrets =>(
  {
    type: GET_SECRETS,
    secrets
  }
)

export const addItem = (title,price) => {
  return dispatch => {
    return axios
      .post(URL, {title,price})
      .then(response => {
        dispatch(addItemSuccess(response.data))
      })
      .catch(err => { throw err })
  }
}

export const addItemSuccess = (item) => (
  {
    type: ADD,
    item
  }
)