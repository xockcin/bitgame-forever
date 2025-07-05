import React from 'react'


export default function Bit({on} : {on: boolean}) {
  return (
    <div className={on ? 'bit on' : 'bit off'} />
  )
}