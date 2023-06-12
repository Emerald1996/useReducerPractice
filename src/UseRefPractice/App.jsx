import React from 'react'
import { useRef, useState } from 'react'

export default function App() {
    const[ name, setName] = useState("")
    const ref = useRef(null)

    const change = () => {
        setName(ref.current.value)
        // ref.current.focus()
    }
 /**** UseRef Hook is used for easy manipulation of the DOM E.g , We can change the name, clear, or focus
   each time a button is clicked in a form element. 

   Normally, we could have pass an onchange element(eventTargetValue) to read the input. However, UseRef has
   made this very easy.
  *  * */   


  return (
    <div>
        <h1>{name}</h1>
      <input type="text"  placeholder='enter something..' ref={ref}/>
      <button onClick={change}>Click me</button>
    </div>
  )
}
