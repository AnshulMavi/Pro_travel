import React from 'react'
import { Button } from '@/components/ui/button'
function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
    <img src="../public/Logo.jpg" alt="logo" height={70} width={70} />
    <div>
        <Button>Login</Button>
    </div> 
    </div>

  )
}

export default Header