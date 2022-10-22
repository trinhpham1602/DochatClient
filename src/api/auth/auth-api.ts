import { AxiosPromise } from 'axios';
import { apiClient } from '../apiClient';

export const logInAPI = (payload: Req.LogIn): AxiosPromise<Res.TokenInfo> => {
  try {
    return apiClient.post('/login', payload);
  } catch (e) {
    throw e;
  }
};
