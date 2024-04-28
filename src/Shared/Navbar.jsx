import { Link, NavLink } from "react-router-dom"
import {IoMdMenu } from 'react-icons/io'
import {RxCross1} from 'react-icons/rx'
import { useContext, useState } from "react"
import { AuthContext } from '../AuthProvider/AuthProvider'

function Navbar() {
    const [isMenu, setIsMenu] = useState(false)
    const {user, signOutUser} = useContext(AuthContext)
    const [ishover, setIshover] = useState(false)

    // large device links
    const largeLinks = <ul className="flex gap-5">
        <NavLink to={"/"} className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold" : "text-black hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
            Home
        </NavLink>

        <NavLink to={"/all-tourists-spot"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold" : "text-black hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
            All Tourists Spot
        </NavLink>

        <NavLink to={"/add-tourists-spot"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold" : "text-black hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
            Add Tourists Spot
        </NavLink>

        <NavLink to={"/my-lists"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold" : "text-black hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
            My List
        </NavLink>
    </ul>

    const mdLinks = <ul className="grid grid-cols-1 gap-5">
    <NavLink to={"/"} className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold text-center" : "text-black text-center hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
        Home
    </NavLink>

    <NavLink to={"/all-tourists-spot"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold text-center" : "text-black text-center hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
        All Tourists Spot
    </NavLink>

    <NavLink to={"/add-tourists-spot"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold text-center" : "text-black text-center hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
        Add Tourists Spot
    </NavLink>

    <NavLink to={"/my-lists"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold text-center" : "text-black text-center hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
        My List
    </NavLink>
</ul>

    return (
        <>
        <div className="container mx-auto my-5">
            {/* Desktop Navbar */}
            <div className="flex md:flex lg:flex">
                <div className="grid grid-cols-3 items-center w-full">
                    <div className="hidden lg:flex items-center justify-start">
                        {largeLinks}
                    </div>

                    <div className="flex lg:hidden">
                        <IoMdMenu className={`text-xl ${isMenu ? "hidden" : "flex"}`} onClick={()=>setIsMenu(true)}/>
                        <RxCross1 className={`text-xl ${isMenu ? "flex" : "hidden"}`} onClick={()=>setIsMenu(false)}/>
                    </div>

                    <div className={`${isMenu ? "space-y-4 py-3 px-4 absolute top-10 z-[99999] bg-white flex" : "hidden"}`}>
                        {mdLinks}
                    </div>

                    <Link to={"/"} className="flex items-center justify-center">
                        <div className="flex flex-row lg:flex-col">
                            <h1 className="md:text-2xl lg:text-3xl font-bold"><span className="text-green-500">E</span>arth</h1>
                            <h1 className="md:text-2xl lg:text-3xl font-bold md:ml-3 lg:ml-7"><span className="text-green-500">P</span>review</h1>
                        </div>
                    </Link>

                    {
                        user ? 
                        <div className="hidden md:flex lg:flex items-center justify-end relative">
                            <div className="flex items-center justify-center flex-col" onMouseOver={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}>
                                <div className="md:w-14 lg:w-20 rounded-full md:border-2 lg:border-4 cursor-pointer border-green-900 p-1">
                                    <img className="w-full rounded-full" src={user.photoURL} alt="" />
                                </div>
                                <div className={`${ishover ? "absolute" : "hidden"} bg-white z-[9999999] py-3 px-4 rounded-lg lg:w-[60%] top-full right-1`}>
                                    <div>
                                        <h1 className="md:text-sm lg:text-lg">Welcome, <span className="text-green-900 lg:text-xl font-bold">{user.displayName}</span></h1>
                                        <div className="divider my-2"></div>
                                        <div>
                                            <button onClick={signOutUser} className="btn btn-ghost w-full bg-green-700 text-white font-bold md:text-lg lg:text-xl hover:bg-green-800">Log out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className={`hidden md:flex lg:flex items-center justify-end`}>
                            <div className="space-x-1 md:space-x-2 lg:space-x-3">
                                <Link to={"/login"} className="btn btn-ghost text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                                    Login
                                </Link>

                                <Link to={"/register"} className="btn btn-ghost text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                                    Register
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>

            {
                user ? 
                <div className="flex md:hidden lg:hidden justify-around mt-2 relative">
                    <div className="w-12 p-1 rounded-full border-green-900 border-2" onMouseOver={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}>
                        <img className="w-full rounded-full" src={user.photoURL} alt="" />
                    </div>

                    <div className={`${ishover ? "absolute" : "hidden"} z-[999999999] top-full`}>
                        <div className="bg-white py-2 px-4 rounded-lg">
                            <h1 className="text-xs">Welcome, <span className="text-green-900 font-bold text-sm">{user.displayName}</span></h1>
                            <div className="divider my-2"></div>
                            <div>
                                <button onClick={signOutUser} className="btn btn-ghost w-full bg-green-700 text-white font-bold hover:bg-green-800">Log out</button>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className={`flex md:hidden lg:hidden justify-around mt-2`}>
                    <Link to={"/login"} className="btn btn-ghost text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                        Login
                    </Link>

                    <Link to={"/register"} className="btn btn-ghost text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                        Register
                    </Link>
                </div>
            }
        </div>
        </>
    )
}

export default Navbar