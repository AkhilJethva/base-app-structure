import React, { useState } from 'react'
import { Menu, Grid, Segment } from 'semantic-ui-react'

const NavbarPanel = () => {

    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, {name}) =>{
        e.preventDefault();
        setActiveItem(name)
    }
  return (
    <Segment >
        <Menu secondary pointing>
            <Menu.Item 
                name='home'
                active={activeItem === 'home'}
                color={activeItem === 'home' ? 'red' : ''}
                onClick={handleItemClick}
            />
            
            <Menu.Item 
                name='Contact Us'
                active={activeItem === 'Contact Us'}
                color={activeItem === 'Contact Us' ? 'red' : ''}
                onClick={handleItemClick}
            /> 
            <Menu.Item 
                name='About Us'
                active={activeItem === 'About Us'}
                color={activeItem === 'About Us' ? 'red' : ''}
                onClick={handleItemClick}
            />

            <Menu.Menu position='right'>
                <Menu.Item 
                    name='Login'
                    active={activeItem === 'Login'}
                    color={activeItem === 'Login' ? 'blue' : ''}
                    onClick={handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    </Segment>
  )
}

export default NavbarPanel