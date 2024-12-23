import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'


function Register() {
    let ref = useRef('  ')
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.setAttribute('data-telegram-login', "qwerty_saken_bot");
        script.setAttribute('data-size', "medium");
        script.setAttribute('data-radius', "4");
        script.setAttribute('data-auth-url', "http://127.0.0.1:8000/telegram-callback/");
        script.setAttribute('data-request-access', "write");
        script.async = true;
        ref.current.appendChild(script);
    }, []);

    return (
        <div className='' >
            <div className='flex items-center bg-zinc-400 border-[2px]  border-zinc-500 shadow-2xl absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[45vh] w-[20vw] flex-col gap-y-10 rounded-lg '>
                <div className='flex text-[3vh] text-slate-600 mt-10'>Добро пожаловать</div>
                <div>
                    <div ref={ref} />
                    <input type='text' className='h-[4vh] text-[1.8vh] pl-2 rounded-full w-[12vw] shadow-lg placeholder:text-[1.5vh] hover:border-2 border-slate-500 ' placeholder='Введите имя пользователя'></input>
                </div>
                <div>
                    <input type='tel' className='h-[4vh] text-[1.8vh] pl-2 rounded-full w-[12vw] shadow-lg placeholder:text-[1.5vh] hover:border-2 border-slate-500 focus-vi    sible:border-blue-400' placeholder='Введите пароль'></input>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div onClick={''} className='px-4 py-1 bg-zinc-300 rounded-full text-[2vh]  font-semibold shadow-lg hover:border-2 border-slate-500 cursor-pointer' >Регистрация</div>
                    <div className=''>Уже есть аккаунт? <Link to={'/auth/login'} className='underline text-slate-500 cursor-pointer hover:text-zinc-600'>Войти</Link></div>

                </div>

            </div>
        </div>
    )
}

export default Register