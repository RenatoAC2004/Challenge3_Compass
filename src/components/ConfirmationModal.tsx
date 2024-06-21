import React from "react"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  buttonText: string
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  buttonText,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="flex gap-x-2 justify-center pb-9">
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/LogoIcon.svg"
            alt="Logo"
          />
          <p className="font-montserrat font-bold text-6xl">Furniro</p>
        </div>
        <p className="text-lg font-semibold mb-4">{title}</p>
        <p className="text-sm pb-9">{message}</p>
        <button
          onClick={onClose}
          className="bg-Golden text-white px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default ConfirmationModal
