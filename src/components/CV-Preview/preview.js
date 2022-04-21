/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/preview.scss';
import GeneralPreview from './generalpreview';
import DescribePreview from './describepreview';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='preview-container'>
        <GeneralPreview />
        <DescribePreview />
        <div className='edu-prev-container'>

        </div>
        <div className='pra-prev-container'>

        </div>
      </div>
    )
  }
}

export default Preview;