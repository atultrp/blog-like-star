import React from 'react'
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const Input = ({
  type,
  name,
  label,
  placeholder,
  errorMessage,
  registerProps
}) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <div>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="authorName">
        {label}
      </label>
      <input
        {...registerProps}
        name={name}
        class="appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="authorName"
        type="text"
        placeholder={placeholder}
      />
      {errors.authorName && <span class="text-red-500 text-xs italic">HEYNlkdsnaflkan</span>}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  // value: PropTypes.string.isRequired,
  registerProps: PropTypes.object,
  // onChange: PropTypes.func,
  // onBlur: PropTypes.func,
};

Input.defaultProps = {
  placeholder: " ",
  label: "",
  // value: "",
  // onChange: () => { },
  registerProps: {},
  // onBlur: () => { },
};

export default Input