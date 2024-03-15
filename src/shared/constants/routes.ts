export const ROUTES = {
  CREATE: '/create',
  DEFAULT: '/',
  FAVORITES: '/favorites',
  FORGOT_PASS: '/auth/forgot-password',
  HOME: '/home',
  LINK_NAS_BEEN_SENT: '/auth/forgot-password/link-has-been-sent',
  LOGIN: '/auth/sign-in',
  MESSENGER: '/messenger',
  PROFILE: '/profile',
  REGISTER: '/auth/sign-up',
  SEARCH: '/search',
  STATISTICS: '/statistics',
}
export const PRIVATE_ROUTES = [
  ROUTES.DEFAULT,
  ROUTES.HOME,
  ROUTES.CREATE,
  ROUTES.PROFILE,
  ROUTES.SEARCH,
  ROUTES.STATISTICS,
  ROUTES.FAVORITES,
  ROUTES.MESSENGER,
]
