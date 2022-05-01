/* eslint-disable no-useless-constructor */
import React from 'react';
import Main from './components/main'
import gitHubLogo from './components/assets/GitHub-Mark-Light-32px.png'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app-container'>
        <header className='header-container'>
          <h1>CV Creator</h1>
        </header>
        <Main />
        <footer className='footer-container'>
          <a href='https://github.com/chheangg/cv-form-generator' target='_blank' rel='noreferrer'><img src={gitHubLogo} alt='github-logo' href='https://github.com/chheangg/cv-form-generator' ></img>Chheangg</a> @ 2022
        </footer>
      </div>
    );
  }
}

export { App };