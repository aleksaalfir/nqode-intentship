import jwtDecode from 'jwt-decode';

interface TokenData {
  aud: string;
  email: string;
  exp: number;
  iss: string;
  sub: string;
  userId: string;
  userRole: string;
}

export const getDecodedJwt = (): TokenData | null => {
  const token: string | null = localStorage.getItem('token');
  return token ? jwtDecode(token) : null;
};

export const getRoleFromJwt = (): string => {
  const decodedJwt = getDecodedJwt();
  return decodedJwt ? decodedJwt.userRole : '';
};

export const getIdFromJwt = (): string => {
  const decodedJwt = getDecodedJwt();
  return decodedJwt ? decodedJwt.userId : '';
};

export const isAdministrator = (): boolean => {
  return getRoleFromJwt() === 'ADMINISTRATOR';
};

export const isUser = (): boolean => {
  return getRoleFromJwt() === 'USER';
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.replace('/login');
};

export const isTokenExpired = (): boolean => {
  const token = getDecodedJwt();
  let currentDate = new Date();

  if (token!.exp * 1000 < currentDate.getTime()) {
    return true;
  }
  return false;
};
