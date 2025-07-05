import React from 'react'
import Bit from './Bit'
import {numberToBooleanArray} from '../utilities/functions'

export default function Byte({value} : {value: number}) {
    const bits = numberToBooleanArray(value)
    return (
    <div className="byte-container">
        {bits.map((on, index) => (
            <Bit key={index} on={on} />
        ))}
    </div>
  )
}
