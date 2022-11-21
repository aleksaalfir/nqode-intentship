import authService from './authService';

const { isAdministrator } = authService;

const userNav = [
  { url: '/books', text: 'Books' },
  { url: '/profile', text: 'Profile' }
];

const adminNav = [
  { url: '/books', text: 'Books' },
  { url: '/create-book', text: 'Add book' },
  { url: '/profile', text: 'Profile' },
  { url: '/rents', text: 'Rents' },
  { url: '/manage-users', text: 'Users' }
];

const getAllowedNavbarLinks = () => {
  return isAdministrator() ? adminNav : userNav;
};

const navBarService = { getAllowedNavbarLinks };

export default navBarService;
