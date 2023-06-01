import React, { useState, useEffect } from "react";
import { loginUser } from "../functions/users";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userReducerFunc } from "../state/user/userSlice";

const Login = () => {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);
  const { email, password } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    loginUser(email, password)
      .then((res) => {
        console.log("User Sign In successfull", JSON.stringify(res.data));
        dispatch(userReducerFunc(res.data));
        console.log("User redux", JSON.stringify(res.data));
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => console.log("Error in user sign in", err));
  };
  return (
    <div className="flex flex-col items-center justify-center self-center mt-8 border-[2px] border-[#212020] p-3">
      <div className="w-full bg-[#121212] p-2">
        <p className="text-slate-50 text-xl font-bold font-serif">Sign-In</p>
      </div>

      <form
        className="w-full flex flex-col items-center mt-2 justify-center"
        onSubmit={handleSubmit}
      >
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

        <button
          type="submit"
          className="rounded-lg text-[#121122] font-medium bg-[#ded5d5] hover:transition-all mt-1 mb-1 hover:text-slate-50 hover:bg-[#121212]"
          style={{
            padding: "0.5rem 1rem",
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
