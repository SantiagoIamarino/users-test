import { vars } from "../config/vars"

export const getUsers = async () => {

  try {
    
    const results = 8
    const url = `${vars.API_URL}?results=${results}`

    let response = await fetch (url)
    response = await response.json()

    // Creating an object id based on the array index
    return response.results.map((user, index) => {
      return { ...user, id: index }
    })

  } catch (error) {
    console.error(error)
  }
  

}

export const filterUsers = (user, term) => {

  const regex = new RegExp(term)

  if(regex.test(user.name.first) || regex.test(user.name.last)) {
    return user
  }

  if(regex.test(user.email)) {
    return user
  }

}

export const sortUsers = (userA, userB, sortField) => {

  if(sortField === 'no-order') { // No order specified
    return 1
  }

  // Getting fields to test against from user A and user B 
  const { fieldA, fieldB } = getTestFields(userA, userB, sortField)

  if(fieldA < fieldB) {
    return - 1
  }

  return 1

}

const getTestFields = (userA, userB, sortField) => {

  // Checking complex objects first
  if(sortField === 'name') {
    return {
      fieldA: userA['name']['first'],
      fieldB: userB['name']['first']
    }
  }

  // Checking complex objects first
  if(sortField === 'city') {
    return {
      fieldA: userA['location']['city'],
      fieldB: userB['location']['city']
    }
  }

  return {
    fieldA: userA[sortField],
    fieldB: userB[sortField]
  }
}