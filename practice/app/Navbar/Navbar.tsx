import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-around gap-20 py-8 px-5 bg-black text-white">
        <div><Image src="https://netizensstore.com/gymfit_theme/html/multipage_1/assets/images/logo.svg" width={100} height={100} alt={'logo'} /> </div>
        <div className='flex gap-5'>
        <div><Link href="/">Home</Link> </div>
            <div><Link href="/product">Product</Link> </div>
            <div>About</div>
            <div>Contact</div>
            <div>Register</div>
        </div>
    </div>
  )
}

export default Navbar