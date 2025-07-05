import React from 'react'


export default function Byte({on} : {on: boolean}) {
  return (
    <div className={on ? 'byte on' : 'byte off'}>
        
    </div>
  )
}
