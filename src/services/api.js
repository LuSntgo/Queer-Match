import axios from "axios";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_API;

export async function createUser(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

export async function signIn(data) {
  const token = await axios.post(`${BASE_URL}/sign-in`, data);
  return token;
}

export async function getMovies() {
  const data = await axios.get(`${BASE_URL}/movies`);
  return data;
}
export async function getBooks() {
  const data = await axios.get(`${BASE_URL}/books`);
  return data;
}
export async function getSeries() {
  const data = await axios.get(`${BASE_URL}/series`);
  return data;
}
