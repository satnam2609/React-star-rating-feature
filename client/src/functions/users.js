import axios from "axios";

export const registerUser = async (name, email, password) => {
  return await axios.post("http://localhost:5000/api/v0/user/register", {
    name,
    email,
    password,
  });
};

export const loginUser = async (email, password) => {
  return await axios.post("http://localhost:5000/api/v0/user/login", {
    email,
    password,
  });
};

export const mailUser = async (email, text, subject) => {
  return await axios.post("http://localhost:5000/api/v0/post/mail", {
    email,
    text,
    subject,
  });
};
