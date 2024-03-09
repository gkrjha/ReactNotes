import React from 'react'

const Container = (props) => {
  return (
    <div className="container">
      {/* <div className={`${styles['kg-container']}`}></div> */}
      {props.children}
    </div>
  )
}
export default Container





