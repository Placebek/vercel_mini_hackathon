import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='bg-zinc-900 h-[7vh] w-full relative flex flex-row '>
            <Link to={'/'} className='text-white text-[3vh]  font-semibold flex ml-[2vw] items-centers pt-2 cursor-pointer hover:text-slate-300'>BURGER QUEEN</Link>
            <Link to={'/auth/login'} className='absolute right-0 text-[2vh] text-white mr-5 py-[0.5vh] px-[0.5vw] border-2 mt-2 hover:bg-slate-600 cursor-pointer'>Войти</Link>
            <Link to={'/auth/register'} className='absolute right-0 text-[2vh] text-black bg-white mr-[5vw] py-[0.5vh] px-[0.5vw] mt-2 border-2 hover:bg-slate-200 cursor-pointer'>Регистрация</Link>

        </div>
    )
}

export default Header