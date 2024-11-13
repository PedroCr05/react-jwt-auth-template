import axios from "axios";

const BACKEND_URL = import.meta.VITE_EXPRESS_BACKEND_URL;

const signup = async (formData) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/users/signup`, formData);

    if (res.err) {
      throw new Error(res.err);
    }
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signin = async (formData) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/users/signin`, formData);

    if (res.error) {
      throw new Error(res.error);
    }
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { signup, signin };
