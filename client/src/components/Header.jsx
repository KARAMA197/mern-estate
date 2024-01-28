import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md flex justify-between items-center max-w-6xl mx-auto p-2'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
            <span className='text-slate-500'>Kara</span>
            <span className='text-slate-900'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-50 p-2 rounded-lg flex items-center'>
            <input 
                type="text" 
                placeholder="Search.." 
                className='bg-transparent focus:outline-none w-24 sm:w-64' 
            />
            <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-3'>
          <Link to='/'>
            <li className='hidden sm:inline cursor-pointer text-slate-900 hover:underline'>Home</li>
          </Link>
         <Link to='/about'>
          <li className='hidden sm:inline cursor-pointer text-slate-900 hover:underline'>About</li>
        </Link>
        <Link to='/sign-in'>
            <li className='hidden sm:inline cursor-pointer text-slate-900 hover:underline'>Sign In</li>
        </Link>    
        </ul>
    </header>
  )
}
