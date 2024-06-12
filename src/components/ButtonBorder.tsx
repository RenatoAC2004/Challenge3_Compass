import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  text: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const ButtonBorder = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="py-3 px-[4.875rem] border border-Golden text-Golden bg-white font-poppins font-semibold transition-all
      hover:bg-Golden hover:text-white"
    >
      {text}
    </button>
  )
}

export default ButtonBorder
