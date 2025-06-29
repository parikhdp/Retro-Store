import { Button } from '@/components/ui/button'
import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'

function Header() {

  const MenuList = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Store',
      path: '/store'
    },
    {
      name: 'Explore',
      path: '/explore'
    },
  ]

  return (
    <div className='flex p-4 px-10 md:px-32 lg-px-48 bg-primary border-b-2 border-black justify-between items-center'>
      <h2 className='font-bold text-lg bg-black text-white px-2 p-1'>Retro Store</h2>

      <ul className='flex  gap-5 '>
        {MenuList.map((menu, index) => (
          <li key={menu.name} className='px-2 p-1 font-bold cursor-pointer hover:border-2 hover:vorder-white'>{menu.name} </li>
        ))}
      </ul>

      <div className='flex gap-5 items-center'>
        <ShoppingBagIcon className='' />
        <Button className='bg-red-500 text-black hover:bg-red-600 '>
          Start Selling
        </Button>
      </div>
    </div>
  )
}

export default Header
