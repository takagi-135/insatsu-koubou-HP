const BASE_PATHS = {
  top: '/',
  presidentMessage: '/president-message',
  companyHistory: '/company-history',
} as const;

export { BASE_PATHS };

export const PAGES = {
  top: {
    root: BASE_PATHS.top,
  },
  presidentMessage: {
    root: BASE_PATHS.presidentMessage,
  },
  companyHistory: {
    root: BASE_PATHS.companyHistory,
  },
} as const;
