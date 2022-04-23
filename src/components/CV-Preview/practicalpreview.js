/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/practicalpreview.scss';

class PracticalPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='pra-prev-container'>
        <h1 className='big-text'>
          Work experiences
        </h1>
        <div className='prac-prev-box'>
          <h2 className='title big-text'>
            Concoct hosting
          </h2>
          <p className='role text'>
            Founder
          </p>
          <p className='timeframe text'>
            ???-???
          </p>
        </div>
      </div>
    )
  }
}

export default PracticalPreview;