/* eslint-disable no-useless-constructor */
import React from 'react';
import GeneralInfo from './generalinfo';
import DescribeInfo from './describeinfo';
import '../styles/form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='form-container'>
        <GeneralInfo />
        <DescribeInfo />
        <fieldset className='edu-container'>
          <legend>Educational Experiences</legend>
        </fieldset>
        <fieldset className='pract-container'>
          <legend>Work Experiences</legend>
        </fieldset>
      </form>
    )
  }
}

export default Form;