import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { SiSpacex } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="absolute flex items-center justify-between px-5 w-full">

        {/* {Navbar Icon} */}

        <div>
          <Link to='/'>
            <SiSpacex className='text-8xl text-white' />
          </Link>
        </div>

         {/* { Navbar List Items } */}

        <nav className={`${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to='/' className='text-white text-sm'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/launches' className='text-white text-sm'>
              Launches
            </Link>
          </li>
          <li>
            <Link to='/launches/upcoming' className='text-white text-sm'>
              Upcoming Launches
            </Link>
          </li>
          <li>
            <Link to='/launches/past' className='text-white text-sm'>
              Past Launches
            </Link>
          </li>
        </ul>
      </nav>

      {/* {Menu for Small devices} */}

        <div className='lg:hidden'>
          <button className="text-white text-sm uppercase tracking-wider"
           onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar