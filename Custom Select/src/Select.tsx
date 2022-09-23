import React, { useState, useEffect } from 'react'
import styles from "./select.module.css";

export type SelectOption = {
  label: string
  value: string | number
}

type MultipleSelectProps = {
  multiple: true
  value: SelectOption[]
  onChange: (value: SelectOption[]) => void
}

type SingleSelectProps = {
  multiple?: false
  value?: SelectOption
  onChange: (value: SelectOption | undefined) => void
}

type SelectProps = {
  options: SelectOption[]
} & (SingleSelectProps | MultipleSelectProps)

export function Select({multiple, value, onChange, options}: SelectProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const clearOption = () => {
    multiple ? onChange([]) : onChange(undefined)
  }

  const selectOption = (opt: SelectOption) => {
    if (multiple) {
      if (value.includes(opt)) {
        onChange(value.filter( el => el !==  opt))
      }else {
        onChange([...value, opt])
      }
    }else {
      if (value !== opt) onChange(opt)
    }
  }

  const isSelectedOption = (option: SelectOption) => {
    return multiple ? value.includes(option) : value === option
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])

  return (
    <div 
      tabIndex={0}
      onBlur = {() => setIsOpen(false)}
      onClick = {() => setIsOpen(prev => !prev)}
      className={styles.container}
    >
      <span className={styles.value}>{ multiple ? (value.map(opt => {
      return <button key={opt.value} onClick={e => {
        e.stopPropagation();
        selectOption(opt)
      }}
        className={styles["card-btn"]}
      >
        <span className={styles.holder}>{opt.label}</span>
        <span className={styles["card-remove"]}>&times;</span>
      </button>
      })) : value?.label }</span>
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
        {options.map( (option, index) => {
          return <li 
            key={option.value} 
            className={`${styles.option} ${isSelectedOption(option) ? styles.selected: ""} ${highlightedIndex === index ? styles.highlighted : ""}`}
            onClick={() => selectOption(option)}
            onMouseEnter= {() => setHighlightedIndex(index)}
            >{option.label}</li>
        })}
      </ul>
    </div>
  )
}
