/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/generalinfo.scss';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <fieldset className='gen-wrapper'>
                    <legend>General Information</legend>
          <div className='gen-container'>
            <div className='left-container'>
              <label htmlFor='first-name'>First Name</label>
              <input type='text' id='first-name' placeholder='John'></input>
              <label htmlFor='last-name'>Last Name</label>
              <input type='text' id='last-name' placeholder='Smith'></input>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' placeholder='John.smith@gmail.com'></input>
            </div>
            <div className='right-container'>
              <label htmlFor='dob'>Date of Birth</label>
              <input type='date'></input>
              <label htmlFor='phone-number'>Phone number</label>
              <input type='tel' id='phone-number' pattern="0[1-9][0-9]-[0-9]{3}-([0-9]{3}|[0-9]{4})" placeholder='012 345 678'></input>
              <label htmlFor='address'>Main address</label>
              <input type='text' id='address'></input>
            </div>
          </div>
        </fieldset>
    )
  }
}

export default GeneralInfo;