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

const getDecodedJwt = (): TokenData | null => {
  const token: string | null = localStorage.getItem('token');
  return token ? jwtDecode(token) : null;
};

const getRoleFromJwt = (): string => {
  const decodedJwt = getDecodedJwt();
  return decodedJwt ? decodedJwt.userRole : '';
};

const getIdFromJwt = (): string => {
  const decodedJwt = getDecodedJwt();
  return decodedJwt ? decodedJwt.userId : '';
};

const isAdministrator = (): boolean => {
  return getRoleFromJwt() === 'ADMINISTRATOR';
};

const isUser = (): boolean => {
  return getRoleFromJwt() === 'USER';
};

const logout = () => {
  localStorage.removeItem('token');
  window.location.replace('/login');
};

const isTokenExpired = (): boolean => {
  const token = getDecodedJwt();
  let currentDate = new Date();

  if (token!.exp * 1000 < currentDate.getTime()) {
    localStorage.removeItem('token');
    return true;
  }
  return false;
};

const authService = {
  getDecodedJwt,
  getRoleFromJwt,
  getIdFromJwt,
  isAdministrator,
  isUser,
  logout,
  isTokenExpired
};

export default authService;
