import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/Logo.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/PofileDropDown"

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        // console.log(res.data.data)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsCatalogOpen(false)
  }, [location.pathname])

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleCatalog = () => {
    setIsCatalogOpen(!isCatalogOpen)
  }

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-300 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-300">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-400"
                          : "text-richblack-300"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : (subLinks && subLinks.length) ? (
                          <>
                            {subLinks
                              // ?.filter(
                              //   (subLink) => subLink?.courses?.length > 0
                              // )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="bg-richblack-300 py-4 pl-4 hover:bg-slate-300"
                                  key={i}
                                >
                                  <p className="text-black">{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center text-white">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-400"
                          : "text-richblack-300"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className='flex gap-x-4 items-center'>
        {
          user && user?.accountType === "Student" && (
            <Link to="/dashboard/cart" className="relative text-white text-2xl">
              <AiOutlineShoppingCart className="relative" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-700 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          )
        }

        {token !== null && user?.image && (
          <Link to="/dashboard/my-profile" className="relative text-white text-2xl">
            <img src={user?.image} alt="Profile" className="bg-white w-6 h-6 rounded-full" />
          </Link>
        )}

        {
        // if not logged in then it will go for login and signup buttons  
          token===null && (
            <div className='hidden md:flex gap-5'>
              <Link to="/login">
                <button className='border-[1px] border-white text-white bg-black px-3 py-1 rounded-md'>Login</button>
              </Link>
              <Link to="/signup">
                <button className='border-[1px] border-white text-white bg-black px-3 py-1 rounded-md'>Signup</button>
              </Link>
            </div>
          )
        }
        
        {/* Mobile hamburger menu button */}
        <button 
          className="mr-4 md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose fontSize={24} />
          ) : (
            <AiOutlineMenu fontSize={24} />
          )}
        </button>
      </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-richblack-800 border-b border-richblack-300 z-[1000] md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            {/* Navigation Links */}
            {NavbarLinks.map((link, index) => (
              <div key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`flex cursor-pointer items-center justify-between py-2 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-400"
                          : "text-richblack-300"
                      }`}
                      onClick={toggleCatalog}
                    >
                      <p className="text-lg">{link.title}</p>
                      <BsChevronDown className={`transform transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {/* Mobile Catalog Dropdown */}
                    {isCatalogOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {loading ? (
                          <p className="text-richblack-300">Loading...</p>
                        ) : (subLinks && subLinks.length) ? (
                          subLinks
                            // ?.filter(
                            //   (subLink) => subLink?.courses?.length > 0
                            // )
                            ?.map((subLink, i) => (
                              <Link
                                key={i}
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="block py-2 px-4 text-richblack-300 hover:text-yellow-400 hover:bg-richblack-700 rounded"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))
                        ) : (
                          <p className="text-richblack-300">No Courses Found</p>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={link?.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <p
                      className={`text-lg py-2 ${
                        matchRoute(link?.path)
                          ? "text-yellow-400"
                          : "text-richblack-300"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Login/Signup buttons */}
            {token === null && (
              <div className='flex flex-col gap-3 pt-4 border-t border-richblack-600'>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className='w-full border-[1px] border-white text-white bg-black px-3 py-2 rounded-md'>
                    Login
                  </button>
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className='w-full border-[1px] border-white text-white bg-black px-3 py-2 rounded-md'>
                    Signup
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar