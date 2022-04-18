import react from 'react';
import { useState } from 'react';
import './App.css';
import {Articles, NavBar, Footer, Why, Header} from './components';


function App() {

  // mobile menu activation
  const [menu, setMenu]= useState(false);

  const hamb= () => {
    setMenu(!menu);
  }
  return (
    <div>
      <NavBar menu={menu} click={hamb} />
      <Header menu={menu}/>
      <Why/>
      <Articles/>
      <Footer/> 
    </div>
  )
}

export default App;
