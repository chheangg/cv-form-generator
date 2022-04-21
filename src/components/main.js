/* eslint-disable no-useless-constructor */
import React from 'react';
import Form from './CV-Forms/form';
import Preview from './CV-Preview/preview'
import './styles/main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className='main-content'>
        <Form />
        <Preview />
      </main>
    )
  }
}

export default Main;