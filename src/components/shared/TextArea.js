import React, { useRef, useState } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'

const TextArea = ({
  label,
  classes,
  focusLabel
}) => {

  const [labelUp, setLabelUp] = useState(false)
  const popUpRef = useRef();

  const handleInputFocus = () => {
    setLabelUp(true)
  }

  // useOnClickOutside(popUpRef, () => {
  //   setLabelUp(false)
  // });

  return (
    <div className={`relative ${classes}`}>
      <label className={`absolute ${labelUp ? "ml-2 -mt-3 px-1 bg-white text-xs" + focusLabel : "ml-3 mt-1 text-sm"} duration-300`}>{label}</label>
      <textarea rows={5} type="text" className='w-full border border-gray-500 rounded-md py-1 px-3' onFocus={handleInputFocus} ref={popUpRef} autoComplete="off" />
    </div>
  )
}

export default TextArea