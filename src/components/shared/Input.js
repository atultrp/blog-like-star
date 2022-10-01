import React, { useRef, useState } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'

const Input = ({
  label,
}) => {

  const [labelUp, setLabelUp] = useState(false)
  const popUpRef = useRef();

  const handleInputFocus = () => {
    setLabelUp(true)
  }

  useOnClickOutside(popUpRef, () => {
    setLabelUp(false)
  });

  console.log("labelUp", labelUp)

  return (
    <div className='relative'>
      <label className={`absolute ${labelUp ? "ml-2 -mt-3 px-1 bg-white text-sm" : "ml-3 mt-1"} duration-300`}>{label}</label>
      <input type="text" className='w-full border border-gray-500 rounded-md py-1 px-3' onFocus={handleInputFocus} ref={popUpRef} />
    </div>
  )
}

export default Input