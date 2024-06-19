import React, { useState, FormEvent } from "react"
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithFacebook,
  doSignInWithGoogle,
} from "../../firebase/auth"
import { Link, useNavigate } from "react-router-dom"

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)

    try {
      await doCreateUserWithEmailAndPassword(email, password)
      setShowConfirmationModal(true)
    } catch (error) {
      setError("Failed to register. Verify your email and password.")
    }

    setLoading(false)
  }

  const handleConfirmation = () => {
    setShowConfirmationModal(false)
    navigate("/")
  }

  const handleGoogleLogin = async () => {
    setError("")
    setLoading(true)

    try {
      await doSignInWithGoogle()
      navigate("/")
    } catch (error) {
      setError("Login with Google failed.")
    }

    setLoading(false)
  }

  const handleFacebookLogin = async () => {
    setError("")
    setLoading(true)

    try {
      await doSignInWithFacebook()
      navigate("/")
    } catch (error) {
      setError("Login with Facebook failed.")
    }

    setLoading(false)
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center font-poppins">
      <img
        src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/heroImage.png"
        alt=""
        className="absolute w-full h-full object-cover -z-10 grayscale"
      />
      <div className="flex gap-x-2 pb-5">
        <img
          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/LogoIcon.svg"
          alt="Logo"
          className="w-12 sm:w-16"
        />
        <p className="font-montserrat font-bold text-5xl sm:text-6xl">
          Furniro
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 p-8 mx-2 rounded-3xl shadow-lg bg-white py-4 sm:py-8">
        <h2 className="text-4xl text-center pb-2 font-medium sm:text-5xl sm:text-left">
          Create your account
        </h2>
        <p className="pb-7 text-center sm:text-left">
          If you already have one,{" "}
          <Link
            to={"/login"}
            className="text-Golden font-semibold hover:underline"
          >
            sign in now.
          </Link>
        </p>
        <form onSubmit={handleRegister} className="w-full">
          <div className="flex flex-col gap-y-2 sm:gap-y-4 pb-8">
            {error && (
              <p className="text-red-500 font-medium text-center pb-4 sm:pb-0">
                {error}
              </p>
            )}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Insert your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-8 py-4 border-2 rounded-xl border-Golden"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-8 py-4 border-2 rounded-xl border-Golden"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-lg font-semibold"
              >
                Password confirmation
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                className="w-full px-8 py-4 border-2 rounded-xl border-Golden"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-8 bg-Golden text-white rounded-xl text-lg font-medium 
            transition-all hover:shadow-lg hover:brightness-110"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <div className="w-full flex justify-center items-center gap-x-4 py-8">
          <div className="w-full h-0.5 bg-FooterLightGray"></div>
          <p className="w-full text-nowrap">Or continue with</p>
          <div className="w-full h-0.5 bg-FooterLightGray"></div>
        </div>

        <div className="flex w-full gap-x-4 justify-center">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex justify-center items-center py-2 px-6 w-fit border rounded-xl shadow-xl transition-all
            hover:bg-[#ebebeb]"
          >
            {loading ? (
              "Loading..."
            ) : (
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/GoogleIcon.svg"
                alt="Sign In Google"
                className="w-8"
              ></img>
            )}
          </button>
          <button
            onClick={handleFacebookLogin}
            disabled={loading}
            className="flex justify-center items-center py-2 px-6 w-fit border rounded-xl shadow-xl transition-all
            hover:bg-[#ebebeb]"
          >
            {loading ? (
              "Loading..."
            ) : (
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/FacebookLoginIcon.svg"
                alt="Sign In Google"
                className="w-8"
              ></img>
            )}
          </button>
        </div>
      </div>
      {showConfirmationModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex gap-x-2 justify-center pb-9">
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/LogoIcon.svg"
                alt="Logo"
              />
              <p className="font-montserrat font-bold text-6xl">Furniro</p>
            </div>
            <p className="text-lg font-semibold mb-4">
              Registration successful!
            </p>
            <p className="text-sm pb-9">
              Your account has been created successfully.
            </p>
            <button
              onClick={handleConfirmation}
              className="bg-Golden text-white px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80"
            >
              Proceed to home
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RegisterPage
