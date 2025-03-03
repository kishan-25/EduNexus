import React from "react"
import { Children } from "react"
import { Link } from "react-router-dom"

export default function CTAbutton({active,linkto,children}) {
    return(
        <>
            <Link to={linkto}>
                <div className={`rounded-md text-center font-semibold text-[13px] px-6 py-3 ${active ? "bg-yellow-50 text-black" : "bg-richblack-900 text-white"} hover:scale-95 transition-all duration-200`} >
                {children}
                </div>
            </Link>
        </>
    )
}
