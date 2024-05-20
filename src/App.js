/*Kollar om userns input matchar någon färg i vår lista om den gör det sparar vi den*/
import React, { useState } from 'react';
import AddColor from './AddColor';
import Content from './Content';

function App() {
  const [color, newColor] = useState('');
  const [hex, newHex] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  const inputColor = (e) => {
    const colorNames = ['blue', 'papayawhip', 'pink'];
    const userInput = e.target.value;

    // Check if any color name starts with the user input, ignoring case
    const matchedColor = colorNames.find((name) => name.toLowerCase().startsWith(userInput.toLowerCase()))

    if(matchedColor){
      newColor(matchedColor);
      localStorage.setItem('ColorList', JSON.stringify(matchedColor));
    }
    else{
      newColor('white');
    }
  };

  return (
    <main className='main'>
      <Content color={color} hex={hex} isDarkText={isDarkText} />
      <AddColor color={color} newColor={newColor} inputColor={inputColor} newHex={newHex} isDarkText={isDarkText} setIsDarkText={setIsDarkText} />
    </main>
  );
}

export default App;


