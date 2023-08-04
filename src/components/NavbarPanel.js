import React, { useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import NavbarMobile from './NavbarMobile';
import { Button, Image } from 'semantic-ui-react';

const NavbarPanel = () => {

    const [toggle, setToggle] = useState(false)
    // reponsive logic
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    

  return (
    <div>
        { !isDesktopOrLaptop ? 
            <>
                <div className='navbarPanel_mobileBarSection'>
                    <div className='navbarPanel_appLogo'>
                        <Image alt="logo" src='https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg' avatar/>
                    </div>
                    <div>App Name</div>
                    <div><Button primary basic onClick={()=>setToggle(!toggle)}> == </Button></div>
                </div>
                <NavbarMobile toggle={toggle}/>
            </>
        : 
        <NavbarMobile/>
    }
    </div>
  )
}

export default NavbarPanel