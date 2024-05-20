/*Kollar om userns input matchar någon färg i vår lista om den gör det visar vi den*/
import React from 'react';

const Content = ({ color, hex, isDarkText }) => {
    const colorNames = ['blue', 'papayawhip', 'pink'];
  
    // Convert the received color to lowercase for comparison
    const lowerCaseColor = color.toLowerCase();
  
    // Check if the received color exactly matches a color name
    const validColor = colorNames.includes(lowerCaseColor) ? color : 'white';
  
    return (
      <div className='content__container' style={{ 
        backgroundColor: validColor,
        color: isDarkText ? '#000' : '#FFF'
        }}>

        <p>{color !== '' ? color : 'Empty List'}</p>
        <p>{hex !== '' ? hex : null}</p>
      </div>
    );
  };
  
  export default Content;
  
  
