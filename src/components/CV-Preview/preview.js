/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/preview.scss';
import GeneralPreview from './generalpreview';
import DescribePreview from './describepreview';
import EducationPreview from './educationpreview';
import PracticalPreview from './practicalpreview';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {generalInfo, briefInfo, educationInfo, practicalInfo} = this.props;
    return (
      <div className='preview-container'>
        <GeneralPreview user={generalInfo}/>
        <DescribePreview briefInfo={briefInfo}/>
        <EducationPreview educationInfo={educationInfo}/>
        <PracticalPreview practicalInfo={practicalInfo}/>
      </div>
    )
  }
}

export default Preview;