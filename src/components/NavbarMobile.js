import React, { useState } from 'react'
import { Image, Menu } from 'semantic-ui-react'


const NavbarMobile = ({toggle=true}) => {
    const [activeItem, setActiveItem] = useState('home');
    
    const handleItemClick = (e, {name}) =>{
        e.preventDefault();
        setActiveItem(name)
    }


  return (
    <div>       
        {
            toggle ? <Menu secondary pointing className='navbar_navbarMobile'>
                
            <Menu.Item 
                name='home'
                active={activeItem === 'home'}
                color={activeItem === 'home' ? 'red' : 'black'}
                onClick={handleItemClick}
                className='navbarItem'
            />
            
            <Menu.Item 
                name='Contact Us'
                active={activeItem === 'Contact Us'}
                color={activeItem === 'Contact Us' ? 'red' : 'black'}
                onClick={handleItemClick}
                className='navbarItem'
            /> 
            <Menu.Item 
                name='About Us'
                active={activeItem === 'About Us'}
                color={activeItem === 'About Us' ? 'red' : 'black'}
                onClick={handleItemClick}
                className='navbarItem'
            />

            <Menu.Menu position='right' className='navbarItem'>
                <Menu.Item 
                    name='Login'
                    active={activeItem === 'Login'}
                    color={activeItem === 'Login' ? 'blue' : 'black'}
                    onClick={handleItemClick}
                    className='navbarItem'
                />
            </Menu.Menu>
        </Menu> : null
        }
        
    </div>
  )
}

export default NavbarMobile