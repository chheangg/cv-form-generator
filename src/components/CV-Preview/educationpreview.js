/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/educationpreview.scss'
import EducationPreviewBox from './educationpreviewbox';

class EducationPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {educationInfo} = this.props;
    return (
      <div className='edu-prev-container'>
        <h1 className='big-text'>Education Background</h1>
        {educationInfo[0] ? educationInfo.map(x => <EducationPreviewBox info={x} key={x.key}/>) : ''}
      </div>
    )
  }
}

export default EducationPreview;