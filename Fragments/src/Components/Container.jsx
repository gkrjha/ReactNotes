import React from 'react'
import styles from "./Container.module.css"
const Container = (props) => {
  return (
    <div className={styles.Container}>
      {/* <div className={`${styles['kg-container']}`}></div> */}
      {props.children}
    </div>
  )
}

export default Container
