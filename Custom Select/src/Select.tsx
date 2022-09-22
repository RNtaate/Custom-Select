import React, { useState } from 'react'
import styles from "./select.module.css";

type SelectOption = {
  label: String
  value: number
}

type SelectProps = {
  value?: SelectOption 
  onChange: (value: SelectOption | undefined) => void
  options: SelectOption[]
}

export function Select({value, onChange, options}: SelectProps) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      tabIndex={0}
      onBlur = {() => setIsOpen(false)}
      onClick = {() => setIsOpen(prev => !prev)}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button 
        className={styles["clear-btn"]}
      >&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>

      <ul className={`${styles.options} ${isOpen? styles.show : ""}`}>
        {options.map( option => {
          return <li key={option.value} className={styles.option}>{option.label}</li>
        })}
      </ul>
    </div>
  )
}
