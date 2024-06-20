import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  doSignInWithEmailAndPassword,
  doSignInWithFacebook,
  doSignInWithGoogle,
} from "../../firebase/auth"

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    setEmailError(false)
    setPasswordError(false)

    try {
      await doSignInWithEmailAndPassword(email, password)
      navigate("/")
    } catch (error) {
      setError("Sign In failed. Verify your username or password.")
      setEmailError(true)
      setPasswordError(true)
    }

    setLoading(false)
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
    <div className="relative flex flex-col h-screen items-center justify-center font-poppins">
      <img
        src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/heroImage.png"
        alt=""
        className="absolute w-full h-full object-cover -z-10 grayscale"
      />
      <div className="flex gap-x-2 py-2 sm:pb-10">
        <img
          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/LogoIcon.svg"
          alt="Logo"
          className="w-12 sm:w-16"
        />
        <p className="font-montserrat font-bold text-5xl sm:text-6xl">
          Furniro
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 p-8 mx-4 rounded-3xl shadow-lg bg-white">
        <h2 className="text-5xl pb-2 font-medium text-center sm:text-left">
          Welcome back!
        </h2>
        <p className="pb-4 text-center sm:pb-14 sm:text-left">
          Sign in now or{" "}
          <Link
            to={"/register"}
            className="text-Golden font-semibold hover:underline"
          >
            create an account.
          </Link>
        </p>
        <form onSubmit={handleEmailLogin} className="w-full">
          <div className="flex flex-col gap-y-4 pb-8">
            {error && (
              <p className="text-red-500 font-medium text-center">{error}</p>
            )}
            <div className={`flex flex-col ${emailError ? "error" : ""}`}>
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
                className={`w-full px-8 py-4 border-2 rounded-xl ${
                  emailError ? "border-red-500" : "border-Golden"
                }`}
              />
            </div>

            <div className={`flex flex-col ${passwordError ? "error" : ""}`}>
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
                className={`w-full px-8 py-4 border-2 rounded-xl ${
                  passwordError ? "border-red-500" : "border-Golden"
                }`}
              />
            </div>
            <Link to={"/forgot"} className="text-right hover:underline">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-8 bg-Golden text-white rounded-xl text-lg font-medium 
            transition-all hover:shadow-lg hover:brightness-110"
          >
            {loading ? "Loading..." : "Sign In"}
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
                alt="Sign In Facebook"
                className="w-8"
              ></img>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
