
export const loginAction = ({dispatch, id, username, role}) => {

    localStorage.setItem("userData", JSON.stringify({id, username, role}));

    dispatch({
        type: "LOGIN_SUCCESS",
        payload: {id, username, role},
    })
    

};

export const keepLoginAction = ({ id, username, role }) => {
    return {
      type: "LOGIN_SUCCESS",
      payload: { id, username, role },
    };
  };