import React from 'react'

import userStyles from '../styles/users-styles.module.css' 
import { FaUserEdit } from 'react-icons/fa'
import { PropTypes } from 'prop-types'

export const User = ({ user, onSelect }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
            
        <div className={ userStyles['user'] }>

            <div className={userStyles['header-bg']}>
            </div>

            <div className={userStyles['user-name']}>
                <p>{ user.name.first } { user.name.last }</p>
            </div>
            <div className={userStyles['user-img']}>
                <img src={ user.picture.large } alt="" />
            </div>
            <div className={userStyles['user-email']}>
                <p>{ user.email }</p>
            </div>
            <div className={userStyles['user-phonenumber']}>
                <p>{ user.phone }</p>
            </div>
            <div className={userStyles['user-location']}>
                <p>{ user.location.city }, { user.location.state }, { user.location.country }</p>
            </div>

            <div className={userStyles['edit-user']}>
                <FaUserEdit onClick={() => onSelect(user)} />
            </div>

        </div>   

    </div>   
    
  )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
}
