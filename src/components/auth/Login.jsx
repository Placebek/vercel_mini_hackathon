import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='h-screen'>
            <div className='flex items-center bg-zinc-400 border-[2px] border-zinc-500 shadow-2xl absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[40vh] w-[20vw] flex-col gap-y-10 rounded-lg '>
                <div className='flex text-[3vh] text-slate-600 mt-10'>С возвращением</div>
                <div>

                    <input type='text' className='h-[4vh] text-[1.8vh] pl-2 rounded-full w-[12vw] shadow-lg placeholder:text-[1.5vh] hover:border-2 border-slate-500 ' placeholder='Введите имя пользователя'></input>
                </div>
                <div>
                    <input type='tel' className='h-[4vh] text-[1.8vh] pl-2 rounded-full w-[12vw] shadow-lg placeholder:text-[1.5vh] hover:border-2 border-slate-500 focus-visible:border-blue-400' placeholder='Введите пароль'></input>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='px-4 py-1 bg-zinc-300 rounded-full text-[2vh]  font-semibold shadow-lg hover:border-2 border-slate-500 cursor-pointer' >Войти</div>
                    <div className=''>Уже есть аккаунт? <Link to={'/auth/register'} className='underline text-slate-500 cursor-pointer hover:text-zinc-600'>Регистрация</Link></div>

                </div>
            </div>
        </div>
    )
}

export default Login