import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initUsers } from '../actions/userActions'
import { useField } from '../hooks/useField'
import { filterUsers, sortUsers } from '../services/userService'
import { EditUser } from './EditUser'
import { User } from './User'

export const Users = () => {
  
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const [userToEdit, setUserToEdit] = useState(null)
  const filterTerm = useField({ type:'text', def: '' })
  const [sortBy, setSortBy] = useState('no-order')

  const userSelected = (user) => {
    setUserToEdit(user)
  }

  // Fetching users from API
  useEffect(() => {
    dispatch(initUsers())
  }, [dispatch])

  return (
    <div className='users-list row mt-4 pt-4'>
      
      <div className="filters mb-4">
        <div className="row">
          <div className="col-6">
            <label htmlFor="search_bar">Search bar</label>
            <input { ...filterTerm }
              className="form-control" id="search_bar"
              placeholder='Filter by name or email' />
          </div>

          <div className="col-6">
            <label htmlFor="sort_by">Order by</label>
            <select onChange={ (e) => setSortBy(e.target.value) } 
              id="sort_by" className="form-control">
              <option value="no-order">Non-ordered</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="city">City</option>
              <option value="phone">Phone</option>
            </select>
          </div>
        </div>
      </div>

      {
        users
          .filter(user => filterUsers(user, filterTerm.value))
          .sort((a, b) => sortUsers(a, b, sortBy))
          .map((user, index) => (
            <User 
              key={user.id}
              user={user}
              onSelect={userSelected} 
            />
          ))
      }

      { 
        (userToEdit) && 
          <EditUser userData={userToEdit} onClose={userSelected} />
      }
      
    </div>
  )
}
