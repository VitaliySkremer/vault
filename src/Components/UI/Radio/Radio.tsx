import {HTMLAttributes, ReactNode} from 'react'

interface IRadio extends HTMLAttributes<HTMLInputElement>{
  children: ReactNode
}

export const Radio = ({children,...other}: IRadio) => {
  return (
    <label>
      <input type="radio" {...other}/>
      {children}
    </label>
  )
}
