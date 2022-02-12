
export const loginAction = ({dispatch, id, username, role}) => {

    localStorage.setItem("userData", JSON.stringify({id, username, role}));

    dispatch({
        type: "LOGIN_SUCCESS",
        payload: {id, username, role},
    })
    

};

export const keepLoginAction = ({ dispatch, id, username, role}) => {
    
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: {id, username, role},
  })

  };

export const logoutAction = (dispatch) => {
  localStorage.removeItem("userData")
  dispatch({
    type: "LOGOUT_SUCCESS"
  })
  };