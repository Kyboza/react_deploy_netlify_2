/*Hämtar Info Från Användaren*/
import colorNames from 'colornames'
import React from 'react'

const AddColor = ({color, newColor, newHex, isDarkText, setIsDarkText}) => {


  return (
    <form className='formColor' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="DisplayColor">Display Color</label>
        <input
            autoFocus
            id='displayColor'
            type="text" 
            placeholder='Type a Color'
            required
            value={color}
            onChange = {(e) => {
              newColor(e.target.value)
              newHex(colorNames(e.target.value));
            }}
         />
         <button type='button' onClick={() => setIsDarkText(!isDarkText)}>Toggle Text Color</button>
    </form>
  )
}

export default AddColor