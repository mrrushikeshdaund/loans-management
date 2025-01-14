export const environments = {
  production: false,
  BASE_URL: 'http://localhost:3000/',
  CUSTOMER_BASE_URL: 'http://localhost:3000/customers/',
  LOANS_BASE_URL: 'http://localhost:3000/loans/',
  CUSTOMER: {
    GET_ALL_CUSTOMERS: 'list',
    GET_CUSTOMER: 'view',
    PUT_CUSTOMER: 'update',
    POST_CUSTOMER: 'add',
    DELETE_CUSTOMER: 'delete',
  },
  LOANS: {
    GET_ALL_LOANS: 'list',
    GET_LOANS: 'view',
    PUT_LOANS: 'update',
    POST_LOANS: 'add',
    DELETE_LOANS: 'delete',
  },
};
