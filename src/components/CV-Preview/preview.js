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
    return (
      <div className='preview-container'>
        <GeneralPreview />
        <DescribePreview />
        <EducationPreview />
        <PracticalPreview />
      </div>
    )
  }
}

export default Preview;