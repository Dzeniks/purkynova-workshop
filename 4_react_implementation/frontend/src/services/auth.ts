import api from './api';
import { AuthResponse, LoginCredentials, RegisterCredentials } from '../types';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post('/api/login', credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  const response = await api.post('/api/register', credentials);
  return response.data;
}; 