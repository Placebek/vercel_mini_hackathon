import React from 'react'
import Burger4 from '../../../assets/img/burger4.png'

function BurgerCards() {
    return (
        <div className='h-[30vh] w-[12vw] bg-gray-400 shadow-2xl hover:siz transition-all'>
            <div className='h-[22vh] w-[12vw] relative transition-all duration-500 '>
                <div className='hover:h-[22vh] hover:w-[12vw] hove hover:bg-black hover:fixed '></div>
                <div className='absolute bg-red-600 text-[1.5vh] font-light text-white px-1'>Новинка</div>
                <div className='h-[20vh] w-[10vw] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute'>
                    <img src={Burger4} alt="" />
                </div>
            </div>
            <div className='h-[8vh] w-[12vw] bg-zinc-100 flex justify-center flex-col items-center'>
                <div>Гамбургер</div>
                <div></div>
                <div className='font-semibold'>2000тг</div>
            </div>
        </div>
    )
}

export default BurgerCards