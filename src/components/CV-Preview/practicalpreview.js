/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/practicalpreview.scss';
import PracticalPreviewBox from './practicalpreviewbox';

class PracticalPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {practicalInfo} = this.props
    return (
      <div className='pra-prev-container'>
        <h1 className='big-text'>
          Work experiences
        </h1>
        {practicalInfo[0] ? practicalInfo.map(x => <PracticalPreviewBox info={x} key={x.key}/>) : '' }
      </div>
    )
  }
}

export default PracticalPreview;