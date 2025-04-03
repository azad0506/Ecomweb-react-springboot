

import { Button } from "@headlessui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginRequest, loginSuccess } from "../../stateRedux/Auth/Reducer";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiconfig";

const LoginForm = () => {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({

    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest())
    
    axios.post(`${API_BASE_URL}/auth/login`, formData)
      .then((response) => {
        console.log(response)
        const user = response.data;

        if (user.jwt) {
          localStorage.setItem("jwt", user.jwt);
        }
        // ✅ registerSuccess me user ka data pass karo
        dispatch(loginSuccess(user));
        toast.success(user.message)
       
      })
      .catch((error) => {

        dispatch(loginFailure(error.message));
      })
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white p-6   rounded-lg shadow-lg w-full max-w-md ">
      <div className="flex justify-center items-center  w-full ">
        <form
          onSubmit={handleSubmit}
          className=" w-full p-2"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          <div className="mb-4 w-full ">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>



        </form>
      </div>

      <div className="mt-4 py-3 flex flex-row items-center justify-center ">

        <p className="text-gray-700">If You dont't have account?</p>
        <Button
          className=" ml-5  text-blue-900 " size="small"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>

      </div>


    </div>
  );
};

export default LoginForm;
