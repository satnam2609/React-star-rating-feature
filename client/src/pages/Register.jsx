import React, { useState, useEffect } from "react";
import { registerUser, mailUser } from "../functions/users";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userReducerFunc } from "../state/user/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const text = "http://localhost:5173/register-complete";
  const subject = "Registration Complete";
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  };
  const [values, setValues] = useState(initialState);
  const { name, email, password, confirmPass } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");

    registerUser(name, email, password)
      .then((res) => {
        console.log("User Registration successfull", res.data);
        navigate("/login");
      })
      .catch((err) => console.log("Error in user registration", err));
  };
  return (
    <div className="flex flex-col items-center justify-center self-center mt-8 border-[2px] border-[#212020] p-3">
      <div className="w-full bg-[#121212] p-2">
        <p className="text-slate-50 text-xl font-bold font-serif">Register</p>
      </div>

      <form
        className="w-full flex flex-col items-center mt-2 justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="p-2 border-[1px] border-[#121212]"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="p-2 border-[1px] border-[#121212]"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="p-2 border-[1px] border-[#121212]"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between">
          <label>Confirm password</label>
          <input
            name="confirmPass"
            type="password"
            className="p-2 border-[1px] border-[#121212]"
            value={confirmPass}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="rounded-lg text-[#121122] font-medium bg-[#ded5d5] hover:transition-all mt-1 mb-1 hover:text-slate-50 hover:bg-[#121212]"
          style={{
            padding: "0.5rem 1rem",
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
