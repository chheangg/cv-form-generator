/* eslint-disable no-useless-constructor */
import React from 'react';
import EducationInfoBox from './educationinfobox';
import '../styles/educationinfo.scss';

class EducationInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {utility, educationInfo} = this.props;
    return (
      <fieldset className='edu-container'>
        <legend>Educational Experiences</legend>
        <div className='edu-create-container'>
          <div className='edu-create-btn'>
            <button type='button' onClick={utility.createList} id='edu-list' className='edu-create'></button>
          </div>
          {educationInfo[0] ? educationInfo.map(x => <EducationInfoBox key={x.key} index={x.key} utility={utility} />) : ''}
        </div>
      </fieldset>
    )
  }
}

export default EducationInfo;