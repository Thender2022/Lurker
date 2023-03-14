import sendRequest from './send-request';

const BASE_URL = '/api/userCart';

// Retrieve an unpaid order for the logged in user
export function addUserCart() {
  return sendRequest(`${BASE_URL}/userCart`, "POST", {});
}


