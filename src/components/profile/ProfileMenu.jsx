import React from 'react'

function ProfileMenu() {
    return (
        <div className='mt-[5vh] w-[20vw] border-r-[2px] border-white '>
            <div className='flex flex-col  text-[3vh] font-semibold font-mono text-zinc-700'>
                <div className='py-1 border-t-[2px] border-white pl-[1vw] '>Мои заказы</div>
                <div className='py-1 border-t-[2px] border-white pl-[1vw]'>Корзина</div>
                <div className='py-1 border-t-[2px] border-white pl-[1vw]'>Мои карты</div>
                <div className='py-1 border-t-[2px] border-white pl-[1vw]'>Бонусная карта</div>

            </div>
        </div>
    )
}

export default ProfileMenu