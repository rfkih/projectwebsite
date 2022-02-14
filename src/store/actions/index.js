
import axios from "../../utils/axios";

export const loginAction = (loginData) => {

  return async (dispatch) => {
    try {
      const res = await axios.get("/users",{
        params:{username: loginData.username, password: loginData.password}})

        if (res.data.length) {
          const {id, username, role} = res.data[0]

          localStorage.setItem(
            "userData",
            JSON.stringify({ id, username, role })
          );

          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { id, username, role}
          });
        } else {
          alert("Username or Password is incorrect")
        }

        
     
    } catch (error) {
      console.log({error});
    }
  }

    

};

export const keepLoginAction = ({ id, username, role}) => { 
  return {
    type: "LOGIN_SUCCESS",
    payload: {id, username, role},
  }

  };

export const logoutAction = (dispatch) => {
  localStorage.removeItem("userData")
  return{
    type: "LOGOUT_SUCCESS"
  }
  };