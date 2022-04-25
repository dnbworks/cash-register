import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
const Search = () => {
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleSubmit = () => {

  }
  return (
    <div className='d-flex'>
        <form onSubmit={handleSubmit} className={`modal__form ${!toggle && "hidden"}`}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </form>
        <span onClick={() => setToggle(!toggle)}><BiSearchAlt2/></span>
    </div>
  )
}

export default Search