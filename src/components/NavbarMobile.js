import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const NavbarMobile = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [toggle, setToggle] = useState(false)

    const handleItemClick = (e, {name}) =>{
        e.preventDefault();
        setActiveItem(name)
    }


  return (
    <div>
        <div className='navbarPanel_mobileBarSection'>
            <div className='navbarPanel_appLogo'>LOGO</div>
            <div><button onClick={()=>setToggle(!toggle)}> == </button></div>
        </div>
        {
            toggle ? <Menu secondary pointing className='navbar_navbarMobile'>
            <Menu.Item 
                name='home'
                active={activeItem === 'home'}
                color={activeItem === 'home' ? 'red' : 'black'}
                onClick={handleItemClick}
            />
            
            <Menu.Item 
                name='Contact Us'
                active={activeItem === 'Contact Us'}
                color={activeItem === 'Contact Us' ? 'red' : 'black'}
                onClick={handleItemClick}
            /> 
            <Menu.Item 
                name='About Us'
                active={activeItem === 'About Us'}
                color={activeItem === 'About Us' ? 'red' : 'black'}
                onClick={handleItemClick}
            />

            <Menu.Menu position='right'>
                <Menu.Item 
                    name='Login'
                    active={activeItem === 'Login'}
                    color={activeItem === 'Login' ? 'blue' : 'black'}
                    onClick={handleItemClick}
                />
            </Menu.Menu>
        </Menu> : null
        }
        
    </div>
  )
}

export default NavbarMobile