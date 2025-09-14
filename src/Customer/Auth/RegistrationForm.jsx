

// export default RegistrationForm
import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerFailure, registerRequest, registerSuccess } from "../../stateRedux/Auth/Reducer";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiconfig";
import toast from "react-hot-toast";
import { fetchUserProfile } from "../../stateRedux/Auth/Action";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state)
  const jwt = localStorage.getItem("jwt")
  // const value=useSelector( (state)=>{
  //   console.log(value)
  // })

  let navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerRequest());

    axios.post(`${API_BASE_URL}/auth/signup`, formData)
      .then((response) => {
        console.log(response)
        const user = response.data;

        if (user.jwt) {
          localStorage.setItem("jwt", user.jwt);
        }
        // ✅ registerSuccess me user ka data pass karo
        dispatch(registerSuccess(user));
        toast.success(user.message)
        // navigate("/login")

      })
      .catch(() => {

        dispatch(registerFailure());
      })
    // console.log("Form submitted", formData);
  };
  useEffect(() => {
    if (jwt) {
      dispatch(fetchUserProfile(jwt))
    }
  }, [jwt, dispatch]) // Agar jwt change ho jaye (login/logout hote waqt), to ye effect dobara chalega aur naya user profile fetch karega.
  return (
    <div className="flex flex-col justify-center items-center bg-white p-6   rounded-lg shadow-lg w-full max-w-md">
      <div className="flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className=""
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="mb-4">
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
            Register
          </button>



        </form>
      </div>

      <div className="mt-4 py-3 flex flex-row items-center justify-center ">

        <p className="text-gray-700">Already have an account?</p>
        <Button
          className=" ml-5  text-blue-900 " size="small"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>

      </div>


    </div>
  );
};

export default RegistrationForm;