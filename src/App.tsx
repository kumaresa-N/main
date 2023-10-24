import React from 'react';
import './App.css';
import { Button, Popup } from 'semantic-ui-react';
import img1 from "./img/allu2.png"

function App() {
  return (
    <div className="App">
        <Popup content={<img src={img1} width='400px' height='400px' alt='allu'/>} trigger={<Button icon='add' />} />
    </div>
  );
}

export default App;
