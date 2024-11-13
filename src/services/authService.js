import axios from "axios";

const BACKEND_URL = import.meta.VITE_EXPRESS_BACKEND_URL;

const signup = async (formData) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/users/signup`, formData);

    if (res.data.error) {
      throw new Error(res.data.error);
    }

    if (res.data.token) {
      localStorage.setItem(`token`, res.data.token);

      const user = JSON.parse(atob(res.data.token.split(`.`)[1]));
      return user;
    }

    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signin = async (formData) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/users/signin`, formData);

    if (res.data.error) {
      throw new Error(res.data.error);
    }

    if (res.data.token) {
      localStorage.setItem(`token`, res.data.token);

      const user = JSON.parse(atob(res.data.token.split(`.`)[1]));
      return user;
    }

    return res.data;
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

export { signup, signin, getUser };
