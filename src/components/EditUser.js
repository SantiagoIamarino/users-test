import userStyles from '../styles/users-styles.module.css' 

import React from 'react'
import { useField } from '../hooks/useField'
import { PropTypes } from 'prop-types' 
import { useDispatch } from 'react-redux'
import { setUser } from '../actions/userActions'

export const EditUser = ({ userData, onClose }) => {

  // Using useField custom hook to handle inputs
  const firstName = useField({ type: 'text', def: userData.name.first })
  const lastName = useField({ type: 'text', def: userData.name.last })
  const email = useField({ type: 'text', def: userData.email })
  const phoneNumber = useField({ type: 'text', def: userData.phone})
  const city = useField({ type: 'text', def: userData.location.city})
  const state = useField({ type: 'text', def: userData.location.state})
  const country = useField({ type: 'text', def: userData.location.country})

  const dispatch = useDispatch()

  const editUser = (e) => {

    e.preventDefault()

    const newUserData = {
      ...userData,
      name: {
        ...userData.name,
        first: firstName.value,
        last: lastName.value
      },
      email: email.value,
      phone: phoneNumber.value,
      location: {
        ...userData.location,
        city: city.value,
        state: state.value,
        country: country.value
      }
    }

    dispatch(setUser(newUserData))

    onClose(null)
    
  }

  return (
    <div className={ userStyles['edit-user-modal'] }>
      <div className={ userStyles['modal-bg'] } 
        onClick={ () => onClose(null) } ></div>
      
      <form onSubmit={ (e) => editUser(e) } >
        <div className="title mb-4 pb-2">
          <h4 >Edit user</h4>
          <hr />
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group mb-4">
              <label htmlFor="first_name">First name</label>
              <input { ...firstName }
                id="first_name" className='form-control'/>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-4">
              <label htmlFor="last_name">Last name</label>
              <input { ...lastName }
                id="last_name" className='form-control'/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group mb-4">
              <label htmlFor="email">Email</label>
              <input { ...email }
                id="email" className='form-control'/>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-4">
              <label htmlFor="phone_number">Phone Number</label>
              <input { ...phoneNumber }
                id="phone_number" className='form-control'/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="form-group mb-4">
              <label htmlFor="city">City</label>
              <input { ...city }
                id="city" className='form-control'/>
            </div>
          </div>
          <div className="col-4">
            <div className="form-group mb-4">
              <label htmlFor="state">State</label>
              <input { ...state }
                id="state" className='form-control'/>
            </div>
          </div>
          <div className="col-4">
            <div className="form-group mb-4">
              <label htmlFor="country">Country</label>
              <input { ...country }
                id="country" className='form-control'/>
            </div>
          </div>
        </div>

        <div className={ userStyles['final-btns'] }>
          <button className="btn btn-success">
            Edit
          </button>
          <button onClick={ () => onClose(null) } 
            type='button' className="btn btn-danger">
            Close
          </button>
        </div>
        
      </form>

    </div>
  )
}

EditUser.propTypes = {
  onClose: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
}
