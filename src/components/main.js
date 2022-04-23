/* eslint-disable no-useless-constructor */
import React from 'react';
import Form from './CV-Forms/form';
import Preview from './CV-Preview/preview'
import './styles/main.scss';
import uniqid from 'uniqid';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: 'Ly Eang Chheang',
        title: 'DevOps',
        age: 18,
        email: 'lyeangchheang@gmail.com',
        contact: '+855 69980981',
        address: '#88B St. 134',
      },
      briefInfo: `Having over twenty repositories on github, despite been a high school student.\n
					Chheang is determined to study CS and learn all of its nuances and quarks to the
					full extent. I'm currently learning the expertise of system administration, networking,
					web development, and many more!`,
      practicalInfo: [
        {
          name: 'Concoct Hosting',
          role: 'Founder',
          from: '???',
          to: '???',
          key: uniqid(),
        }
      ],
      educationInfo: [
        {
          name: 'Western International School (HS)',
          role: 'Student (Secondary Education)',
          from: '2019',
          to: 'Present',
          key: uniqid(),
        }   
      ],
    }
  }

  render() {
    const {generalInfo, briefInfo, educationInfo, practicalInfo} = this.state
    return (
      <main className='main-content'>
        <Form />
        <Preview 
          generalInfo={generalInfo}
          briefInfo={briefInfo}
          practicalInfo={practicalInfo}
          educationInfo={educationInfo}
        /> 
      </main>
    )
  }
}

export default Main;