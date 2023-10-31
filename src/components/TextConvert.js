import React, { useState } from 'react'
import './TextConvert.css'
const TextConvert = () => {
    const [text,setText]= useState("")
    // const [characters,setCharacters]= useState(0)
    // const [words,setWords]= useState(0)
    function handleOnChange(e){
      

      setText(e.target.value)
  }

    function handleUppercase(e){
        e.preventDefault()

        setText(text.toUpperCase())
    }
    function handleLowercase(e){
        e.preventDefault()

        setText(text.toLowerCase())
    }
    


  return (
    <div className='container'>
        
      <form>
      <h1>Convert Your Text</h1>
        <textarea type="text" placeholder='Type Text Here' onChange={handleOnChange} value={text}/>
        <div className='btnDiv' >
          <button onClick={handleUppercase}>Uppercase</button>
          <button onClick={handleLowercase}>Lowercase</button>
          
          
          </div>
          
      </form>
      <div className="content">
            <h2>Your Text Summary</h2>
            <p>Characters: {text.length} </p>
            <p>Words: {text.replace(/\n/g, " ").split(' ').filter(value => value != "").length}</p>
          </div>
    </div>
  )
}

export default TextConvert
