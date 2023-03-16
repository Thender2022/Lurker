import sendRequest from './send-request';

const BASE_URL = '/api/userCart';

// Retrieve an unpaid order for the logged in user
export function addUserCart() {
  return sendRequest(`${BASE_URL}`, "POST", {});
}

export function addNote(noteData, userCartId) {
  return sendRequest(`${BASE_URL}/${userCartId}/userCartNotes`, "POST", noteData);
}

export function getUserCart() {
  return sendRequest(`${BASE_URL}`, "GET");
}

