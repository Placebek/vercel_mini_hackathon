import React from 'react'
import Burger from '../../assets/img/BurgerBanner.jpg'
import Burger1 from '../../assets/img/burger1.webp'
import Burger2 from '../../assets/img/burger2.webp'
import Burger3 from '../../assets/img/burger3.png'
import BurgerCards from '../UI/cards/BurgerCards'

function Home() {
    return (
        <div className=' '>
            <div
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(98, 98, 98, 0.35) 50%, #000000 100%), url(${Burger})`,
                }}
                className='h-[35vh] bg-cover bg-center relative flex justify-center flex-row'
            >
                <div className='bg-zinc-600 cursor-pointer h-[25vh] w-[14vw] absolute -bottom-40 left-1/2 -translate-x-1/2  shadow-xl hover:h-[30vh] transition-all duration-300 hover:w-[14.5vw] text-zinc-100 font-bold pl-2 opacity-90 hover:opacity-100' >
                    От шефа Жандарбек
                    <img src={Burger1} alt="" className='h-[25vh] w-[14vw]' />
                </div>
                <div className='bg-zinc-600 h-[25vh] cursor-pointer w-[14vw] absolute -bottom-40 left-[35.667vw] -translate-x-1/2  shadow-xl hover:h-[30vh] hover:w-[14.5vw] transition-all duration-300 text-zinc-100 font-bold pl-2 opacity-90 hover:opacity-100' >
                    Гамбургер Ультра-Сакен

                    <img src={Burger2} alt="" className='h-[25vh] w-[14vw]' />

                </div>
                <div className='bg-zinc-600 h-[25vh] w-[14vw] cursor-pointer  absolute -bottom-40 right-[21.667vw] -translate-x-1/2  shadow-xl hover:h-[30vh] transition-all  hover:w-[14.5vw] duration-300 text-zinc-100 font-bold pl-2 opacity-85 hover:opacity-100' >
                    Ддддддддикий бургер
                    <img src={Burger3} alt="" className='h-[25vh] w-[14vw]' />

                </div>
            </div>
            <div className='mt-[30vh] flex justify-center text-[4vh] text-zinc-200 font-semibold'>Бургеры в продаже</div>
            <div className='mt-[4vh] flex flex-row gap-x-[6vw] justify-center'>
                <BurgerCards />
            </div>
        </div>
    )
}

export default Home
