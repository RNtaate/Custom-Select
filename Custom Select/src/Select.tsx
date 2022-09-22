import React, { useState } from 'react'
import styles from "./select.module.css";

type SelectOption = {
  label: string
  value: number
}

type SelectProps = {
  value?: SelectOption 
  onChange: (value: SelectOption | undefined) => void
  options: SelectOption[]
}

export function Select({value, onChange, options}: SelectProps) {

  const [isOpen, setIsOpen] = useState(false);

  const clearOption = () => {
    onChange(undefined)
  }

  const selectOption = (opt: SelectOption) => {
    if (value != opt) onChange(opt);
  }

  const isSelectedOption = (option: SelectOption) => {
    return value === option
  }
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
        onClick={ e => {
          e.stopPropagation()
          clearOption()}}
      >&times;</button>
      <div className={styles.divider}></div>
      <div 
        className={styles.caret}
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(prev => !prev)
        }}
      ></div>

      <ul className={`${styles.options} ${isOpen? styles.show : ""}`}>
        {options.map( option => {
          return <li 
            key={option.value} 
            className={`${styles.option} ${isSelectedOption(option) ? styles.selected: ""}`}
            onClick={() => selectOption(option)}
            >{option.label}</li>
        })}
      </ul>
    </div>
  )
}
