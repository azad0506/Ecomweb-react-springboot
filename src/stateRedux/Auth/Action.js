import axios from "axios"
import { API_BASE_URL } from "../../config/apiconfig";
import { setUserProfile } from "./Reducer";
// Action.js me API call likho:
const token=localStorage.getItem("jwt");


 
 // Get User Profile
 // ✅ Corrected: fetchUserProfile now receives `dispatch` as an argument

export const fetchUserProfile =(jwt)=> async (dispatch) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(response)
     const  user=response.data;
     console.log("user :" ,user)
     dispatch(setUserProfile(response.data))
    
    } catch (error) {
      console.error("Error fetching user profile", error);
    }
  };