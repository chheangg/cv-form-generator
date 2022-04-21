/* eslint-disable no-useless-constructor */
import React from 'react';
import Main from './components/main'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main />
    );
  }
}

export { App };