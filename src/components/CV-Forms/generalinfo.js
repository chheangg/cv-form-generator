/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/GeneralInfo.scss';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className='gen-container'>
        <legend>General Information</legend>
        <div className='left-container'>
          <label for='first-name'>First Name</label>
          <input type='text' id='first-name' placeholder='John'></input>
          <label for='last-name'>Last Name</label>
          <input type='text' id='last-name' placeholder='Smith'></input>
          <label for='email'>Email</label>
          <input type='email' id='email' placeholder='John.smith@gmail.com'></input>
        </div>
        <div className='right-container'>
          <label for='dob'>Date of Birth</label>
          <input type='date'></input>
          <label for='phone-number'>Phone number</label>
          <input type='tel' id='phone-number' pattern="0[1-9][0-9]-[0-9]{3}-([0-9]{3}|[0-9]{4})" placeholder='012 345 678'></input>
          <label for='address'>Main address</label>
          <input type='text' id='address'></input>
        </div>
      </fieldset>
    )
  }
}

export default GeneralInfo;