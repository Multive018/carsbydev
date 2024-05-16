// eslint-disable-next-line no-unused-vars
import React , {useState} from 'react';
import './index.css'
import Navbar from './components/Navbar/Navbar';

function App() {

  const [ theme, setTheme ] = React.useState ('light'); 

  return (
    <div className= { `container ${theme}` }>
      <Navbar  theme={theme} setTheme={setTheme}/>
      
    </div>
  )
}

export default App
