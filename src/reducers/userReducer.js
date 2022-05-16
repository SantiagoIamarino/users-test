const initialState = []

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case '@users/setUsers':
    return [
      ...state,
      ...payload
    ]

  case '@users/updateUser':
  
    return state.map((user) => {

      if(user.id === payload.id) {
        user = {
          ...user,
          ...payload
        }
      }

      return user

    })


  default:
    return state
  }
}
