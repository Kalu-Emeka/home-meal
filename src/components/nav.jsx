import { useState } from "react";

function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    const [input, setInput] = useState(false);
    const showInput = () => {
        setInput(!input)
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-[#FFF5F5] shadow-md">
                <nav className="flex justify-between items-center  my-[10px] ml-20 h-10 pb-13 sm:mx-5 lg:ml-20">
                    <div className="flex justify-between items-center w-full sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="w-full">
                            <a className="text-[20px] text-black font-medium" href="/">Home<span className="text-[#E8B28E]">Meal</span></a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[17px] space-x-5 w-full text-black sm:hidden md:hidden lg:flex">
                        <li className="text-center text-md"><a className='hover:text-[#E8B28E] pr-3' href="/">Home</a></li>
                        <li className="text-center text-md"><a className='hover:text-[#E8B28E]  pr-3' href="#about">About Us</a></li>
                        <li className="text-center text-md"><a className='hover:text-[#E8B28E] pr-3' href="#service">Service</a></li>
                        <li className="text-center text-md"><a className='hover:text-[#E8B28E] pr-3' href="#contact">Contact Us</a></li>
                    </ul>
                    <div className="flex justify-end items-center mr-[1px] sm:hidden md:hidden lg:flex" onClick={showInput}>
                        <img className="w-[25%] cursor-pointer" src="/Images/search.jpeg" title="Search for meals available" alt="" />
                    </div>
                    <input className={!input ? 'hidden' : 'flex w-[30%] ease-in-out duration-500 outline-none bg-[#FFF5F5] border-b border-b-gray-300 mb-[10px]'} type="search" name="" id="" />
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-[#FFF5F5] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full px-12 pt-12 pb-[20px] space-y-6">
                            <li className="text-md"><a className='hover:text-[#E8B28E] font-medium' onClick={showNav} href="/">Home</a></li>
                            <li className="text-md"><a className='hover:text-[#E8B28E] font-medium' onClick={showNav} href="#about">About Us</a></li>
                            <li className="text-md"><a className='hover:text-[#E8B28E] font-medium' onClick={showNav} href="#service">Service</a></li>
                            <li className="text-md"><a className='hover:text-[#E8B28E] font-medium' onClick={showNav} href="#contact">Contact Us</a></li>
                        </ul>
                        <div className="px-12 pt-0">
                            <img className="w-[22%] cursor-pointer" src="/Images/search.jpeg" title="Search for meals available" alt="" />
                        </div>
                        <input className={!input ? 'hidden' : 'flex w-[30%] ease-in-out duration-500 outline-none bg-[#FFF5F5] border-b border-b-gray-300 mb-[10px]'} type="search" name="" id="" />
                    </div>
                   
                </nav>
            </div>
        </>
    )
}
export default NavBar