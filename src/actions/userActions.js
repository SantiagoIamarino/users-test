import { getUsers } from "../services/userService";

export const initUsers = () => {

  return async (dispatch) => {
    const users = await getUsers()

    dispatch({
      type: '@users/setUsers',
      payload: users
    })
  }

}

export const setUser = (data) => {
  return {
    payload: data,
    type: '@users/updateUser',
  }

}