import axios from "axios";

// Forgot the ".env." | Never provided anything to begin with
const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;
console.log(`${BACKEND_URL}/users/signin`);

const signup = async (formData) => {
  try {
    // We want to use ".post" not ".get"
    const res = await axios.post(`${BACKEND_URL}/users/signup`, formData);
    console.log(BACKEND_URL);
    if (res.data.error) {
      throw new Error(res.data.error);
    }

    if (res.data.token) {
      localStorage.setItem(`token`, res.data.token);

      const user = JSON.parse(atob(res.data.token.split(`.`)[1]));
      return user;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signin = async (formData) => {
  try {
    // We want to use ".post" not ".get"
    const res = await axios.post(`${BACKEND_URL}/users/signin`, formData);

    if (res.data.error) {
      throw new Error(res.data.error);
    }

    if (res.data.token) {
      localStorage.setItem(`token`, res.data.token);

      const user = JSON.parse(atob(res.data.token.split(`.`)[1]));
      return user;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUser = () => {
  const token = localStorage.getItem(`token`);
  if (!token) return null;

  const user = JSON.parse(atob(token.split(`.`)[1]));
  return user;
};

const signout = () => {
  localStorage.removeItem(`token`);
};

export { signup, signin, getUser, signout };
