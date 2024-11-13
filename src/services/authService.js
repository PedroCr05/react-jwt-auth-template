import axios from "axios";

const BACKEND_URL = `http://localhost:3000`;

const signup = async (formData) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/users/signup`, formData);

    if (res.err) {
      throw new Error(res.err);
    }
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { signup };
