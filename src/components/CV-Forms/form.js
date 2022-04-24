/* eslint-disable no-useless-constructor */
import React from 'react';
import GeneralInfo from './generalinfo';
import DescribeInfo from './describeinfo';
import EducationInfo from './educationinfo';
import '../styles/form.scss';
import PracticalInfo from './practicalinfo';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {utility, educationInfo, practicalInfo} = this.props
    return (
      <form className='form-container'>
        <GeneralInfo updateField={utility.updateField}/>
        <DescribeInfo updateField={utility.updateField}/>
        <EducationInfo utility={utility} educationInfo={educationInfo}/>
        <PracticalInfo utility={utility} practicalInfo={practicalInfo}/>
      </form>
    )
  }
}

export default Form;