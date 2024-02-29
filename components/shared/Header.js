import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


const Header = () => {
  return (
    <header className='w-full'>
      <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">EVENTS</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
            <SignedIn>
                <UserButton afterSignOutUrl='/' />
            </SignedIn>
        </NavbarItem>
      <NavbarItem>
        <SignedOut>
            <Button>
                <Link href={'/sign-in'}>
                    Login
                </Link>
            </Button>
        </SignedOut>
        </NavbarItem>
     </NavbarContent>
    </Navbar>
    </header>
  )
}

export default Header