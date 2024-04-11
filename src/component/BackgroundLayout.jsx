import React from 'react'
import { useStateContext } from '../context'

export const BackgroundLayout = () => {
const {weather} = useStateContext();
console.log(weather);

  return (
    <div>BackgroundLayout</div>
  )
}
