import burgerMenu from '../assets/images/icon-menu.svg'
import { useState } from 'react'
export default function NavBar() {

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => setIsActive(!isActive);

  return (
    <>
      <ul className={`hidden sm:flex text-[18px] sm:text-[16px] sm:w-2/3
      place-content-around sm:items-center ${isActive ? 'visible' : ''}`}
      >
        <li className='duration-200 hover:scale-110 hover:text-darkGrayishBlue'><a href="#">Home</a></li>
        <li className='duration-200 hover:scale-110 hover:text-darkGrayishBlue'><a href="#">New</a></li>
        <li className='duration-200 hover:scale-110 hover:text-darkGrayishBlue'><a href="#">Popular</a></li>
        <li className='duration-200 hover:scale-110 hover:text-darkGrayishBlue'><a href="#">Trending</a></li>
        <li className='duration-200 hover:scale-110 hover:text-darkGrayishBlue'><a href="#">Categories</a></li>
      </ul>

      <img src={burgerMenu} className='cursor-pointer sm:hidden' onClick={toggleClass} />
    </>
  )
}