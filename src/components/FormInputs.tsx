import React from "react"

type InputProps = {
  label: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  type?: string
  id: string
  placeholder?: string
}

const FormInputs: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  type = "text",
  id,
  placeholder
}) => {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-white border border-FooterLightGray w-full rounded-xl py-6 px-5"
        />
      </div>
    </>
  )
}

export default FormInputs
