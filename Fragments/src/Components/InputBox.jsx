import React from 'react'

const InputBox = ({handleKeyDown}) => {
  
  return (
    <>
    {/* <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder='Enter Your Code'
    onChange={handelOnChange}
    /> */}
    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder='Enter Your Code'
    onKeyDown={handleKeyDown}
    />
    </>
  )
}

export default InputBox
