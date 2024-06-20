import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { RootReducer } from "../store"
import { useSelector } from "react-redux"
import CartOverlay from "./CartOverlay"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { userLoggedIn, signOut } = useAuth()
  const [showCartOverlay, setShowCartOverlay] = useState(false)
  const cartItems = useSelector((state: RootReducer) => state.cart.items)

  const toggleCartOverlay = () => {
    setShowCartOverlay(!showCartOverlay)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed w-full h-[6.25rem] py-7 px-2 bg-white flex justify-between items-center transition-all z-30
    sm:px-7 md:px-8 lg:px-14 ${
      scrolled ? "border-b border-gray-300 shadow-lg" : ""
    }`}
    >
      <div className="flex items-center gap-x-1">
        <img
          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/LogoIcon.svg"
          alt="Logo"
        />
        <p className="font-montserrat font-bold text-4xl">Furniro</p>
      </div>
      <div className="hidden md:flex gap-x-7 lg:gap-x-[4.688rem] font-poppins font-medium">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>

      <div className="hidden md:flex gap-x-9 pr-12">
        {userLoggedIn ? (
          <button onClick={signOut} className="ml-4">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/UserIcon.svg"
              alt="UserIcon"
            />
          </Link>
        )}

        <button onClick={toggleCartOverlay}>
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/CartIcon.svg"
            alt="CartIcon"
          />
        </button>
      </div>

      <button
        className="flex justify-center items-center md:hidden"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/CloseIcon.svg"
            alt="Close Menu Icon"
            className="w-8"
          />
        ) : (
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/HamburgerIcon.svg"
            alt="Hamburguer Menu Icon"
          />
        )}
      </button>

      <div
        className={`block fixed top-0 bg-LighterBeige h-screen transition-all ease-in-out w-64 md:hidden z-50 shadow-black shadow-lg ${
          menuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col justify-center h-[6.25rem] px-4">
          <div className="flex items-center gap-x-1 p-2 rounded-2xl bg-white border shadow-Golden shadow-sm">
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/LogoIcon.svg"
              alt="Logo"
            />
            <p className="font-montserrat font-bold text-4xl">Furniro</p>
          </div>
        </div>

        <div className="flex flex-col text-center gap-y-4 py-4 border-y-2 border-Golden font-poppins font-medium bg-LightBeige">
          <Link
            to="/"
            className="py-2 mx-2 border border-transparent rounded-md bg-white shadow-neutral-600 shadow-sm transition-all 
            hover:text-white hover:bg-Golden"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="py-2 mx-2 border border-transparent rounded-md bg-white shadow-neutral-600 shadow-sm transition-all 
            hover:text-white hover:bg-Golden"
          >
            Shop
          </Link>
          <Link
            to="/"
            className="py-2 mx-2 border border-transparent rounded-md bg-white shadow-neutral-600 shadow-sm transition-all 
            hover:text-white hover:bg-Golden"
          >
            About
          </Link>
          <Link
            to="/"
            className="py-2 mx-2 border border-transparent rounded-md bg-white shadow-neutral-600 shadow-sm transition-all 
            hover:text-white hover:bg-Golden"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-x-9 justify-center py-4">
          {userLoggedIn ? (
            <button onClick={signOut} className="ml-4">
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-black shadow-sm transition-all
          hover:bg-Golden"
            >
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/UserIcon.svg"
                alt="UserIcon"
              />
            </Link>
          )}
          <button
            className="flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-black shadow-sm transition-all
          hover:bg-Golden"
            onClick={toggleCartOverlay}
          >
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/CartIcon.svg"
              alt="CartIcon"
            />
          </button>
        </div>
      </div>
      {showCartOverlay && (
        <CartOverlay items={cartItems} onClose={toggleCartOverlay} />
      )}
    </header>
  )
}

export default Navbar
