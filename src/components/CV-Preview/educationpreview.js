/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/educationpreview.scss'

class EducationPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='edu-prev-container'>
        <h1 className='big-text'>Education Background</h1>
        <div className='edu-prev-box'>
          <h2 className='title big-text'>
            Western International School (HS)
          </h2>
          <p className='timeframe text'>
            2019-2022
          </p>
          <p className='role text'>
            Secondary Education
          </p>
        </div>
        <div className='edu-prev-box'>
          <h2 className='title big-text'>
            Khemera Debate Society (HS)
          </h2>
          <p className='timeframe text'>
            2022-Present
          </p>
          <p className='role text'>
            Debating
          </p>
        </div>
      </div>
    )
  }
}

export default EducationPreview;