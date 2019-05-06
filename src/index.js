import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';
import Logo from './assets/logo.svg';

// functional component
const App = ({...rest}) => {
  return (
    <div className='main-header'>
      <h1>Hello,</h1>
      <img src={Logo} alt='parcel logo'></img>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)